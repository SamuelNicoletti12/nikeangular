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

  ngOnInit(): void {
    this.serviziService.getProdotti().subscribe((prodotti) => {

      this.bestSellerProdotti = prodotti.filter(p => p.rating.rate >= 4);
    });
  }
}
