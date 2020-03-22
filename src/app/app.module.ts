import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpentaskListComponent } from './components/opentask-list/opentask-list.component';
import { TaskService } from './service/task.service';
import { ProcessDefinitionService } from './service/process-definition.service';

import { HttpClientModule } from '@angular/common/http';
import { StartprocessComponent } from './components/startprocess/startprocess.component';
import { CompleteComponent } from './components/complete/complete.component';
import { ClaimComponent } from './components/claim/claim.component';
import { ManagetaskService } from './service/managetask.service';
import { CompletedTaskComponent } from './components/completedtask-list/completedtask-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OpentaskListComponent,
    StartprocessComponent,
    CompleteComponent,
    ClaimComponent,
    CompletedTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TaskService, ProcessDefinitionService, ManagetaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
