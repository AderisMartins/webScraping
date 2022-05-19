import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

  account: Account = {
    email: '',
    password: '',
    social_id: ''
  }
  email = new FormControl('', [Validators.minLength(5)])
  password = new FormControl('', [Validators.minLength(5)])
  social_id = new FormControl('', [Validators.minLength(1)])

  constructor(
    private router: Router,
    private service: AccountService) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['account'])
  }

  create(): void {
    this.service.create(this.account).subscribe((resposta) => {
      this.router.navigate(['account'])
      this.service.message('Conta adicionada com sucesso!')
    })
  }

  errorValidEmail(){
    if(this.email.invalid) {
      return 'Deve ter pelo menos 5 caracteres!';
    }
    return false;
  }

  errorValidPassword(){
    if(this.password.invalid) {
      return 'Deve ter pelo menos 5 caracteres!';
    }
    return false;
  }

  errorValidSocialId(){
    if(this.social_id.invalid) {
      return 'Deve ter pelo menos 1 caracteres!';
    }
    return false;
  }
}
