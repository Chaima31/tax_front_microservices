import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './partials/home/home.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { ProprietaireComponent } from './views/proprietaire/proprietaire.component';
import { TerrainComponent } from './views/terrain/terrain.component';
import { TaxetnbComponent } from './views/taxetnb/taxetnb.component';
import { AuthentifComponent } from './authentif/authentif.component';

const routes: Routes = [
  { path: "", redirectTo: "/authentif", pathMatch: 'full' },
  { path: "authentif", component: AuthentifComponent },
  {
    path: "home", children: [
      { path: "cat", component: CategoriesComponent },
      { path: "proprietaire", component: ProprietaireComponent },
      { path: "terrain", component: TerrainComponent },
      { path: "taxetnb", component: TaxetnbComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
