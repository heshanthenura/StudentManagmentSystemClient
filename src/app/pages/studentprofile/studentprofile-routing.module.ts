import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentprofilePage } from './studentprofile.page';

const routes: Routes = [
  {
    path: '',
    component: StudentprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentprofilePageRoutingModule {}
