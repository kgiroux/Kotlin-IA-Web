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
import { PageExtraComponent } from './page-extra/page-extra/page-extra.component';
import { PageMlpComponent } from './page-mlp/page-mlp/page-mlp.component';
import { PageMlpModule } from './page-mlp/page-mlp.module';
import { PageExtraModule } from './page-extra/page-extra.module';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigationModule } from './navigation/navigation.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    NavigationModule,
    PageExtraModule,
    PageNeuroneModule,
    PageHomeModule,
    PageMlpModule,
    PageNotFoundModule,
    LayoutModule
  ],
  providers: [WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
