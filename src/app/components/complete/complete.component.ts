import { Component, OnInit } from '@angular/core';
import { ManagetaskService } from 'src/app/service/managetask.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {
  taskId: string;
  completedVisible: boolean;
  errorVisible: boolean;
  error: string;

  constructor(private router: Router, private route: ActivatedRoute, private taskService: ManagetaskService) {
    this.taskId = this.route.snapshot.params.taskId;
  }

  ngOnInit(): void {
  }

  completeTask(signature: string): void {
    this.completedVisible = false;
    this.errorVisible = false;
    
    this.taskService.completeTask(this.taskId, signature)
    .subscribe(() => { 
      this.completedVisible = true;
    }, 
    (msg) =>  {
      this.errorVisible = true; 
      this.error = msg.error.message
    });
    
  }
}
