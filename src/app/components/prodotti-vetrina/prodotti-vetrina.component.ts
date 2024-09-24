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
    // Sottoscrive agli eventuali cambiamenti nei parametri della query string
    this.route.queryParams.subscribe(params => {
      // Estrae il parametro 'categoria' dalla query string. Se non esiste, imposta a `null`.
      this.categoriaFiltrata = params['categoria'] || null;
      // Chiama il metodo per recuperare i prodotti (filtrati se è stata passata una categoria)
      this.fetchProdotti();
    });
  }
  fetchProdotti(): void {
    // Usa il servizio per ottenere la lista completa dei prodotti
    this.ss.getProdotti().subscribe((data: Prodotti[]) => {
      // Se c'è una categoria filtrata, filtra i prodotti per la categoria specificata
      if (this.categoriaFiltrata) {
        // Confronta la categoria dei prodotti (in minuscolo per evitare errori dovuti al maiuscolo/minuscolo)
        this.prodotti = data.filter(prodotto => prodotto.categoria.toLowerCase() === this.categoriaFiltrata?.toLowerCase());
      } else {
        // Se non c'è una categoria specificata, mostra tutti i prodotti
        this.prodotti = data;
      }
    });
  }
}

