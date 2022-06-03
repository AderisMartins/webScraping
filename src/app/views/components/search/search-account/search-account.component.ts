import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { finalize, Subscription } from 'rxjs';
import { Search } from 'src/app/models/search';
import { AccountService } from 'src/app/services/account.service'; //remover depois e criar um proprio para esse componente

@Component({
  selector: 'app-search-account',
  templateUrl: './search-account.component.html',
  styleUrls: ['./search-account.component.css']
})
export class SearchAccountComponent implements OnInit {

  @Input()
  requiredFileType!: string;

  fileName = '';
  uploadProgress!: number;
  uploadSub!: Subscription;

  myControl = new FormControl();
  options: string[] = ['Instagram', 'Facebook'];

  search: Search = {
    rede_social: '',
    perfil: '',
    file: ''
  }
  perfil = new FormControl('', [Validators.minLength(5)])

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private service: AccountService,
    private http: HttpClient) { }

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

  onFileSelected(event: Event) {

    const target = (event.target as HTMLInputElement).files;
    const file: File = (target as FileList)[0];

    if (file) {
      const extension = file.name.split('.')[1].toLowerCase();
      if ("xlsx" == extension.toLowerCase()) {
        this.fileName = file.name;
        const formData = new FormData();
        formData.append("thumbnail", file);

        const upload$ = this.http.post("/search/thumbnail-upload", formData, {
          reportProgress: true,
          observe: 'events'
        })
          .pipe(
            finalize(() => this.reset())
          );

        this.uploadSub = upload$.subscribe(event => {
          if (event.type == HttpEventType.UploadProgress) {
            this.uploadProgress = Math.round(100 * (event.loaded / event.total!));
          }
        })
      } else {
        this.invalidFile();
      }
    }
  }

  openDialog() {
    this.dialog.open(DialogDataExampleDialog)
  }

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = 0;
    this.uploadSub = this.uploadSub;
  }

  errorValidPerfil() {
    if (this.perfil.invalid) {
      return 'Deve ter pelo menos 5 caracteres!';
    }
    return false;
  }

  invalidFile() {
    this.openDialog()
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog { }