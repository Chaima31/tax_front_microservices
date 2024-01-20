import { TaxetnbService } from './../../services/Taxetnb/taxetnb.service';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FormTaxetnbComponent } from './form-taxetnb/form-taxetnb.component';
import { MatDialog } from '@angular/material/dialog';
import { TaxetnbModule } from 'src/app/models/TaxeTnb/taxetnb/taxetnb.module';
import { TerrainModule } from 'src/app/models/terrain/terrain/terrain.module';


@Component({
  selector: 'app-taxetnb',
  templateUrl: './taxetnb.component.html',
  styleUrls: ['./taxetnb.component.css']
})
export class TaxetnbComponent {
  taxetnb: TaxetnbModule[] = [];

  constructor(private taxservice: TaxetnbService, private _dialog: MatDialog) {}

  ngOnInit(): void {
    this.GetAll();
  }
  
  GetAll() {
    this.taxservice.GetAll().subscribe(
      (items) => {
        this.taxetnb = items;
        console.log(this.taxetnb);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  calculateMontantDeTaxe(terrain: TerrainModule | undefined): number {
    console.log('terrain.mc:', terrain?.mc);
    console.log('terrain.categorie:', terrain?.categorie);
    console.log('terrain.categorie.taux:', terrain?.categorie?.taux);
  
    if (terrain && terrain.categorie && terrain.categorie.taux) {
      return Number(terrain.mc) * Number(terrain.categorie.taux);
    }
    return 0; // or any default value you prefer
  }
  
  
  
  

  openAddForm() {
    const dialogRef = this._dialog.open(FormTaxetnbComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.GetAll();
        }
      },
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(FormTaxetnbComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.GetAll();
        }
      },
    });
  }

  Delete(id: Number) {
    Swal.fire({
      title: 'Es-tu sûr?',
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-la !',
    }).then((result) => {
      if (result.isConfirmed) {
        this.taxservice.Delete(id).subscribe((data) => {
          console.log(data);
          this.GetAll();
        });
        Swal.fire('Deleted!', 'Proprietaire a été supprimé.', 'success');
      }
    });
  }
}
