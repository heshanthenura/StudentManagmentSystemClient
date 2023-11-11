import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentprofilePageRoutingModule } from './studentprofile-routing.module';

import { StudentprofilePage } from './studentprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentprofilePageRoutingModule
  ],
  declarations: [StudentprofilePage]
})
export class StudentprofilePageModule {}
