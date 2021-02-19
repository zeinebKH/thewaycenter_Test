import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/bodyoftodos/body/body.component';
import { DetailComponent } from './components/bodyoftodos/detail/detail.component';
import { ListeComponent } from './components/bodyoftodos/liste/liste.component';

const routes: Routes = [
  { path: '', redirectTo: 'body', pathMatch: 'full' },
  { path: 'body', component: BodyComponent },
  { path: 'body/:id', component: DetailComponent },
  { path: 'liste', component: ListeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
