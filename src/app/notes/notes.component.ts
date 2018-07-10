import { Component, OnInit, Input } from '@angular/core';
import { Note, Folder, Tag } from '../models';
import { NotesService } from '../_services/notes.service';
import { FolderService } from '../_services/folder.service';
import { TagService } from '../_services/tag.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {

  @Input() _notes;
  
  constructor(
    private notesService: NotesService,
    private folderService: FolderService,
    private tagService: TagService) { }

  // Get and serve folder dropdown
  folder = new Folder();
  folders: Folder[];

  // Get and serve tags dropdown
  tag = new Tag();
  tags: Tag[];

  // FOLDERS

  getFolders() {
    return this.folderService.getFolders()
      .subscribe(folders => this.folders = folders, (err) => console.log(err), () => this.getTags());
  }

  newFolder(folders: Folder[]) {
    this.folders = folders;
  }

  getFolder(folder) {
    if (typeof folder === 'string') {
      const found = this.folders.find(f => f.id === folder);
      if (found) {
        return found.name;
      }
    } else if (typeof folder === 'object') {
      return folder.name;
    }
    return folder;
  }


  // TAGS

  getTags() {
    return this.tagService.getTags()
      .subscribe(tags => this.tags = tags, (err) => console.log(err), () => this.getNotes());
  }

  newTag(tags: Tag[]) {
    this.tags = tags;
  }

  // NOTES
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
    this.getFolders();
    this.getTags();
  }

}
