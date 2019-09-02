import { Component, OnInit } from '@angular/core';
import { DataChangeService } from 'src/app/Services/data-change.service';

@Component({
  selector: 'app-tab-selector',
  templateUrl: './tab-selector.component.html',
  styleUrls: ['./tab-selector.component.css']
})
export class TabSelectorComponent implements OnInit {
  selectedIndex:number;
  constructor(private dcs: DataChangeService) { }

  ngOnInit() {
  }

  public changeSelection(n: number): number{
   this.selectedIndex=n;
   console.log(this.selectedIndex);
   this.dcs.loadTabSelected(this.selectedIndex);
   return this.selectedIndex;
  }



}
