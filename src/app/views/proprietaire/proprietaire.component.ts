import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProprietaireModule } from 'src/app/models/proprietaire/proprietaire/proprietaire.module';
import { ProprietaireService } from 'src/app/services/proprietaire/proprietaire.service';
import Swal from 'sweetalert2';
import { FormProprietaireComponent } from './form-proprietaire/form-proprietaire.component';

@Component({
  selector: 'app-proprietaire',
  templateUrl: './proprietaire.component.html',
  styleUrls: ['./proprietaire.component.css']
})
export class ProprietaireComponent {
  proprietaire: ProprietaireModule[] = [];

  constructor(private propService: ProprietaireService,
              private _dialog: MatDialog) {}

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll() {
    this.propService.GetAll().subscribe(item => {
      this.proprietaire = item;
      console.log(this.proprietaire);
    }, error => {
      console.log(error);
    });
  }

  openAddForm() {
    const dialogRef = this._dialog.open(FormProprietaireComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.GetAll();
        }
      },
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(FormProprietaireComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.showSuccessAlert('Proprietaire updated!');
          this.GetAll();
        }
      },
    });
  }

  Delete(id: Number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You cannot get back!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete!',
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger ml-2',
        popup: 'custom-swal-center' // Ajout de la classe pour centrer la boîte de dialogue
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.propService.Delete(id).subscribe(data => {
          console.log(data);
          this.showSuccessAlert('Delete Proprietaire!');
          this.GetAll();
        });
      }
    });
  }

  showSuccessAlert(message: string) {
    Swal.fire({
      title: 'Success!',
      text: message,
      icon: 'success',
      customClass: {
        popup: 'custom-popup'
      }
    });
  }
}
