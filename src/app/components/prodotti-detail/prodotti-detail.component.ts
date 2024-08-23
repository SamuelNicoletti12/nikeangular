import { Component, OnInit } from '@angular/core';
import { Prodotti } from '../../models/prodotto';
import { ServiziService } from '../../services/servizi.service';
import { ActivatedRoute } from '@angular/router';
import { Form } from '../../models/form';
import { style } from '@angular/animations';

@Component({
  selector: 'app-prodotti-detail',
  templateUrl: './prodotti-detail.component.html',
  styleUrl: './prodotti-detail.component.css'
})
export class ProdottiDetailComponent implements OnInit {

  prodotto?: Prodotti;
  form: Form = new Form();
  images: string[] = []

  constructor(private ss: ServiziService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")!;
    this.ss.getProdottiById(id).subscribe(p => {
      this.prodotto = p;


    })
  }

  addToCart() {
    this.ss.aggiungiACarrello(this.prodotto!)
  }

  //   grande(link: string): void {
  // if(link){
  //   this.images = link
  // }
  //   }


}

