import { Component, Output} from '@angular/core';
import { ticket } from 'src/app/models/ticket';
import { infoTicket } from 'src/app/models/infoTicket';
import { CopyService } from 'src/app/services/copyService';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
   //Defining variables to be used in the component
@Output() all:string;
Content:ticket = new ticket();
title:string = 'Template Temote support Services';
vis:boolean = false;

constructor(private _cs:CopyService) {

}

setContent(question:string, environment:string, answer:any):void {

this.Content.question = question;
this.Content.environment = environment;
this.Content.answer = answer;
this.all = "[Question]" + "\n" +
question + "\n" +
"\n" +"[Environment]" + "\n" +
environment + "\n" +
"\n" +"[Answer]" + "\n" +
answer.value;
/*console.log(this.all);*/
this._cs.copyTextToClipboard(this.all)
}
}