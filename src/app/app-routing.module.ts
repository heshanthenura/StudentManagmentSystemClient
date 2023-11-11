import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutPageModule),
  },
  {
    path: 'attendance',
    loadChildren: () =>
      import('./pages/student/attendance/attendance.module').then(
        (m) => m.AttendancePageModule
      ),
  },
  {
    path: 'teacherprofile',
    loadChildren: () => import('./pages/teacherprofile/teacherprofile.module').then( m => m.TeacherprofilePageModule)
  },
  {
    path: 'classprofile',
    loadChildren: () => import('./pages/classprofile/classprofile.module').then( m => m.ClassprofilePageModule)
  },
  {
    path: 'studentprofile',
    loadChildren: () => import('./pages/studentprofile/studentprofile.module').then( m => m.StudentprofilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
