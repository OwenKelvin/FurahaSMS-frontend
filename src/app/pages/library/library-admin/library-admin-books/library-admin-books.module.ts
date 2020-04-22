import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppSelectLibraryClassModule } from '../../modules/select-library-class.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { LibraryAdminBooksComponent } from './library-admin-books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { LibraryAdminBooksRoutingModule } from './library-admin-books-routing.module';

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
    AppDashboardLinksModule
  ]
})
export class LibraryAdminBooksModule { }
