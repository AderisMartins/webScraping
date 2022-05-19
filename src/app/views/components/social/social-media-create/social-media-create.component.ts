import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Social } from 'src/app/models/social';
import { SocialMediaService } from 'src/app/services/social-media.service';

@Component({
  selector: 'app-social-media-create',
  templateUrl: './social-media-create.component.html',
  styleUrls: ['./social-media-create.component.css']
})
export class SocialMediaCreateComponent implements OnInit {

  social: Social = {
    social_media: ''
  }
  social_media = new FormControl('', [Validators.minLength(5)])

  constructor(
    private router: Router,
    private service: SocialMediaService) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['social'])
  }

  create(): void {
    this.service.create(this.social).subscribe((resposta) => {
      this.router.navigate(['social'])
      this.service.message('Rede social adicionada com sucesso!')
    }, err => {
      if (err.error.error.match('Já cadastrada')) {
        this.service.message(err.error.error)
      } else {
        this.service.message('Rede social inválida!')
      }
    })
  }

  errorValidSocialMedia(){
    if(this.social_media.invalid) {
      return 'Deve ter pelo menos 5 caracteres!';
    }
    return false;
  }
}
