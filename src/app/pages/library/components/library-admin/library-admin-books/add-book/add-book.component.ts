import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  newBookForm: FormGroup;
  triggerValidation: boolean;
  isSubmitting: boolean;
  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.newBookForm = this.fb.group({
      bookTitle: ['', Validators.required],
      ISBN: [''],
      publicationDate: [null]
    });
  }
  submitNewBookForm() {
    this.isSubmitting = true;
  }

}
