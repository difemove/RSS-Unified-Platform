import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnTypesComponent } from './return-types.component';

describe('ReturnTypesComponent', () => {
  let component: ReturnTypesComponent;
  let fixture: ComponentFixture<ReturnTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
