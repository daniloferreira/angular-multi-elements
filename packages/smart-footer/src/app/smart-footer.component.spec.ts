import { TestBed, async } from '@angular/core/testing';
import { SmartFooterComponent } from './smart-footer.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SmartFooterComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SmartFooterComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'smart-footer'`, () => {
    const fixture = TestBed.createComponent(SmartFooterComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('smart-footer');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SmartFooterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('smart-footer app is running!');
  });
});
