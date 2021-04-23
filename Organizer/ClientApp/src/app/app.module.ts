import { NutyService } from './nuty/nuty.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NutyComponent } from './nuty/nuty.component';
import { FileViewerComponent } from './file-viewer/file-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    NutyComponent,
    FileViewerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([

    ])
  ],
  providers: [NutyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
