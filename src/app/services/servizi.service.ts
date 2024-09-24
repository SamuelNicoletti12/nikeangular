import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Prodotti } from '../models/prodotto';

@Injectable({
  providedIn: 'root'
})
export class ServiziService {

  constructor(private http: HttpClient) { }

  prodottiACarrello: Array<{ prodotto: Prodotti, colore: string, taglia: string, quantita: number }> = [];   // Array per gestire i prodotti aggiunti al carrello, con quantità, colore e taglia
  // BehaviorSubject per mantenere lo stato reattivo del prezzo totale e del conteggio del carrello
  private totalePrezzo = new BehaviorSubject<number>(0);
  private carrelloCount = new BehaviorSubject<number>(0);
  // Osservabili esposti per monitorare il prezzo totale e il numero di articoli nel carrello
  totalePrezzo$ = this.totalePrezzo.asObservable();
  carrelloCount$ = this.carrelloCount.asObservable();

  getProdotti(): Observable<Prodotti[]> {
    return this.http.get<Prodotti[]>("http://localhost:3000/prodotti");
  }

  getProdottiById(id: string): Observable<Prodotti> {
    return this.http.get<Prodotti>("http://localhost:3000/prodotti/" + id);
  }
  // Aggiunge un prodotto al carrello con colore e taglia selezionati
  aggiungiACarrello(prodotto: Prodotti, colore: string, taglia: string): void {
    // Trova se l'oggetto con lo stesso prodotto, colore e taglia è già nel carrello
    const item = this.prodottiACarrello.find(p => p.prodotto.id === prodotto.id && p.colore === colore && p.taglia === taglia);
    // Se l'articolo è già nel carrello, aumenta la quantità
    if (item) {
      item.quantita += 1;
    } else {
      this.prodottiACarrello.push({ prodotto, colore, taglia, quantita: 1 });  // Altrimenti, aggiungi un nuovo elemento al carrello con quantità iniziale di 1
    }
    // Aggiorna il prezzo totale e il numero di articoli nel carrello
    this.aggiornaTotalePrezzo();
    this.aggiornaCarrelloCount();
  }
  // Rimuove un prodotto dal carrello (decrementando la quantità o eliminando se arriva a 0)
  rimuoviDaCarrello(id: number, colore: string, taglia: string): void {
    // Trova l'oggetto corrispondente nel carrello
    const item = this.prodottiACarrello.find(p => p.prodotto.id === id && p.colore === colore && p.taglia === taglia);

    if (item) {  // Se l'articolo esiste, decrementa la quantità
      item.quantita -= 1;
      if (item.quantita === 0) { // Se la quantità scende a 0, rimuovi l'oggetto dal carrello
        this.prodottiACarrello = this.prodottiACarrello.filter(p => p !== item);
      }
    }
    // Aggiorna il prezzo totale e il conteggio del carrello dopo la rimozione
    this.aggiornaTotalePrezzo();
    this.aggiornaCarrelloCount();
  }
  // Calcola e aggiorna il prezzo totale del carrello
  aggiornaTotalePrezzo(): void {
    // Usa `reduce` per sommare il prezzo totale moltiplicato per la quantità di ogni prodotto
    const totale = this.prodottiACarrello.reduce((acc, item) => acc + (item.prodotto.prezzo * item.quantita), 0);
    this.totalePrezzo.next(totale);   // Aggiorna il BehaviorSubject con il nuovo totale
  }
  // Calcola e aggiorna il numero totale di articoli nel carrello
  aggiornaCarrelloCount(): void {
    const count = this.prodottiACarrello.reduce((acc, item) => acc + item.quantita, 0); // Usa `reduce` per contare la quantità totale di articoli nel carrello
    this.carrelloCount.next(count);  // Aggiorna il BehaviorSubject con il nuovo conteggio
  }
}
