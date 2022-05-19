import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataInsta } from 'src/app/models/data-insta';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-extracted-data',
  templateUrl: './extracted-data.component.html',
  styleUrls: ['./extracted-data.component.css']
})
export class ExtractedDataComponent implements AfterViewInit {
  data: DataInsta[] = [];

  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone'];
  dataSource = new MatTableDataSource<DataInsta>(this.data);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service : AccountService,
    private router : Router) {}

  ngAfterViewInit() {
    this.dataInsta();
  }

  dataInsta():void {
    this.service.dataInsta().subscribe((resposta) => {
      this.data = resposta;
      this.dataSource = new MatTableDataSource<DataInsta>(this.data);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void {
    this.router.navigate(['extracted-data']);
  }
}
