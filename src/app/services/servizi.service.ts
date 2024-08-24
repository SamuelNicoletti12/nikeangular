import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Prodotti } from '../models/prodotto';

@Injectable({
  providedIn: 'root'
})
export class ServiziService {

  constructor(private http: HttpClient) { }

  prodottiACarrello: Array<{ prodotto: Prodotti, colore: string, taglia: string }> = [];
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

  aggiungiACarrello(prodotto: Prodotti, colore: string, taglia: string) {
    this.prodottiACarrello.push({ prodotto, colore, taglia });
    this.aggiornaTotalePrezzo();
    this.aggiornaCarrelloCount()

  }

  aggiornaTotalePrezzo(): void {
    const totale = this.prodottiACarrello.reduce((acc, item) => acc + item.prodotto.prezzo, 0);
    this.totalePrezzo.next(totale);
  }



  rimuoviDaCarrello(id: number, colore: string, taglia: string): void {
    this.prodottiACarrello = this.prodottiACarrello.filter(p => p.prodotto.id !== id || p.colore !== colore || p.taglia !== taglia);
    this.aggiornaCarrelloCount();
    this.aggiornaTotalePrezzo();
  }

  aggiornaCarrelloCount(): void {
    this.carrelloCount.next(this.prodottiACarrello.length);
  }


}


