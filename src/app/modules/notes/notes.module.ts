import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesAddComponent } from './notes-add/notes-add.component';
import { NotesDetailComponent } from './notes-detail/notes-detail.component';


@NgModule({
  declarations: [
    NotesListComponent,
    NotesAddComponent,
    NotesDetailComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
