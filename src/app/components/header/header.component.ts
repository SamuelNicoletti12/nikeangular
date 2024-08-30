import { Component, Input, OnInit } from '@angular/core';
import { ServiziService } from '../../services/servizi.service';
import { Prodotti } from '../../models/prodotto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  prodotti!: Prodotti[];
  searchText: string = '';
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(public ss: ServiziService, private router: Router) { }
  ngOnInit(): void {
    this.fetchProdotti();
  }

  fetchProdotti(): void {
    this.ss.getProdotti().subscribe({
      next: (data: Prodotti[]) => {
        this.prodotti = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
      },
    });
  }

  onSearch(): void {
    const lowerCaseSearch = this.searchText.toLowerCase();
    const prodottoTrovato = this.prodotti.find(prodotto =>
      prodotto.nome.toLowerCase().includes(lowerCaseSearch)
    );

    if (prodottoTrovato) {
      this.router.navigate(['/prodotti/dettaglio', prodottoTrovato.id]);
    } else {
      alert('Prodotto non trovato');
    }
  }
}