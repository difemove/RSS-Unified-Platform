import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataChangeService {
  @Output() dataChangeObserver: EventEmitter = new EventEmitter();
  


  constructor() { }
}
