import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/notes',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: './modules/user/user.module#UserModule'
  },
  {
    path: 'notes',
    loadChildren: './modules/notes/notes.module#NotesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
