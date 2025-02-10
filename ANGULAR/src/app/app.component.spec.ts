import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'socialMediAng'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('socialMediAng');
  });

  // it('should render title in the expected element', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();  // Trigger change detection

  //   const compiled = fixture.nativeElement as HTMLElement;
  //   const titleElement = compiled.querySelector('span') || compiled.querySelector('h1'); // Adjust to the correct selector

  //   expect(titleElement?.textContent).toContain('socialMediAng app is running!');
  // });
});
