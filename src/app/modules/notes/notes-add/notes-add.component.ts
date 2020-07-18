import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '../../core/data.service';
import { MatSnackBar } from '@angular/material';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-notes-add',
  templateUrl: './notes-add.component.html',
  styleUrls: ['./notes-add.component.scss']
})
export class NotesAddComponent implements OnInit {
  public userID;
  public errorMessage$ = new Subject();
  constructor(private router: Router, private data: DataService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSaveNotes(values) {
    this.data
      .addNote(values)
      .then(doc => {
        this.router.navigate(['/notes']);
        this.snackBar.open((`Note ${doc.id} has been successfully saved`));
      })
      .catch(e => {
        this.errorMessage$.next('something is wrong when adding to DB');
      });
  }

  onSendError(message) {
    this.errorMessage$.next(message);
  }
}
