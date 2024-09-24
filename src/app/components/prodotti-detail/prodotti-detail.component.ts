import { Component, OnInit } from '@angular/core';
import { Prodotti } from '../../models/prodotto';
import { ServiziService } from '../../services/servizi.service';
import { ActivatedRoute } from '@angular/router';
import { Form } from '../../models/form';

@Component({
  selector: 'app-prodotti-detail',
  templateUrl: './prodotti-detail.component.html',
  styleUrls: ['./prodotti-detail.component.css'],
})
export class ProdottiDetailComponent implements OnInit {
  form: Form[] = []
  prodotto?: Prodotti;
  immagini: string[] = [];
  videoGallery: string[] = [];
  taglie: string[] = [];
  colori: string[] = [];
  coloreSelezionato!: string;
  tagliaSelezionata!: string;
  mediaPrincipale!: string;
  isVideo: boolean = false;
  notificaVisibile: boolean = false;

  constructor(private ss: ServiziService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Recupera l'id del prodotto dalla route (URL)
    const id = this.route.snapshot.paramMap.get("id")!;
    // Usa il servizio per ottenere il prodotto specifico tramite il suo ID
    this.ss.getProdottiById(id).subscribe(p => {
      // Assegna il prodotto ricevuto alla variabile `prodotto`
      this.prodotto = p;
      // Estrae e assegna le immagini del prodotto
      this.immagini = this.prodotto.immagini;
      // Estrae e assegna i video del prodotto
      this.videoGallery = this.prodotto.video;
      // Imposta l'immagine principale come media iniziale (immagine predefinita del prodotto)
      this.mediaPrincipale = this.prodotto.immagine;
      // Estrae e assegna i colori disponibili per il prodotto
      this.colori = this.prodotto.colori_disponibili;
      // Estrae e assegna le taglie disponibili per il prodotto
      this.taglie = this.prodotto.taglie_disponibili;
    });
  }

  onImageHover(immagine: string): void {
    // Cambia il media principale quando l'utente passa sopra un'immagine (hover)
    this.mediaPrincipale = immagine;
    // Indica che l'attuale media principale è un'immagine e non un video
    this.isVideo = false;
  }

  onVideoHover(video: string): void {
    // Cambia il media principale quando l'utente passa sopra un video (hover)
    this.mediaPrincipale = video;
    // Indica che l'attuale media principale è un video
    this.isVideo = true;
  }

  addToCart() {
    // Verifica se sono stati selezionati sia il colore che la taglia
    if (!this.coloreSelezionato || !this.tagliaSelezionata) { return; }   // Se non sono selezionati, esce dalla funzione
    if (this.prodotto) { // Aggiunge il prodotto al carrello con il colore e la taglia selezionati
      this.ss.aggiungiACarrello(this.prodotto, this.coloreSelezionato, this.tagliaSelezionata);
      this.mostraNotifica(); // Mostra la notifica che conferma l'aggiunta al carrello
    }
  }

  mostraNotifica() {
    // Rende visibile la notifica per confermare l'aggiunta al carrello
    this.notificaVisibile = true;

    setTimeout(() => {// Dopo 3 secondi, nasconde la notifica
      this.notificaVisibile = false;
    }, 3000);
  }

  selezionaColore(event: Event) {
    this.coloreSelezionato = (event.target as HTMLSelectElement).value;  // Memorizza il colore selezionato dall'utente
  }

  selezionaTaglia(event: Event) {
    this.tagliaSelezionata = (event.target as HTMLSelectElement).value;   // Memorizza la taglia selezionata dall'utente
  }
}
