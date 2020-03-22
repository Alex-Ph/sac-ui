import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-completedtask-list',
  templateUrl: './completedtask-list.component.html',
  styleUrls: ['./completedtask-list.component.css']
})
export class CompletedTaskComponent implements OnInit {

  tasks: Task[];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.findCompletedTasks().subscribe((data: Task[]) => {
      this.tasks = data;
    });
  }

}
