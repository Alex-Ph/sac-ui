import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-opentask-list',
  templateUrl: './opentask-list.component.html',
  styleUrls: ['./opentask-list.component.css']
})
export class OpentaskListComponent implements OnInit {

  tasks: Task[];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.findOpenTasks().subscribe((data: Task[]) => {
      this.tasks = data;
    });
  }

}
