import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Social } from 'src/app/models/social';
import { SocialMediaService } from 'src/app/services/social-media.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-social-media-read',
  templateUrl: './social-media-read.component.html',
  styleUrls: ['./social-media-read.component.css']
})
export class SocialMediaReadComponent implements AfterViewInit {
  socialMedia: Social[] = [];

  displayedColumns: string[] = ['id', 'social_media', 'action'];
  dataSource = new MatTableDataSource<Social>(this.socialMedia);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service : SocialMediaService,
    private router : Router) {}

  ngAfterViewInit() {
    this.findAll();
  }

  findAll():void {
    this.service.findAll().subscribe((resposta) => {
      this.socialMedia = resposta;
      this.dataSource = new MatTableDataSource<Social>(this.socialMedia);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void {
    this.router.navigate(['social/create']);
  }
}
