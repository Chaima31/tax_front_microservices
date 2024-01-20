import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TerrainModule } from 'src/app/models/terrain/terrain/terrain.module';
import { TerrainService } from 'src/app/services/terrain/terrain.service';
import Swal from 'sweetalert2';
import { FormTerrainComponent } from './form-terrain/form-terrain.component';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnDestroy {
  terrainModule: TerrainModule[] = [];
  searchCIN: string = '';
  private destroy$ = new Subject<void>();

  constructor(private terrainservice: TerrainService, private _dialog: MatDialog) {}

  ngOnInit(): void {
    this.setupSearch();
    this.getAll();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setupSearch(): void {
    this.searchCINSubject.pipe(debounceTime(300), takeUntil(this.destroy$)).subscribe(() => {
      this.searchTerrains();
    });
  }

  private searchCINSubject = new Subject<void>();

  onInputChange(): void {
    this.searchCINSubject.next();
  }

  getAll() {
    this.terrainservice.GetAll().subscribe(
      (items) => {
        this.terrainModule = items;
        console.log(this.terrainModule);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openAddForm() {
    const dialogRef = this._dialog.open(FormTerrainComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAll();
        }
      },
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(FormTerrainComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAll();
        }
      },
    });
  }

  delete(id: Number) {
    Swal.fire({
      title: 'Es-tu sûr?',
      text: 'Vous ne pourrez pas revenir en arrière!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-la !',
    }).then((result) => {
      if (result.isConfirmed) {
        this.terrainservice.Delete(id).subscribe(
          () => {
            console.log('Terrain deleted successfully.');
            this.getAll();
          },
          (error) => {
            console.error('Error deleting terrain:', error);
          }
        );

        Swal.fire('Deleted!', 'Terrain a été supprimé.', 'success');
      }
    });
  }

  searchTerrains() {
    if (this.searchCIN.trim() !== '') {
      this.terrainservice.searchByProprietaireCIN(this.searchCIN).subscribe(
        (result) => {
          this.terrainModule = result;
        },
        (error) => {
          console.error('Error searching terrains:', error);
        }
      );
    } else {
      this.getAll();
    }
  }
}
