import { TestBed, async } from '@angular/core/testing';
import { SmartHeaderComponent } from './smart-header.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SmartHeaderComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SmartHeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'smart-header-component'`, () => {
    const fixture = TestBed.createComponent(SmartHeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('smart-header-component');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SmartHeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('smart-header-component app is running!');
  });
});
