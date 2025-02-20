import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-read',
  templateUrl: './account-read.component.html',
  styleUrls: ['./account-read.component.css']
})
export class AccountReadComponent implements AfterViewInit {
  account: Account[] = [];

  displayedColumns: string[] = ['id', 'email', 'password', 'social_media', 'action'];
  dataSource = new MatTableDataSource<Account>(this.account);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service : AccountService,
    private router : Router) {}

  ngAfterViewInit() {
    this.findAll();
  }

  findAll():void {
    this.service.findAll().subscribe((resposta) => {
      this.account = resposta;
      this.dataSource = new MatTableDataSource<Account>(this.account);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void {
    this.router.navigate(['account/create']);
  }
}
