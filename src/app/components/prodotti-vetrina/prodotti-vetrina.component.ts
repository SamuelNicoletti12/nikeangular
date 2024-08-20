import { Component, OnInit } from '@angular/core';
import { Prodotti } from '../../models/prodotto';
import { ServiziService } from '../../services/servizi.service';

@Component({
  selector: 'app-prodotti-vetrina',
  templateUrl: './prodotti-vetrina.component.html',
  styleUrl: './prodotti-vetrina.component.css'
})
export class ProdottiVetrinaComponent implements OnInit {

  prodotti: Prodotti[] = [];


  constructor(private ss: ServiziService) {

  }
  ngOnInit(): void {
    this.ss.getProdotti().subscribe(dati => {
      this.prodotti = dati;
    });

  }
}
