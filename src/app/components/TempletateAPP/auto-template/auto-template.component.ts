import { Component, OnInit, Input } from '@angular/core';
import { TemplateComponent} from '../template/template.component';

@Component({
  selector: 'app-auto-template',
  templateUrl: './auto-template.component.html',
  styleUrls: ['./auto-template.component.css']
})
export class AutoTemplateComponent {
@Input() all:string;
  constructor() { }

}
