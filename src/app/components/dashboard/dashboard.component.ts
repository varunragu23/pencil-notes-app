import { Component, AfterViewInit, ViewChild, ElementRef, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { NotesService } from "../../shared/services/notes.service";
import { Router } from "@angular/router";

declare const MediumEditor: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements AfterViewInit, OnInit {
editor: any;
notesService: NotesService;
  //@ViewChild('editable', { static: true }) editable: ElementRef;

  constructor(
    public authService: AuthService,
    public noteService: NotesService,
    public router: Router,
    public ngZone: NgZone
  ) { 
    this.notesService = noteService;
  }

ngAfterViewInit(): void {

 // document.getElementById('editable').innerText = 'ragu testing';

  this.editor = new MediumEditor('.editable');


    // this.editor = new MediumEditor('.editable', {
    //   activeButtonClass: 'medium-editor-button-active',
    //   allowMultiParagraphSelection: true,
    //   buttonLabels: false,
    //   contentWindow: window,
    //   delay: 0,
    //   disableReturn: false,
    //   disableDoubleReturn: false,
    //   disableExtraSpaces: false,
    //   disableEditing: false,
    //   elementsContainer: false,
    //   extensions: {},
    //   ownerDocument: document,
    //   spellcheck: true,
    //   targetBlank: false,
    //   paste: {
    //     cleanPastedHtml: true,
    //     cleanAttrs: ['style', 'class', 'name'],
    //     cleanTags: ['meta', 'script']
    //   },
    //   toolbar: {
    //        /* These are the default options for the toolbar,
    //        if nothing is passed this is what is used */
    //        allowMultiParagraphSelection: true,
    //        buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote'],
    //        diffLeft: 0,
    //        diffTop: -10,
    //        firstButtonClass: 'medium-editor-button-first',
    //        lastButtonClass: 'medium-editor-button-last',
    //        relativeContainer: null,
    //        standardizeSelectionStart: false,
    //        static: true,
   
    //        /* options which only apply when static is true */
    //        align: 'center',
    //        sticky: false,
    //        updateOnEmptySelection: false
    //   }
    // }
    // );
  }
  ngOnInit() { }
}


