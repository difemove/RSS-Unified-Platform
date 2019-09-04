import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnTypesDialogComponent } from './return-types-dialog.component';

describe('ReturnTypesDialogComponent', () => {
  let component: ReturnTypesDialogComponent;
  let fixture: ComponentFixture<ReturnTypesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnTypesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnTypesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
