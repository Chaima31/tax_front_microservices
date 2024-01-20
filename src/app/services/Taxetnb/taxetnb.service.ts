import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaxetnbModule } from 'src/app/models/TaxeTnb/taxetnb/taxetnb.module';
import { environment } from 'src/environements/environement';

@Injectable({
  providedIn: 'root'
})
export class TaxetnbService {

  constructor(private _http:HttpClient) { }
  private readonly api: string = `${environment.apiUrl}/TaxeTnb`;
   is_add:Boolean=false;
  GetAll():Observable<TaxetnbModule[]>{
    return this._http.get<TaxetnbModule[]>(this.api+"/findAll");
  }

  GetById(id:Number):Observable<TaxetnbModule>{
    const endpoint=`${this.api}/findById/${id}`
    return this._http.get<TaxetnbModule>(endpoint);
  }

  update(id:Number,Terrain:TaxetnbModule):Observable<TaxetnbModule>{
    const endpoint=`${this.api}/update/${id}`
    return this._http.put<TaxetnbModule>(endpoint,Terrain);
  }

  add(Terrain:TaxetnbModule):Observable<TaxetnbModule>{
    const endpoint=`${this.api}/save`
    return this._http.post<TaxetnbModule>(endpoint,Terrain);
  }

  Delete(id:Number):Observable<Object>{
      const endpoint=`${this.api}/daleteById/${id}`;
      return this._http.delete(endpoint);
  }
}
