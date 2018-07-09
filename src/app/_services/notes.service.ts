import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseService } from "./base.service";

import { Note } from '../models';

@Injectable({
  providedIn: 'root'
})

export class NotesService {

  constructor(private http: HttpClient, private baseService: BaseService) { }

  notesUrl = this.baseService.baseUrl + "/notes";

  getNotes(): Observable<Note[]> {
    //get the HTTP headers from our base service
    const httpOptions = this.baseService.getHttpHeaders();
    return this.http.get<Note[]>(this.notesUrl, httpOptions);
  }
  
  addNote(note: Note): Observable<Note> {
    //get our request headers
    const httpOptions = this.baseService.getHttpHeaders();
    //send a POST request to the /notes endpoint 
    return this.http.post<Note>(this.notesUrl, note, httpOptions).pipe(
      //send a success message
      tap((newNote: Note) => console.log(`added note w/ id=${newNote.id}`),
        error => {
          if (error.status === 400) {
            alert(error.error.message);
          }
        }
      )
    );
  }

  deleteNote(id: number): Observable<Note> {
    console.log('deleting', id);
    const httpOptions = this.baseService.getHttpHeaders();
    return this.http.delete<Note>(this.notesUrl + '/' + id, httpOptions).pipe(
      tap((deltedNote: Note) => console.log(`deleted note w/ id=${id}`))
    );
  }

  updateNote(note: Note): Observable<Note> {
    const httpOptions = this.baseService.getHttpHeaders();
    return this.http.put<Note>(this.notesUrl + `/${note.id}`, note, httpOptions).pipe(
      tap((newNote: Note) => console.log(`added updated w/ id=${newNote.id}`),
        error => {
          if (error.status === 400) {
            alert(error.error.message);
          }
        }
      )
    );
  }
}
