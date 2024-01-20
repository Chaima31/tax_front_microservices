import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/services/Categorie/categorie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-categories-component',
  templateUrl: './form-categories-component.component.html',
  styleUrls: ['./form-categories-component.component.css']
})
export class FormCategoriesComponentComponent {
  catForm: FormGroup;
  
  constructor(
    private _fb: FormBuilder,
    private categoriesService: CategorieService,
    private _dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private _dialogRef: MatDialogRef<FormCategoriesComponentComponent>,
  ) {
    this.catForm = this._fb.group({
      'type': '',
      'taux': null  // Default value for taux
    });
  }

  ngOnInit(): void {
    this.catForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.catForm.valid) {
      if (this.data) {
        this.categoriesService
          .updateCategorie(this.data.id, this.catForm.value)
          .subscribe({
            next: (val: any) => {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Categorie modifiée avec succès',
                showConfirmButton: false,
                timer: 1500
              });
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this.categoriesService.addCategorie(this.catForm.value).subscribe({
          next: (val: any) => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Categorie ajoutée avec succès',
              showConfirmButton: false,
              timer: 1500
            });
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
