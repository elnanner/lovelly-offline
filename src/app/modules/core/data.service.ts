import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

interface Note {
  id: string;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  protected readonly USERS_COLLECTION = 'users';
  protected readonly NOTES_COLLECTION = 'notes';
  public isLoading$ = new BehaviorSubject<boolean>(true);
  constructor(private afDb: AngularFirestore, private auth: AuthService) { }

  get timeStamp() {
    return new Date().getTime();
  }

  getUserNoteCollection() {
    return this.afDb.collection(this.USERS_COLLECTION + '/' + this.auth.id + '/' + this.NOTES_COLLECTION,
      ref => ref.orderBy('updated_at', 'desc')
    );
  }

  addNote(data): Promise<DocumentReference> {
    return this.getUserNoteCollection().add({
      ...data,
      created_at: this.timeStamp,
      updated_at: this.timeStamp
    });
  }

  editNote(id, data): Promise<void> {
    return this.getUserNoteCollection()
      .doc(id)
      .update({
        ...data,
        updated_at: this.timeStamp
      });
  }

  deleteNote(id): Promise<void> {
    return this.getUserNoteCollection()
      .doc(id)
      .delete();
  }

  getNote(id): Observable<any> {
    return this.getUserNoteCollection()
      .doc(id)
      .snapshotChanges()
      .pipe(map(snapshot => {
        const data = snapshot.payload.data() as Note;
        const id = snapshot.payload.id;
        return { id, ...data };
      }),
        catchError(e => throwError(e)));
  }

  getNotes(): Observable<any> {
    return this.getUserNoteCollection()
    .snapshotChanges()
    .pipe(
      map(snapshot =>
        snapshot.map(a => {
          // Get document data
          const data = a.payload.doc.data() as Note;
           // Get document id
          const id = a.payload.doc.id;
          // Use spread operator to add the id to the document data
          return { id, ...data };

        })
      ),
      tap(notes => {
        this.isLoading$.next(false);
      }),
      catchError(e => throwError(e))
    );
  }
}
