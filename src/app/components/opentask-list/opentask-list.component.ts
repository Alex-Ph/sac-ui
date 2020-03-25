import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task';
import { TaskService } from '../../service/task.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import {show} from 'src/app/actions/toast.actions';
import { Toast } from 'src/app/model/toast/toast.model';
import { ManagetaskService } from 'src/app/service/managetask.service';
import { NgxNotificationStatusMsg } from 'ngx-notification-msg';

@Component({
  selector: 'app-opentask-list',
  templateUrl: './opentask-list.component.html',
  styleUrls: ['./opentask-list.component.css']
})
export class OpentaskListComponent implements OnInit {

  tasks: Task[];
  constructor(private taskService: TaskService, 
    private manageTaskService: ManagetaskService, 
    private store: Store<AppState>) 
  {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(){
    this.taskService.findOpenTasks().subscribe((data: Task[]) => {
      this.tasks = data;
    });
  }

  public claimTask(taskId: string){
    const toast = new Toast();
    const userId = "DummyUserId";

    this.manageTaskService.claimTask(taskId, userId).subscribe(() => {
      toast.title="Task successfully claimed"
      toast.message=`Task ${taskId} claimed by userId ${userId}`;
      toast.type=NgxNotificationStatusMsg.SUCCESS;
      
      this.store.dispatch(show({toast}));

      this.loadData();
    }, 
    (msg) =>  {
      toast.message=msg.error.message;
      toast.type=NgxNotificationStatusMsg.FAILURE;
      this.store.dispatch(show({toast}));
    });
    
  }
}
