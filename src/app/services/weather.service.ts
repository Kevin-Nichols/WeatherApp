import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    const url = `${environment.weatherAPIBaseURL}/city/${cityName}`;

    return this.http.get<WeatherData>(url, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue)
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
    })
  }
}
