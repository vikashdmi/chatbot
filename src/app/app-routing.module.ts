import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageFormComponent } from './components/message-form/message-form.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
