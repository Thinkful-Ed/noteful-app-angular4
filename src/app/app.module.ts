import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { NotesService } from './_services/notes.service';
import { BaseService } from './_services/base.service';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';



@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    NotesService,
  BaseService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
