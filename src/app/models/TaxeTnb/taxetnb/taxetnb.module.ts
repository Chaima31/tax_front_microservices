import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerrainModule } from '../../terrain/terrain/terrain.module';
import { ProprietaireModule } from '../../proprietaire/proprietaire/proprietaire.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TaxetnbModule {
        id:Number;
        label:String;
        description:String;
        tnbyear:String;
        montantbase:Number;
        terrain:TerrainModule;
        proprietaire:ProprietaireModule;
}
