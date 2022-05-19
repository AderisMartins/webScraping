import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent implements OnInit {

  account_id = '';

  account: Account = {
    id: '',
    email: '',
    password: '',
    social_id: ''
  }
  email = new FormControl('', [Validators.minLength(5)])
  password = new FormControl('', [Validators.minLength(3)])
  social_id = new FormControl('', [Validators.minLength(1)])

  constructor(
    private router: Router,
    private service: AccountService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.account_id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.account_id).subscribe(resposta => {
      this.account = resposta;
    })
  }

  cancel(): void {
    this.router.navigate(['account'])
  }

  update():void {
    this.service.update(this.account).subscribe((resposta) => {
      this.router.navigate(['account']);
      this.service.message('Conta atualizada com sucesso!');
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
      return 'Deve ter pelo menos 3 caracteres!';
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
