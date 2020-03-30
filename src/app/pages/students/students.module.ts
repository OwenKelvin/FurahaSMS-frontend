import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { CreateStudentGuardianComponent } from './create-student-guardian/create-student-guardian.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ViewStudentInfoComponent } from './view-student-info/view-student-info.component';
import { ViewStudentGuardiansComponent } from './view-student-guardians/view-student-guardians.component';
import { ViewStudentAcademicsComponent } from './view-student-academics/view-student-academics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { AppTelInputModule } from 'src/app/modules/app-tel-input.module';
import { AppOrdinalModule } from 'src/app/modules/app-ordinal.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { CreateStudentAcademicsComponent } from './create-student-academics/create-student-academics.component';
import { AppUserProfileModule } from 'src/app/components/user-profile/user-profile.module';
import { StoreModule } from '@ngrx/store';
import * as fromStudentProfile from './store/reducers/student-profile.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StudentProfileEffects } from './store/effects/student-profile.effects';


@NgModule({
  declarations: [
    CreateStudentGuardianComponent,
    ViewStudentComponent,
    ViewStudentInfoComponent,
    ViewStudentGuardiansComponent,
    ViewStudentAcademicsComponent,
    CreateStudentAcademicsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    AppTelInputModule,
    AppOrdinalModule,
    AppLoadingBubbleModule,
    AppUserProfileModule,
    StoreModule.forFeature(fromStudentProfile.studentProfileFeatureKey, fromStudentProfile.reducer),
    EffectsModule.forFeature([StudentProfileEffects]),
    AppUserProfileModule,

  ]
})
export class StudentsModule { }
