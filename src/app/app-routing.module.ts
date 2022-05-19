import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountCreateComponent } from './views/components/account/account-create/account-create.component';
import { AccountDeleteComponent } from './views/components/account/account-delete/account-delete.component';
import { AccountReadComponent } from './views/components/account/account-read/account-read.component';
import { AccountUpdateComponent } from './views/components/account/account-update/account-update.component';
import { ExtractedDataComponent } from './views/components/data/extracted-data/extracted-data.component';
import { HomeComponent } from './views/components/home/home.component';
import { SearchAccountComponent } from './views/components/search/search-account/search-account.component';
import { SocialMediaCreateComponent } from './views/components/social/social-media-create/social-media-create.component';
import { SocialMediaDeleteComponent } from './views/components/social/social-media-delete/social-media-delete.component';
import { SocialMediaReadComponent } from './views/components/social/social-media-read/social-media-read.component';
import { SocialMediaUpdateComponent } from './views/components/social/social-media-update/social-media-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'social',
    component: SocialMediaReadComponent
  },
  {
    path: 'social/create',
    component: SocialMediaCreateComponent
  },
  {
    path: 'social/update/:id',
    component: SocialMediaUpdateComponent
  },
  {
    path: 'social/delete/:id',
    component: SocialMediaDeleteComponent
  },
  {
    path: 'account',
    component: AccountReadComponent
  },
  {
    path: 'account/create',
    component: AccountCreateComponent
  },
  {
    path: 'account/update/:id',
    component: AccountUpdateComponent
  },
  {
    path: 'account/delete/:id',
    component: AccountDeleteComponent
  },
  {
    path: 'search',
    component: SearchAccountComponent
  },
  {
    path: 'extracted-data',
    component: ExtractedDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
