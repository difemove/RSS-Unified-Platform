import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReturnType } from 'src/app/models/return-types';
import { ReturnTypesComponent } from '../return-types/return-types.component';
@Component({
  selector: 'app-return-types-dialog',
  templateUrl: './return-types-dialog.component.html',
  styleUrls: ['./return-types-dialog.component.css']
})
export class ReturnTypesDialogComponent implements OnInit {
  returnTypes:ReturnType [];
  constructor(public dialogRef: MatDialogRef<ReturnTypesComponent>,@Inject(MAT_DIALOG_DATA) public data: ReturnType[]) { }


  ngOnInit() {
    
  }

  onNoClick():void {
    this.dialogRef.close();
  }
  
}
