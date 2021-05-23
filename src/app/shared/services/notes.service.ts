import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from "../../shared/services/auth.service";
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  note : Note;

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public authService: AuthService  
  ) {
    // var noteRef = this.afs.collection("notes", ref => ref.where('email', '==', authService.userData.email));

    var noteRef = this.afs.collection("notes").doc(authService.userData.email);

    // this.note.uid = "1";
    // this.note.email = "dr3463@gmail.com";
    // this.note.document = "doc content";

    noteRef.get().forEach( doc => {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          this.note = doc.data() as Note;
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });

  }

  getNote() {
    return this.note;
  }

  setNote(n: Note) {
    console.log(n);
  }
}