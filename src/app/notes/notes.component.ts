import { Component, OnInit } from '@angular/core';
import { Note } from '../models'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  note : Note = {
    id: 1,
    title: "Shopping List",
    content: "milk, butter, ice cream, strawberries, apples, grapes, jelly"
  }
  
  constructor() { }

  ngOnInit() {
  }

}
