import { PhotoService } from './services/photo.service';
import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PhotoComponent } from './photo/photo.component';
import { FileViewerComponent } from './file-viewer/file-viewer.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignalRService } from './services/signal-r.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { AuthGuard } from './helpers/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    FileViewerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    DialogModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "login", component: LoginComponent},
      { path: "fileViewer", component: FileViewerComponent, canActivate: [AuthGuard] },
      { path: '**', redirectTo: 'login' }

    ])
  ],
  providers: [PhotoService, SignalRService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
