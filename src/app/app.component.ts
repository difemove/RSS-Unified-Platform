<<<<<<< Updated upstream
import { Component, Input, Output, EventEmitter} from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> Stashed changes

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< Updated upstream
  title = 'TicketTemplate';
  @Input() ticket:string;
  @Output() ticketOut=new EventEmitter<string>();

  onDataChange() { 
    this.ticketOut.emit(this.ticket);
    console.log(this.ticket);
  }  

=======
  title = 'Angular-Template';
>>>>>>> Stashed changes
}
