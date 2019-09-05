import { Component, OnInit } from '@angular/core';
import { ReturnType } from 'src/app/models/return-types';
import { DataChangeService } from 'src/app/Services/data-change.service';
import { MatDialog } from '@angular/material';
import { ReturnTypesDialogComponent } from '../return-types-dialog/return-types-dialog.component';

@Component({
  selector: 'app-return-types',
  templateUrl: './return-types.component.html',
  styleUrls: ['./return-types.component.css']
})
export class ReturnTypesComponent implements OnInit {
  returnTypes: ReturnType[];
  constructor(private dcs: DataChangeService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  /*openDialog() {
    this.dialog.open(ReturnTypesDialogComponent, {
      data: {
        /*returnTypes=this.returnTypes;
      }
    });*/


  
  

}
