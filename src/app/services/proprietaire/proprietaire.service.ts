import { ProprietaireModule } from './../../models/proprietaire/proprietaire/proprietaire.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environements/environement';

@Injectable({
  providedIn: 'root'
})
export class ProprietaireService {

  constructor(private _http:HttpClient) { }
  private readonly api: string = `${environment.apiUrl}/proprietaire`;

  GetAll():Observable<ProprietaireModule[]>{
    return this._http.get<ProprietaireModule[]>(this.api+"/findAll");
  }

  GetById(id:Number):Observable<ProprietaireModule>{
    const endpoint=`${this.api}/findById/${id}`
    return this._http.get<ProprietaireModule>(endpoint);
  }

  update(id:Number,Categories:ProprietaireModule):Observable<ProprietaireModule>{
    const endpoint=`${this.api}/update/${id}`
    return this._http.put<ProprietaireModule>(endpoint,Categories);
  }

  add(Categorie:ProprietaireModule):Observable<ProprietaireModule>{
    const endpoint=`${this.api}/save`
    return this._http.post<ProprietaireModule>(endpoint,Categorie);
  }

  Delete(id:Number):Observable<Object>{
      const endpoint=`${this.api}/deleteById/${id}`;
      return this._http.delete(endpoint);
  }
}
