import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderImmagini2Component } from './slider-immagini2.component';

describe('SliderImmagini2Component', () => {
  let component: SliderImmagini2Component;
  let fixture: ComponentFixture<SliderImmagini2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderImmagini2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderImmagini2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
