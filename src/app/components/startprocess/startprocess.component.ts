import { Component, OnInit } from '@angular/core';
import { ProcessDefinitionService } from 'src/app/service/process-definition.service';
import { Processinstance } from 'src/app/model/processinstance';

@Component({
  selector: 'app-startprocess',
  templateUrl: './startprocess.component.html',
  styleUrls: ['./startprocess.component.css']
})
export class StartprocessComponent implements OnInit {

  processInstance: Processinstance;

  constructor(private processDefinitionService: ProcessDefinitionService) { }

  ngOnInit(): void {
    this.processDefinitionService.startSacProcessInstance().subscribe((data: Processinstance) => {
      this.processInstance = data;
    });
  }

}
