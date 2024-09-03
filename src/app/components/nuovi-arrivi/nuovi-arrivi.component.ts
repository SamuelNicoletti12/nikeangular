import { Component, OnInit } from '@angular/core';
import { Prodotti } from '../../models/prodotto';
import { ServiziService } from '../../services/servizi.service';

@Component({
  selector: 'app-nuovi-arrivi',
  templateUrl: './nuovi-arrivi.component.html',
  styleUrl: './nuovi-arrivi.component.css'
})
export class NuoviArriviComponent implements OnInit {
  nuoviArriviProdotti: Prodotti[] = [];

  constructor(private serviziService: ServiziService) { }

  ngOnInit(): void {
    this.serviziService.getProdotti().subscribe((prodotti) => {
      this.nuoviArriviProdotti = prodotti.filter(p => p.nuovo_arrivi === true);
    });
  }
}

