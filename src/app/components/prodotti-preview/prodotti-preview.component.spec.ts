import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottiPreviewComponent } from './prodotti-preview.component';

describe('ProdottiPreviewComponent', () => {
  let component: ProdottiPreviewComponent;
  let fixture: ComponentFixture<ProdottiPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdottiPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdottiPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
