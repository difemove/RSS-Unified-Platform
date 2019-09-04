import { Component, Output} from '@angular/core';
import { ticket } from 'src/app/models/ticket';
import { infoTicket } from 'src/app/models/infoTicket';
import { CopyService } from 'src/app/services/copyService';
import { DataChangeService } from 'src/app/Services/data-change.service';
import nextStepsJson from '../../../../assets/nextSteps.json';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
   //Defining variables to be used in the component
Content:ticket = new ticket();
nextSteps:any[];
title:string = 'Template Remote support Services';
vis:boolean = false;

constructor(private dcs:DataChangeService, private _cs:CopyService) {

}
ngOnInit() {
  this.nextSteps = nextStepsJson;
}
public emitQuestion(question:string){
  this.Content.question=question;
  this.dcs.getQuestion(this.Content.question);
}
public emitEnvironment(environment:string){
  this.Content.environment=environment;
  this.dcs.getEnvironment(this.Content.environment);
}
public emitAnswer(answer:string){
  this.Content.answer=answer;
  this.dcs.getAnswer(this.Content.answer)
}
public emitNextSteps(nextSteps:any){
  this.Content.nextSteps=nextSteps.nextSteps;
  this.dcs.getNextSteps(this.Content.nextSteps);
}
}