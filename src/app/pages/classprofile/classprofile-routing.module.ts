import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassprofilePage } from './classprofile.page';

const routes: Routes = [
  {
    path: '',
    component: ClassprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassprofilePageRoutingModule {}
