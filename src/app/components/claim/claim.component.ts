import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagetaskService } from 'src/app/service/managetask.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  taskId: string;
  userId: string;
  
  constructor(private route: ActivatedRoute, private taskService: ManagetaskService) {
    this.taskId = this.route.snapshot.params.taskId;
    this.userId = this.route.snapshot.params.userId;
  }

  ngOnInit(): void {
    this.taskService.claimTask(this.taskId, this.userId);
  }

}
