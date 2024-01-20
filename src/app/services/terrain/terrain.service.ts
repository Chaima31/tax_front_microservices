import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TerrainModule } from 'src/app/models/terrain/terrain/terrain.module';
import { environment } from 'src/environements/environement';

@Injectable({
  providedIn: 'root'
})
export class TerrainService {

  constructor(private _http:HttpClient) { }
  private readonly api: string = `${environment.apiUrl}/Terrain`;

  GetAll():Observable<TerrainModule[]>{
    return this._http.get<TerrainModule[]>(this.api+"/findAll");
  }

  GetById(id:Number):Observable<TerrainModule>{
    const endpoint=`${this.api}/findById/${id}`
    return this._http.get<TerrainModule>(endpoint);
  }

  update(id:Number,Terrain:TerrainModule):Observable<TerrainModule>{
    const endpoint=`${this.api}/update/${id}`
    return this._http.put<TerrainModule>(endpoint,Terrain);
  }

  add(Terrain:TerrainModule):Observable<TerrainModule>{
    const endpoint=`${this.api}/save`
    return this._http.post<TerrainModule>(endpoint,Terrain);
  }

  Delete(id:Number):Observable<Object>{
      const endpoint=`${this.api}/daleteById/${id}`;
      return this._http.delete(endpoint);
  }

  searchByProprietaireCIN(cin: string): Observable<TerrainModule[]> {
    const endpoint = `${this.api}/findByProprietaireCIN/${cin}`;
    return this._http.get<TerrainModule[]>(endpoint);
  }
}
