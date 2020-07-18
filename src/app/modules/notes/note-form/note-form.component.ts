import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent {

  noteForm: FormGroup;
  @Input()
  note;
  @Output()
  saveNote = new EventEmitter();
  @Output()
  sendError = new EventEmitter();
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.createForm();
    if (this.note) {
      this.noteForm.patchValue(this.note);
    }
  }
  createForm() {
    this.noteForm = this.fb.group({
      title: ["", Validators.required],
      content: ["", Validators.required]
    });
  }

  addNote() {
    if (this.noteForm.valid) {
    this.saveNote.emit(this.noteForm.value);
    } else {
    this.sendError.emit('please fill all fields');
    }
    }
}
