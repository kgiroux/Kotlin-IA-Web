import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { MatSidenav, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { PageNeuroneComponent } from '../page-neurone/page-neurone/page-neurone.component';
import { PageMlpComponent } from '../page-mlp/page-mlp/page-mlp.component';
import { PageExtraComponent } from '../page-extra/page-extra/page-extra.component';
import { PageHomeComponent } from '../page-home/page-home/page-home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'neurone', component: PageNeuroneComponent },
  { path: 'mlp', component: PageMlpComponent },
  { path: 'extra', component: PageExtraComponent},
  { path: '',      component: PageHomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports: [ NavigationComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  declarations: [NavigationComponent]
})
export class NavigationModule { }
