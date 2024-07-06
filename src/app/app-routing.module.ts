import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   redirectTo: 'students',
  //   pathMatch: 'full'
  // },
  { path: 'students',
    loadChildren: () => import('./student-list/student-list.module').then(m => m.StudentListPageModule)
  },
  {
    path: 'student-add',
    loadChildren: () => import('./student-add/student-add.module').then( m => m.StudentAddPageModule)
  },
  {
    path: 'student-detail',
    loadChildren: () => import('./student-detail/student-detail.module').then( m => m.StudentDetailPageModule)
  },
  {
    path: 'student-edit',
    loadChildren: () => import('./student-edit/student-edit.module').then( m => m.StudentEditPageModule)
  },
  {
    path: 'student-list',
    loadChildren: () => import('./student-list/student-list.module').then( m => m.StudentListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, bindToComponentInputs: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
