import { PhotoService } from './photo/photo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PhotoComponent } from './photo/photo.component';
import { FileViewerComponent } from './file-viewer/file-viewer.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignalRService } from './services/signal-r.service';

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    FileViewerComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    DialogModule,
    ReactiveFormsModule,
    RouterModule.forRoot([

    ])
  ],
  providers: [PhotoService, SignalRService],
  bootstrap: [AppComponent]
})
export class AppModule { }
