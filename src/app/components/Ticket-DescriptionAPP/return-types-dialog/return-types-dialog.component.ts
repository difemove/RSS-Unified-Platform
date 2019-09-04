import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReturnType } from 'src/app/models/return-types';
@Component({
  selector: 'app-return-types-dialog',
  templateUrl: './return-types-dialog.component.html',
  styleUrls: ['./return-types-dialog.component.css']
})
export class ReturnTypesDialogComponent implements OnInit {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: ReturnType[]) { }

  ngOnInit() {
  }
  
}
