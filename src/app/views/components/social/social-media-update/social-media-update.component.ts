import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Social } from 'src/app/models/social';
import { SocialMediaService } from 'src/app/services/social-media.service';

@Component({
  selector: 'app-social-media-update',
  templateUrl: './social-media-update.component.html',
  styleUrls: ['./social-media-update.component.css']
})
export class SocialMediaUpdateComponent implements OnInit {

  social_id = '';

  social: Social = {
    id: '',
    social_media: ''
  }
  social_media = new FormControl('', [Validators.minLength(5)])

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
    })
  }

  update():void {
    this.service.update(this.social).subscribe(resposta => {
      this.router.navigate(['social']);
      this.service.message('Rede social atualizada com sucesso!');
    })
  }

  cancel(): void {
    this.router.navigate(['social']);
  }
  
  errorValidSocialMedia(){
    if(this.social_media.invalid) {
      return 'Deve ter pelo menos 5 caracteres!';
    }
    return false;
  }
}
