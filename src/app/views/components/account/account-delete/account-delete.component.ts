import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-delete',
  templateUrl: './account-delete.component.html',
  styleUrls: ['./account-delete.component.css']
})
export class AccountDeleteComponent implements OnInit {

  account_id = '';

  account: Account = {
    email: '',
    password: '',
    social_id: ''
  }

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
    }, err => {
      if (err.error.error.match('Já cadastrada')) {
        this.service.message(err.error.error);
      } else {
        this.service.message('Conta inválida!');
      }
    })
  }

  delete():void {
    this.service.delete(this.account_id).subscribe(resposta => {
      this.router.navigate(['account']);
      this.service.message('Conta deletada com sucesso!');
    })
  }

  cancel(): void {
    this.router.navigate(['account']);
  }
}
