import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TicketTemplate';
  @Input() ticket:string;
  @Output() ticketOut=new EventEmitter<string>();

  onDataChange() { 
    this.ticketOut.emit(this.ticket);
    console.log(this.ticket);
  }  

}
