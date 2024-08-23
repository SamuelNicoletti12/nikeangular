import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingraziamentoComponent } from './ringraziamento.component';

describe('RingraziamentoComponent', () => {
  let component: RingraziamentoComponent;
  let fixture: ComponentFixture<RingraziamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RingraziamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RingraziamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
