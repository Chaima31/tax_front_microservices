import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleModule } from '../../Role/role/role.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProprietaireModule {
  id:Number;
  nom:String;
  prenom:String;
  cin:String;
  password:String;
  roles:RoleModule[];
 }
