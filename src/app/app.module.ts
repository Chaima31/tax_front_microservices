import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentifComponent } from './authentif/authentif.component';
import { HomeComponent } from './partials/home/home.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { FormCategoriesComponentComponent } from './views/categories/form-categories-component/form-categories-component.component';
import { FormProprietaireComponent } from './views/proprietaire/form-proprietaire/form-proprietaire.component';
import { ProprietaireComponent } from './views/proprietaire/proprietaire.component';
import { FormTaxetnbComponent } from './views/taxetnb/form-taxetnb/form-taxetnb.component';
import { TaxetnbComponent } from './views/taxetnb/taxetnb.component';
import { FormTerrainComponent } from './views/terrain/form-terrain/form-terrain.component';
import { TerrainComponent } from './views/terrain/terrain.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    FormCategoriesComponentComponent,
    CategoriesComponent,
    ProprietaireComponent,
    FormProprietaireComponent,
    TerrainComponent,
    FormTerrainComponent,
    TaxetnbComponent,
    FormTaxetnbComponent,
    AuthentifComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatIconTestingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
