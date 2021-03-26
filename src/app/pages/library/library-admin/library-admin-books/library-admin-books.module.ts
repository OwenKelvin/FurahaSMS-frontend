import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppSelectLibraryClassModule } from '../../modules/select-library-class.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { LibraryAdminBooksComponent } from './library-admin-books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { LibraryAdminBooksRoutingModule } from './library-admin-books-routing.module';
import { AppBarcodeModule } from 'src/app/shared/barcode/barcode.module';
import { AppValidateSubmitButtonsModule } from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import {NgSelectModule} from '@ng-select/ng-select';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [
    EditBookComponent,
    AddBookComponent,
    ViewBookComponent,
    LibraryAdminBooksComponent,
  ],
  imports: [
    CommonModule,
    LibraryAdminBooksRoutingModule,
    AppInputModule,
    TabsModule.forRoot(),
    AppSelectLibraryClassModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    AppLinksModule,
    AppBarcodeModule,
    AppValidateSubmitButtonsModule,
    NgSelectModule,
    ReactiveComponentModule
  ]
})
export class LibraryAdminBooksModule { }
