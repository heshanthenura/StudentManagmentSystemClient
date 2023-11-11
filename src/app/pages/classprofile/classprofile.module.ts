import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassprofilePageRoutingModule } from './classprofile-routing.module';

import { ClassprofilePage } from './classprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassprofilePageRoutingModule
  ],
  declarations: [ClassprofilePage]
})
export class ClassprofilePageModule {}
