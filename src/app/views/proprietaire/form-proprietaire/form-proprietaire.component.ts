import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  // Import Validators
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProprietaireService } from 'src/app/services/proprietaire/proprietaire.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-proprietaire',
  templateUrl: './form-proprietaire.component.html',
  styleUrls: ['./form-proprietaire.component.css']
})
export class FormProprietaireComponent {
  catForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private proprietaireService: ProprietaireService,
    private _dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private _dialogRef: MatDialogRef<FormProprietaireComponent>,
  ) {
    this.catForm = this._fb.group({
      'nom': ['', Validators.required],      // Add Validators.required
      'prenom': ['', Validators.required],   // Add Validators.required
      'cin': ['', Validators.required],      // Add Validators.required
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.catForm.patchValue(this.data);
    }
  }

  onFormSubmit() {
    if (this.catForm.valid) {
      if (this.data) {
        // Your existing update logic
      } else {
        this.proprietaireService.add(this.catForm.value).subscribe({
          next: (val: any) => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Proprietaire ajoutée avec succès',
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
