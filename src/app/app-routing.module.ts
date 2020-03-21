import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpentaskListComponent } from './components/opentask-list/opentask-list.component';

const routes: Routes = [
  { path: 'opentasks', component: OpentaskListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
