import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpentaskListComponent } from './components/opentask-list/opentask-list.component';
import { StartprocessComponent } from './components/startprocess/startprocess.component';

const routes: Routes = [
  { path: 'opentasks', component: OpentaskListComponent },
  { path: 'startprocess', component: StartprocessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
