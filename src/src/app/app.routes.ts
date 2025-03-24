import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ImageListComponent } from './components/images/image-list/image-list.component';
import { ImageUploadComponent } from './components/images/image-upload/image-upload.component';
import { ImageEditComponent } from './components/images/image-edit/image-edit.component';
import { AuthGuard } from './guards/auth.guard'; // opcjonalny guard


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'images/:id/edit', component: ImageEditComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'images',
    component: ImageListComponent,
    canActivate: [AuthGuard] // opcjonalnie zabezpieczamy trasę
  },
  {
    path: 'images/:id/edit',
    component: ImageEditComponent,
    canActivate: [AuthGuard]
  },
  { path: 'upload', component: ImageUploadComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
