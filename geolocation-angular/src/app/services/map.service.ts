import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http:HttpClient) { }

  getLocations(auth_token): Observable<any> {
    const headers = new HttpHeaders ({
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get(baseUrl+"/location", { headers: headers })
  }
}
