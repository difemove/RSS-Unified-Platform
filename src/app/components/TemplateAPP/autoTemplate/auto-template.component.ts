import { Component, OnInit, Input } from '@angular/core';
import { DataChangeService } from 'src/app/Services/data-change.service';
import { CopyService } from 'src/app/services/copyService';
import { ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-auto-template',
  templateUrl: './auto-template.component.html',
  styleUrls: ['./auto-template.component.css']
})
export class AutoTemplateComponent {
Template:ticket =new ticket();
  constructor(private dcs:DataChangeService, private copy:CopyService) { }

  
  ngOnInit() {
    this.getCodes();
  }

  getCodes(){
    this.dcs.emitterQuestion.subscribe((Question: string)=>this.Template.question=Question);
    this.dcs.emitterEnvironment.subscribe((Environment: string)=>this.Template.environment=Environment);
    this.dcs.emitterAnswer.subscribe((Answer: string)=>this.Template.answer=Answer);
    this.dcs.emitterNextSteps.subscribe((nextSteps: string)=>this.Template.nextSteps=nextSteps);
  }
  

}
