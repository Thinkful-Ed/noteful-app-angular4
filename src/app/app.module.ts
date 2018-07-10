import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { NotesService } from './_services/notes.service';
import { BaseService } from './_services/base.service';
import { FolderService } from './_services/folder.service';
import { TagService } from './_services/tag.service';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { FoldersComponent } from './folders/folders.component';
import { TagsComponent } from './tags/tags.component';



@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    FoldersComponent,
    TagsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    NotesService,
    BaseService,
    FolderService,
    TagService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
