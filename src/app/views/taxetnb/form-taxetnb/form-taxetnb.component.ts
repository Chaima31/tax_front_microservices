import { CategorieService } from './../../../services/Categorie/categorie.service';
import { Component, Inject } from '@angular/core';
import Swal from 'sweetalert2';
import { FormProprietaireComponent } from '../../proprietaire/form-proprietaire/form-proprietaire.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TaxetnbService } from 'src/app/services/Taxetnb/taxetnb.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TerrainService } from 'src/app/services/terrain/terrain.service';
import { TerrainModule } from 'src/app/models/terrain/terrain/terrain.module';
import { TaxetnbModule } from 'src/app/models/TaxeTnb/taxetnb/taxetnb.module';
import { CategorieModule } from 'src/app/models/categorie/categorie/categorie.module';

@Component({
  selector: 'app-form-taxetnb',
  templateUrl: './form-taxetnb.component.html',
  styleUrls: ['./form-taxetnb.component.css']
})
export class FormTaxetnbComponent {
  catForm: FormGroup;
  terrainModule:TerrainModule[]=[];
  taxetnbModule:TaxetnbModule[]=[];
  categories:CategorieModule[]=[];
  constructor(
    private _fb: FormBuilder,
    private terrainService:TerrainService,
    private _dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router:Router,
    private _dialogRef: MatDialogRef<FormTaxetnbComponent>,
    private taxetnbservice:TaxetnbService,
    private categorieService:CategorieService){
this.catForm=this._fb.group({
'label': '',
'description': '',
'tnbyear': '',
'montantbase': '',
'terrain': '',
});
}
ngOnInit(): void {
  this.catForm.patchValue(this.data);
  this.GetAllterrain();
  this.GetAll();
  this.GetAllCategories();
}

GetAllterrain(){
  this.terrainService.GetAll().subscribe(item=>{
    this.terrainModule=item;
  },error=>{
    console.log(error);
  })
}

GetAllCategories(){
  this.categorieService.GetAll().subscribe(item=>{
    this.categories=item;
  },error=>{
    console.log(error);
  })
}


GetAll(){
  this.taxetnbservice.GetAll().subscribe(item=>{
    this.taxetnbModule=item;
  },error=>{
    console.log(error);
  })
}

onFormSubmit() {
  if (this.catForm.valid) {
    if (this.data) {
      this.terrainService
        .update(this.data.id, this.catForm.value)
        .subscribe({
          next: (val: any) => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Terrain Modifier avec succès',
              showConfirmButton: false,
              timer: 1500
            });
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
    } else  {
      this.terrainService.add(this.catForm.value).subscribe({
        next: (val: any) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Terrain Ajouter avec succès',
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
