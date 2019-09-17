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
  returnType: ReturnType;
  constructor(private dcs: DataChangeService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ReturnTypesDialogComponent, {
      width: '250px',
      data: { returnType: this.returnType}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.returnType = result;
    });
    
  }
  
  

}
