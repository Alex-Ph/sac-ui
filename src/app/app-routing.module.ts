import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpentaskListComponent } from './components/opentask-list/opentask-list.component';
import { StartprocessComponent } from './components/startprocess/startprocess.component';
import { CompleteComponent } from './components/complete/complete.component';
import { CompletedTaskComponent } from './components/completedtask-list/completedtask-list.component';
import { ClaimComponent } from './components/claim/claim.component';

const routes: Routes = [
  { path: 'opentasks', component: OpentaskListComponent},
  { path: 'completedtasks', component: CompletedTaskComponent},
  // refactor to subroutes so we can use complete and claim here
  { path: 'taskcomplete/:taskId', component: CompleteComponent},
  { path: 'taskclaim/:taskId/:userId', component: ClaimComponent},
  { path: 'startprocess', component: StartprocessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
