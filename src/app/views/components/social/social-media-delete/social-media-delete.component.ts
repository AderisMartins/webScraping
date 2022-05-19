import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Social } from 'src/app/models/social';
import { SocialMediaService } from 'src/app/services/social-media.service';

@Component({
  selector: 'app-social-media-delete',
  templateUrl: './social-media-delete.component.html',
  styleUrls: ['./social-media-delete.component.css']
})
export class SocialMediaDeleteComponent implements OnInit {

  social_id = '';

  social: Social = {
    social_media: ''
  }

  constructor(
    private router: Router,
    private service: SocialMediaService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.social_id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.social_id).subscribe(resposta => {
      this.social = resposta;
    }, err => {
      if (err.error.error.match('Já cadastrada')) {
        this.service.message(err.error.error);
      } else {
        this.service.message('Rede social inválida!');
      }
    })
  }

  delete():void {
    this.service.delete(this.social_id).subscribe(resposta => {
      this.router.navigate(['social']);
      this.service.message('Rede social deletada com sucesso!');
    }, err => {
      if (err.error.error.match('possui contas associadas')) {
        this.service.message(err.error.error);
      }
    })
  }

  cancel(): void {
    this.router.navigate(['social']);
  }
}
