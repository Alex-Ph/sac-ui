import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import {
  NgxNotificationMsgService,
  NgxNotificationStatusMsg,
  NgxNotificationDirection,
} from "ngx-notification-msg";
import { show } from "src/app/actions/toast.actions";
import { Processinstance } from "./model/processinstance";
import { Toast } from "./model/toast/toast.model";
import { ProcessDefinitionService } from "./service/process-definition.service";
import { toast, State } from "./reducers/Toast.reducer";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Angular + Camunda prototyping";

  constructor(
    private readonly ngxNotificationMsgService: NgxNotificationMsgService,
    private processDefinitionService: ProcessDefinitionService,
    private store: Store<State>
  ) {
    store.select(toast).subscribe((data) => {
      if (data) {
        this.ngxNotificationMsgService.open({
          status: NgxNotificationStatusMsg.SUCCESS,
          direction: NgxNotificationDirection.TOP_RIGHT,
          header: data.title,
          msg: data.message,
        });
      }
    });
  }

  startProcess() {
    const toast = new Toast();

    this.processDefinitionService.startSacProcessInstance().subscribe(
      (data: Processinstance) => {
        toast.title = "Process started";
        toast.message = `Process with id ${data.id} started`;
        toast.type = NgxNotificationStatusMsg.SUCCESS;

        this.store.dispatch(show({ toast }));
      },
      (msg) => {
        toast.message = msg.error.message;
        toast.type = NgxNotificationStatusMsg.FAILURE;
        this.store.dispatch(show({ toast }));
      }
    );
  }
}
