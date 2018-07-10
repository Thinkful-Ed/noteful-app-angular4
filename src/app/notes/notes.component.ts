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
  note = new Note();
  notes: Note[];

  submitted = false;

  submitForm(noteForm) {
    this.submitted = true;
    console.log('here is the note', noteForm);
    const title = noteForm.value.title,
      content = noteForm.value.content
  
    let method;
  
    if (this.note.id) {
      method = this.notesService.updateNote({ title, content, id: this.note.id } as Note);
    } else {
      method = this.notesService.addNote({ title, content } as Note);
    }
  
    method.subscribe(note => {
      this.note = new Note();
      this.getNotes();
    });
  }

  updateNote(note) {
    this.note = {
      ...note,
      tags: note.tags.map(t => t.id)
    };
  }
  
  cancelUpdate() {
    this.note = new Note();
  }

  deleteNote(id, e): void {
    if (confirm('Are you sure want to delete this note?')) {
      this.notesService.deleteNote(id).subscribe(() => console.log('user deleted'));
      this.getNotes();
    }
  }  
  
  ngOnInit() {
    this.getNotes();
  }

}
