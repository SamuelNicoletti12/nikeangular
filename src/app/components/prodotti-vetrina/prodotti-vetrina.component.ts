import { Component, OnInit } from '@angular/core';
import { Prodotti } from '../../models/prodotto';
import { ServiziService } from '../../services/servizi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prodotti-vetrina',
  templateUrl: './prodotti-vetrina.component.html',
  styleUrl: './prodotti-vetrina.component.css'
})
export class ProdottiVetrinaComponent implements OnInit {

  prodotti: Prodotti[] = [];
  categoriaFiltrata: string | null = null;


  constructor(private ss: ServiziService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.categoriaFiltrata = params['categoria'] || null;
      this.fetchProdotti();
    });
  }
  fetchProdotti(): void {
    this.ss.getProdotti().subscribe((data: Prodotti[]) => {
      if (this.categoriaFiltrata) {
        this.prodotti = data.filter(prodotto => prodotto.categoria.toLowerCase() === this.categoriaFiltrata?.toLowerCase());
      } else {
        this.prodotti = data;
      }
    });
  }
}

