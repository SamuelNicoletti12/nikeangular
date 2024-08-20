import { Component, Input } from '@angular/core';
import { Prodotti } from '../../models/prodotto';
import { ServiziService } from '../../services/servizi.service';

@Component({
  selector: 'app-prodotti-preview',
  templateUrl: './prodotti-preview.component.html',
  styleUrl: './prodotti-preview.component.css'
})
export class ProdottiPreviewComponent {
  @Input()
  prodotto?: Prodotti;

  constructor(public ss: ServiziService) {

  }

}
