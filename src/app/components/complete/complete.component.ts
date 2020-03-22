import { Component, OnInit } from '@angular/core';
import { ManagetaskService } from 'src/app/service/managetask.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {
  taskId: string;
  
  constructor(private route: ActivatedRoute, private taskService: ManagetaskService) {
    this.taskId = this.route.snapshot.params.taskId;
  }

  ngOnInit(): void {
    this.taskService.completeTask(this.taskId);
  }

}
