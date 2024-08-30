import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderImmaginiComponent } from './slider-immagini.component';

describe('SliderImmaginiComponent', () => {
  let component: SliderImmaginiComponent;
  let fixture: ComponentFixture<SliderImmaginiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderImmaginiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderImmaginiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
