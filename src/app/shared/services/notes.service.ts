import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from "../../shared/services/auth.service";
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  note: Note;

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public authService: AuthService
  ) {
    console.log("emailid" + authService.userData.email);

    var noteRef = this.afs.collection("notes").doc(authService.userData.email);

    noteRef.get().forEach(doc => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        this.note = doc.data() as Note;
      } else {
        console.log("No such document!");
        this.note.id = authService.userData.email;
        this.note.document = "<Enter Your Notes Here>";
      }
      document.getElementById('editable').innerText = this.note.document;

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