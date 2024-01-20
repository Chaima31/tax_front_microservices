import { ProprietaireModule } from './../../proprietaire/proprietaire/proprietaire.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorieModule } from '../../categorie/categorie/categorie.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TerrainModule {
        id:Number;
        mc:Number;
        proprietaire:ProprietaireModule;
        categorie:CategorieModule;
 }
