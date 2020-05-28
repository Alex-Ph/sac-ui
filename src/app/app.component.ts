import { Component, OnInit } from "@angular/core";
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
export class AppComponent implements OnInit {
  title = "Angular + Camunda prototyping";
  evtSource;

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
  ngOnInit(): void {
    console.log("Add eventSource");
    this.evtSource = new EventSource("http://localhost:8080/stream");
    this.evtSource.onmessage = (message) => {
      let event = JSON.parse(message.data);
      console.log(`Server sent event: ${event.eventName}`);
    };
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
