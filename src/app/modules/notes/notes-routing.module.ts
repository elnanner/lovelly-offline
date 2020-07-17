import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesDetailComponent } from './notes-detail/notes-detail.component';
import { NotesAddComponent } from './notes-add/notes-add.component';


const routes: Routes = [
  {
    path: '',
    component: NotesListComponent
  },
  {
    path: 'add',
    component: NotesAddComponent
  },
  {
    path: ':id',
    component: NotesDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
