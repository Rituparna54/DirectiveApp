import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForpracticeComponent } from './forpractice.component';

describe('ForpracticeComponent', () => {
  let component: ForpracticeComponent;
  let fixture: ComponentFixture<ForpracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForpracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
