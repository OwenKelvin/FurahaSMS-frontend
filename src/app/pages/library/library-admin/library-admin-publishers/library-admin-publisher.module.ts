import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryAdminPublishersComponent } from './library-admin-publishers.component';
import { CreatePublisherComponent } from './create-publisher/create-publisher.component';
import { ViewPublisherComponent } from './view-publisher/view-publisher.component';
import { EditPublisherComponent } from './edit-publisher/edit-publisher.component';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { AppViewItemsModule } from 'src/app/modules/app-view-items.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { LibraryAdminPublisherRoutingModule } from './library-admin-publisher-routing.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { LibraryAdminPublisherItemComponent } from './library-admin-publisher-item/library-admin-publisher-item.component';
import { AppValidateSubmitButtonsModule } from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [

    LibraryAdminPublishersComponent,
    CreatePublisherComponent,
    ViewPublisherComponent,
    EditPublisherComponent,
    LibraryAdminPublisherItemComponent,

  ],
  imports: [
    CommonModule,
    LibraryAdminPublisherRoutingModule,
    AppLoadingBubbleModule,
    AppViewItemsModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    EditorModule,
    AppValidateSubmitButtonsModule,
    ReactiveComponentModule
  ]
})
export class LibraryAdminPublisherModule { }
