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
    // Utilizza il servizio per ottenere i prodotti al caricamento del componente
    this.serviziService.getProdotti().subscribe((prodotti) => {
      // Filtra i prodotti per includere solo quelli che hanno la proprietà 'nuovo_arrivi' impostata a true
      this.nuoviArriviProdotti = prodotti.filter(p => p.nuovo_arrivi === true);
    });
  }
}

