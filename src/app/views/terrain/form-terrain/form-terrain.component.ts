import { CategorieModule } from 'src/app/models/categorie/categorie/categorie.module';
import { ProprietaireModule } from 'src/app/models/proprietaire/proprietaire/proprietaire.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TerrainModule } from './../../../models/terrain/terrain/terrain.module';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TerrainService } from 'src/app/services/terrain/terrain.service';
import Swal from 'sweetalert2';
import { ProprietaireService } from 'src/app/services/proprietaire/proprietaire.service';
import { CategorieService } from 'src/app/services/Categorie/categorie.service';

@Component({
  selector: 'app-form-terrain',
  templateUrl: './form-terrain.component.html',
  styleUrls: ['./form-terrain.component.css']
})
export class FormTerrainComponent {
  catForm: FormGroup;
  terrainModule:TerrainModule[]=[];
  proprietaireModule:ProprietaireModule[]=[];
  categorieModule:CategorieModule[]=[];
  constructor(
    private _fb: FormBuilder,
    private terrainService:TerrainService,
    private _dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router:Router,
    private _dialogRef: MatDialogRef<FormTerrainComponent>,
    private proprietaireservice:ProprietaireService,
    private categorieservice:CategorieService){
this.catForm=this._fb.group({
'mc': '',
'proprietaire': '',
'categorie': ''
});
}
ngOnInit(): void {
  this.catForm.patchValue(this.data);
  this.GetAll();
  this.GetAllPropri();
  this.GetAllCateg();
}

GetAll(){
  this.terrainService.GetAll().subscribe(item=>{
    this.terrainModule=item;
    console.log(this.terrainModule);
  },error=>{
    console.log(error);
  })
}

GetAllPropri(){
  this.proprietaireservice.GetAll().subscribe(item=>{
    this.proprietaireModule=item;
    console.log("Prop");
    console.log(this.proprietaireModule);
  },error=>{
    console.log(error);
  })
}

GetAllCateg(){
  this.categorieservice.GetAll().subscribe(item=>{
    this.categorieModule=item;
    console.log("Categorie");
    console.log(this.categorieModule);
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
    } else {
      this.terrainService.add(this.catForm.value).subscribe({
        next: (val: any) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Proprietaire Ajouter avec succès',
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
