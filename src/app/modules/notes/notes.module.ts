import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesAddComponent } from './notes-add/notes-add.component';
import { NotesDetailComponent } from './notes-detail/notes-detail.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NotesListComponent,
    NotesAddComponent,
    NotesDetailComponent,
    NoteCardComponent,
    NoteFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
