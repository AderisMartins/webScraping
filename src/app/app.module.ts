import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { HeaderComponent } from './views/components/template/header/header.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { NavComponent } from './views/components/template/nav/nav.component';
import { HomeComponent } from './views/components/home/home.component';
import { SocialMediaReadComponent } from './views/components/social/social-media-read/social-media-read.component';
import { SocialMediaCreateComponent } from './views/components/social/social-media-create/social-media-create.component';
import { SocialMediaUpdateComponent } from './views/components/social/social-media-update/social-media-update.component';
import { SocialMediaDeleteComponent } from './views/components/social/social-media-delete/social-media-delete.component';
import { AccountReadComponent } from './views/components/account/account-read/account-read.component';
import { AccountCreateComponent } from './views/components/account/account-create/account-create.component';
import { AccountUpdateComponent } from './views/components/account/account-update/account-update.component';
import { AccountDeleteComponent } from './views/components/account/account-delete/account-delete.component';
import { SearchAccountComponent } from './views/components/search/search-account/search-account.component';
import { ExtractedDataComponent } from './views/components/data/extracted-data/extracted-data.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    SocialMediaReadComponent,
    SocialMediaCreateComponent,
    SocialMediaUpdateComponent,
    SocialMediaDeleteComponent,
    AccountReadComponent,
    AccountCreateComponent,
    AccountUpdateComponent,
    AccountDeleteComponent,
    SearchAccountComponent,
    ExtractedDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatMenuModule,
    MatCardModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
