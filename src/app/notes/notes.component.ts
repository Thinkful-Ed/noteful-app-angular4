import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../models';
import { NotesService } from '../_services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {

  @Input() _notes;
  
  constructor(private notesService: NotesService) { }

  getNotes(): void {
    this.notesService.getNotes()
      .subscribe(notes => this._notes = notes);
  }
  
  ngOnInit() {
  }

}
