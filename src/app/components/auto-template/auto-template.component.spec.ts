import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoTemplateComponent } from './auto-template.component';

describe('AutoTemplateComponent', () => {
  let component: AutoTemplateComponent;
  let fixture: ComponentFixture<AutoTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
