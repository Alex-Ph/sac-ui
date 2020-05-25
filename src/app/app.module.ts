import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OpentaskListComponent } from "./components/opentask-list/opentask-list.component";
import { TaskService } from "./service/task.service";
import { ProcessDefinitionService } from "./service/process-definition.service";

import { HttpClientModule } from "@angular/common/http";
import { StartprocessComponent } from "./components/startprocess/startprocess.component";
import { CompleteComponent } from "./components/complete/complete.component";
import { ClaimComponent } from "./components/claim/claim.component";
import { ManagetaskService } from "./service/managetask.service";
import { CompletedTaskComponent } from "./components/completedtask-list/completedtask-list.component";

import { StoreModule } from "@ngrx/store";
import { ToastReducer } from "./reducers/Toast.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";

import {
  NgxNotificationMsgModule,
  NgxNotificationMsgService,
} from "ngx-notification-msg";

import { EffectsModule } from "@ngrx/effects";
import { TaskEffects } from "./effects/task.effects";

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
    HttpClientModule,
    StoreModule.forRoot({
      rootState: ToastReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),

    // external components
    NgxNotificationMsgModule,
    EffectsModule.forRoot([TaskEffects]),
  ],
  providers: [
    TaskService,
    ProcessDefinitionService,
    ManagetaskService,
    NgxNotificationMsgService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
