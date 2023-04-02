import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchpracComponent } from './switchprac.component';

describe('SwitchpracComponent', () => {
  let component: SwitchpracComponent;
  let fixture: ComponentFixture<SwitchpracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchpracComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchpracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
