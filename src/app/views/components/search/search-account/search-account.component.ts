import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Search } from 'src/app/models/search';
import { AccountService } from 'src/app/services/account.service'; //remover depois e criar um proprio para esse componente

@Component({
  selector: 'app-search-account',
  templateUrl: './search-account.component.html',
  styleUrls: ['./search-account.component.css']
})
export class SearchAccountComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['Instagram', 'Facebook'];

  search: Search = {
    rede_social: '',
    perfil: ''
  }
  perfil = new FormControl('', [Validators.minLength(5)])

  constructor(
    private router: Router,
    private service: AccountService) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['search'])
  }

  buscar(): void {
    this.service.buscar().subscribe((resposta) => {
      this.router.navigate(['account'])
      this.service.message('Conta adicionada com sucesso!')
    })
  }

  errorValidPerfil(){
    if(this.perfil.invalid) {
      return 'Deve ter pelo menos 5 caracteres!';
    }
    return false;
  }
}