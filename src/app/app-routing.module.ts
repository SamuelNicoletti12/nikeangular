import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProdottiPreviewComponent } from './components/prodotti-preview/prodotti-preview.component';
import { ProdottiVetrinaComponent } from './components/prodotti-vetrina/prodotti-vetrina.component';
import { ProdottiDetailComponent } from './components/prodotti-detail/prodotti-detail.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { RingraziamentoComponent } from './components/ringraziamento/ringraziamento.component';

const routes: Routes = [
  {
    path: "", component: MainComponent
  },
  {
    path: "prodotti", component: ProdottiVetrinaComponent
  },
  {
    path: "prodotti/dettaglio/:id", component: ProdottiDetailComponent
  },
  {
    path: "carrello", component: CarrelloComponent
  },
  {
    path: "registrazione", component: RegistrazioneComponent
  },
  {
    path: "pagamento", component: PagamentoComponent
  },
  {
    path: "ringraziamento", component: RingraziamentoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
