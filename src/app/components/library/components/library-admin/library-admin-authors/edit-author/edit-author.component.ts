import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../../../store/reducers';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LibraryAuthorService } from 'src/app/services/library-author.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  constructor( 
  private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    
  }

}
