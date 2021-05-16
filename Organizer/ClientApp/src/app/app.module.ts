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
import { SongListComponent } from './song-list/song-list.component';
import { SongService } from './services/song.service';
import { ButtonModule } from 'primeng/button';


@NgModule({

  declarations: [
    AppComponent,
    PhotoComponent,
    FileViewerComponent,
    LoginComponent,
    SongListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    DialogModule,
    ReactiveFormsModule,
    ButtonModule,
    RouterModule.forRoot([
      { path: "login", component: LoginComponent, canActivate: [AuthGuard]},
      { path: "fileViewer", component: FileViewerComponent, canActivate: [AuthGuard] },
      { path: "songList", component: SongListComponent, canActivate: [AuthGuard] },
     
      
{
  path: 'song',
  component: FileViewerComponent, canActivate: [AuthGuard],
        children: [
          {
            path: 'song/:id', //:id is dynamic here
            component: FileViewerComponent,
            canActivate: [AuthGuard]
          }
        ]
      },
      { path: '**', redirectTo: 'login' },

    ], { enableTracing: true })
  ],
  providers: [PhotoService, SignalRService, LoginService, SongService],
  bootstrap: [AppComponent]
})
export class AppModule {}
