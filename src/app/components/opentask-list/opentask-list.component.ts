import { Component, OnInit } from "@angular/core";
import { Task } from "../../model/task";
import { Store } from "@ngrx/store";
import { show } from "src/app/actions/toast.actions";
import { Toast } from "src/app/model/toast/toast.model";
import { ManagetaskService } from "src/app/service/managetask.service";
import { NgxNotificationStatusMsg } from "ngx-notification-msg";
import { Observable } from "rxjs/internal/Observable";
import { openTasks, State } from "../../reducers/Toast.reducer";

@Component({
  selector: "app-opentask-list",
  templateUrl: "./opentask-list.component.html",
  styleUrls: ["./opentask-list.component.css"],
})
export class OpentaskListComponent implements OnInit {
  tasks$: Observable<Task[]> = this.store.select(openTasks);

  constructor(
    private manageTaskService: ManagetaskService,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.store.dispatch({ type: "[Open task page] Load open tasks" });
  }

  public claimTask(taskId: string) {
    const toast = new Toast();
    const userId = "DummyUserId";

    this.manageTaskService.claimTask(taskId, userId).subscribe(
      () => {
        toast.title = "Task successfully claimed";
        toast.message = `Task ${taskId} claimed by userId ${userId}`;
        toast.type = NgxNotificationStatusMsg.SUCCESS;

        this.store.dispatch(show({ toast }));

        this.store.dispatch({ type: "[Open task page] Load open tasks" });
      },
      (msg) => {
        toast.message = msg.error.message;
        toast.type = NgxNotificationStatusMsg.FAILURE;
        this.store.dispatch(show({ toast }));
      }
    );
  }
}
