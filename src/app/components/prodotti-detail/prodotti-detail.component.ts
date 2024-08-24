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

  constructor(private ss: ServiziService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")!;
    this.ss.getProdottiById(id).subscribe(p => {
      this.prodotto = p;
      this.immagini = this.prodotto.immagini;
      this.videoGallery = this.prodotto.video; // Inizializza l'array dei video
      this.mediaPrincipale = this.prodotto.immagine; // Default to main image
      this.colori = this.prodotto.colori_disponibili;
      this.taglie = this.prodotto.taglie_disponibili;
    });
  }

  onImageHover(immagine: string): void {
    this.mediaPrincipale = immagine;
    this.isVideo = false; // Quando si passa su un'immagine, imposta isVideo su false
  }

  onVideoHover(video: string): void {
    this.mediaPrincipale = video;
    this.isVideo = true; // Quando si passa su un video, imposta isVideo su true
  }

  addToCart() {
    if (!this.coloreSelezionato || !this.tagliaSelezionata) { return; }
    if (this.prodotto) {
      this.ss.aggiungiACarrello(this.prodotto, this.coloreSelezionato, this.tagliaSelezionata);
    }
  }

  selezionaColore(event: Event) {
    this.coloreSelezionato = (event.target as HTMLSelectElement).value;
  }

  selezionaTaglia(event: Event) {
    this.tagliaSelezionata = (event.target as HTMLSelectElement).value;
  }
}
