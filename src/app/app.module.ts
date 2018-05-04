import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConfigModule } from './config/config.module';
import { DataModule } from './data/data.module';
import { ResultModule } from './result/result.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDividerModule, MatCardModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { WebsocketService } from './websocket.service';
import { RouterModule, Routes } from '@angular/router';
import { PageNeuroneComponent } from './page-neurone/page-neurone/page-neurone.component';
import { PageHomeComponent } from './page-home/page-home/page-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import { PageNeuroneModule } from './page-neurone/page-neurone.module';
import { PageHomeModule } from './page-home/page-home.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

const appRoutes: Routes = [
  { path: 'neurone', component: PageNeuroneComponent },
  { path: '',      component: PageHomeComponent },
  { path: '**', component: PageNotFoundComponent }
];




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    PageNeuroneModule,
    PageHomeModule,
    PageNotFoundModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
