import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Social } from '../models/social';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private snack: MatSnackBar) { }

  findAll():Observable<Social[]> {
    const url = this.baseUrl + "/social";
    return this.http.get<Social[]>(url);
  }

  findById(id: any):Observable<Social> {
    const url = this.baseUrl + "/social/" + id;
    return this.http.get<Social>(url);
  }

  create(social: Social): Observable<Social> {
    const url = this.baseUrl + "/social/create";
    return this.http.post<Social>(url, social);
  }

  update(social: Social):Observable<Social> {
    const url = this.baseUrl + "/social/update/" + social.id;
    return this.http.put<Social>(url, social);
  }

  delete(id: any):Observable<void> {
    const url = this.baseUrl + "/social/delete/" + id;
    return this.http.delete<void>(url);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
