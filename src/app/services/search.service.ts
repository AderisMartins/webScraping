import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Search } from '../models/search';


@Injectable({
    providedIn: 'root'
  })
  export class SearchService {
  
    baseUrl: String = environment.baseUrl;
  
    constructor(
      private http: HttpClient,
      private snack: MatSnackBar) { }

  buscar(search: Search):Observable<Search[]> {
    const url = this.baseUrl + "/search";
    return this.http.post<Search[]>(url, search);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}