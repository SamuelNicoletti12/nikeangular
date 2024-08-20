import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottiVetrinaComponent } from './prodotti-vetrina.component';

describe('ProdottiVetrinaComponent', () => {
  let component: ProdottiVetrinaComponent;
  let fixture: ComponentFixture<ProdottiVetrinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdottiVetrinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdottiVetrinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
