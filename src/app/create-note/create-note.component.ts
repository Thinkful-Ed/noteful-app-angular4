import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Note } from "../models";
import { NOTES } from "../mock-data";

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  //Create a new, epmty note, which is referenced in our form
  note = new Note();
  //Declare that the form has not been submitted yet.
  submitted = false;
  //Import mock data to the notes list.
  _notes = NOTES;

  submitForm = form => {
    //Declare that the form has been submitted.
    this.submitted = true;
    const update_notes = this._notes;
    //Add notes submitted through the form to the list of notes displayed on the page.
    update_notes.push({
      id: 0,
      title: form.value.title,
      content: form.value.content
    });
    this._notes = update_notes;
  }

  constructor() { }

  ngOnInit() {
  }

}
