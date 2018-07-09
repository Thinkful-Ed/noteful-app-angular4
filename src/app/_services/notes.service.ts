import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { NOTES } from '../mock-data';
import { Note } from '../models';

@Injectable({
  providedIn: 'root'
})

export class NotesService {

  constructor() { }

  getNotes(): Observable<Note[]> {
    return of(NOTES);
  }
}
