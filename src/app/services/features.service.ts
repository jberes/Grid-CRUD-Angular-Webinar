import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { Feature } from '../models/features.model';

const API_ENDPOINT = 'https://localhost:7229';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  constructor(private http: HttpClient) { }

  public getFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>(`${API_ENDPOINT}/features`);
  }

  public async deleteFeature(feature: Feature): Promise<Feature> {
    console.log(feature);
    return await firstValueFrom(this.http.delete<Feature>
      (`${API_ENDPOINT}/features/${feature.featureId}`));
  }

  public async addFeature(feature: Feature): Promise<Feature> {
    console.log(feature);
    var headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    var body = JSON.stringify(feature);
    return await firstValueFrom(this.http.post<Feature>(`${API_ENDPOINT}/features/`, body, { headers }));
  }


  public async updateFeature(feature: Feature): Promise<Feature> {
    console.log(feature);
    //this.http.put<Feature>(`API_ENDPOINT/features/`, feature);
    var headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    var body = JSON.stringify(feature);
    return await firstValueFrom(this.http.put<Feature>(`${API_ENDPOINT}/features/`, body, { headers }));
  }
}
