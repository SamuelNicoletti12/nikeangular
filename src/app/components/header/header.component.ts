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
  prodotti!: Prodotti[];  // Variabile per contenere la lista dei prodotti
  searchText: string = '';   // Stringa per memorizzare il testo inserito nella barra di ricerca
  isLoading: boolean = true;   // Booleano per indicare se i dati sono in fase di caricamento
  errorMessage: string = 'errore dati';   // Messaggio di errore in caso di problemi con il caricamento dei dati

  constructor(public ss: ServiziService, private router: Router) { }
  ngOnInit(): void {
    // Richiama il metodo per ottenere i prodotti al caricamento del componente
    this.fetchProdotti();
  }

  fetchProdotti(): void {
    // Utilizza il servizio per recuperare i prodotti
    this.ss.getProdotti().subscribe({
      // Se il recupero ha successo, aggiorna la lista dei prodotti e imposta `isLoading` a `false`
      next: (data: Prodotti[]) => {
        this.prodotti = data;
        this.isLoading = false;
      },
      error: (error) => {
        // Se si verifica un errore, memorizza il messaggio di errore e imposta `isLoading` a `false`
        this.errorMessage = error.message;
        this.isLoading = false;
      },
    });
  }
  // Metodo chiamato quando l'utente effettua una ricerca
  onSearch(): void {
    // Converte il testo della ricerca in minuscolo per fare un confronto non sensibile al maiuscolo/minuscolo
    const lowerCaseSearch = this.searchText.toLowerCase();
    // Cerca un prodotto che contenga il testo della ricerca nel nome
    const prodottoTrovato = this.prodotti.find(prodotto =>
      prodotto.nome.toLowerCase().includes(lowerCaseSearch)
    );
    // Se il prodotto è trovato, reindirizza alla pagina del dettaglio del prodotto
    if (prodottoTrovato) {
      this.router.navigate(['/prodotti/dettaglio', prodottoTrovato.id]);
    } else {   // Se nessun prodotto corrisponde, mostra un messaggio di avviso
      alert('Prodotto non trovato');
    }
  }
}