import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream

=======
import { MatInputModule } from '@angular/material';
>>>>>>> Stashed changes
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< Updated upstream
  it(`should have as title 'TicketTemplate'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('TicketTemplate');
=======
  it(`should have as title 'Angular-Template'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular-Template');
>>>>>>> Stashed changes
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
<<<<<<< Updated upstream
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to TicketTemplate!');
=======
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Angular-Template!');
>>>>>>> Stashed changes
  });
});
