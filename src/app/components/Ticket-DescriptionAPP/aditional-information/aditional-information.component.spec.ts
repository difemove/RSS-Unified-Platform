import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AditionalInformationComponent } from './aditional-information.component';

describe('AditionalInformationComponent', () => {
  let component: AditionalInformationComponent;
  let fixture: ComponentFixture<AditionalInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AditionalInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AditionalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
