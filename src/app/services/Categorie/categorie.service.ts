import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategorieModule } from 'src/app/models/categorie/categorie/categorie.module';
import { environment } from 'src/environements/environement';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private _http:HttpClient) { }
  private readonly api: string = `${environment.apiUrl}/Categorie`;

  GetAll():Observable<CategorieModule[]>{
    return this._http.get<CategorieModule[]>(this.api+"/findAll");
  }

  GetById(id:Number):Observable<CategorieModule>{
    const endpoint=`${this.api}/findById/${id}`
    return this._http.get<CategorieModule>(endpoint);
  }

  updateCategorie(id:Number,Categories:CategorieModule):Observable<CategorieModule>{
    const endpoint=`${this.api}/update/${id}`
    return this._http.put<CategorieModule>(endpoint,Categories);
  }

  addCategorie(Categorie:CategorieModule):Observable<CategorieModule>{
    const endpoint=`${this.api}/save`
    return this._http.post<CategorieModule>(endpoint,Categorie);
  }

  DeleteCategorie(id:Number):Observable<Object>{
      const endpoint=`${this.api}/delete/${id}`;
      return this._http.delete(endpoint);
  }
}
