import { Component, OnInit } from '@angular/core';
import { ServiziService } from '../../services/servizi.service';
import { Prodotti } from '../../models/prodotto';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.css'
})
export class BestSellerComponent implements OnInit {
  bestSellerProdotti: Prodotti[] = [];

  constructor(private serviziService: ServiziService) { }
  // Metodo che viene eseguito quando il componente viene inizializzato
  ngOnInit(): void {
    // Usa il servizio per ottenere la lista di prodotti (presumibilmente da un'API)
    this.serviziService.getProdotti().subscribe((prodotti) => {
      // Filtra i prodotti per includere solo quelli con un punteggio di almeno 4
      this.bestSellerProdotti = prodotti.filter(p => p.rating.rate >= 4);
    });
  }
}
