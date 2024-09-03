import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Prodotti } from '../models/prodotto';

@Injectable({
  providedIn: 'root'
})
export class ServiziService {

  constructor(private http: HttpClient) { }

  prodottiACarrello: Array<{ prodotto: Prodotti, colore: string, taglia: string, quantita: number }> = [];
  private totalePrezzo = new BehaviorSubject<number>(0);
  private carrelloCount = new BehaviorSubject<number>(0);

  totalePrezzo$ = this.totalePrezzo.asObservable();
  carrelloCount$ = this.carrelloCount.asObservable();

  getProdotti(): Observable<Prodotti[]> {
    return this.http.get<Prodotti[]>("http://localhost:3000/prodotti");
  }

  getProdottiById(id: string): Observable<Prodotti> {
    return this.http.get<Prodotti>("http://localhost:3000/prodotti/" + id);
  }

  aggiungiACarrello(prodotto: Prodotti, colore: string, taglia: string): void {
    const item = this.prodottiACarrello.find(p => p.prodotto.id === prodotto.id && p.colore === colore && p.taglia === taglia);

    if (item) {
      item.quantita += 1;
    } else {
      this.prodottiACarrello.push({ prodotto, colore, taglia, quantita: 1 });
    }

    this.aggiornaTotalePrezzo();
    this.aggiornaCarrelloCount();
  }

  rimuoviDaCarrello(id: number, colore: string, taglia: string): void {
    const item = this.prodottiACarrello.find(p => p.prodotto.id === id && p.colore === colore && p.taglia === taglia);

    if (item) {
      item.quantita -= 1;
      if (item.quantita === 0) {
        this.prodottiACarrello = this.prodottiACarrello.filter(p => p !== item);
      }
    }

    this.aggiornaTotalePrezzo();
    this.aggiornaCarrelloCount();
  }

  aggiornaTotalePrezzo(): void {
    const totale = this.prodottiACarrello.reduce((acc, item) => acc + (item.prodotto.prezzo * item.quantita), 0);
    this.totalePrezzo.next(totale);
  }

  aggiornaCarrelloCount(): void {
    const count = this.prodottiACarrello.reduce((acc, item) => acc + item.quantita, 0);
    this.carrelloCount.next(count);
  }
}
