import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from '../models/account';
import { DataInsta } from '../models/data-insta';
import { Search } from '../models/search'; // remover depois criar um proprio

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private snack: MatSnackBar) { }

  findAll():Observable<Account[]> {
    const url = this.baseUrl + "/account";
    return this.http.get<Account[]>(url);
  }

  findById(id: any):Observable<Account> {
    const url = this.baseUrl + "/account/" + id;
    return this.http.get<Account>(url);
  }

  create(account: Account): Observable<Account> {
    const url = this.baseUrl + "/account/create";
    return this.http.post<Account>(url, account);
  }

  update(account: Account):Observable<Account> {
    const url = this.baseUrl + "/account/update/" + account.id;
    return this.http.put<Account>(url, account);
  }

  delete(id: any):Observable<void> {
    const url = this.baseUrl + "/account/delete/" + id;
    return this.http.delete<void>(url);
  }

  buscar():Observable<Search[]> { //remover depois criar um proprio
    const url = this.baseUrl + "/search";
    return this.http.get<Search[]>(url);
  }

  dataInsta():Observable<DataInsta[]> { //remover depois criar um proprio
    const url = this.baseUrl + "/extracted-data";
    return this.http.get<DataInsta[]>(url);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}