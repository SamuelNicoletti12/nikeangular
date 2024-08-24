import { Component, OnInit } from '@angular/core';
import { ServiziService } from '../../services/servizi.service';
import { Prodotti } from '../../models/prodotto';


@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.css'
})
export class CarrelloComponent implements OnInit {


  carrelloCount: number = 0;
  totalePrezzo: number = 0;
  constructor(public serviziservice: ServiziService,) {

  }
  ngOnInit(): void {
    this.serviziservice.totalePrezzo$.subscribe(totale => {
      this.totalePrezzo = totale;
    });
  }




}
