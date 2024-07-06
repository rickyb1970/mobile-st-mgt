import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentEditPageRoutingModule } from './student-edit-routing.module';

import { StudentEditPage } from './student-edit.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    StudentEditPageRoutingModule
  ],
  declarations: [StudentEditPage]
})
export class StudentEditPageModule {}
