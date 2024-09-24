import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from "@angular/common/http"
import { FormsModule } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdottiVetrinaComponent } from './components/prodotti-vetrina/prodotti-vetrina.component';
import { ProdottiPreviewComponent } from './components/prodotti-preview/prodotti-preview.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { ProdottiDetailComponent } from './components/prodotti-detail/prodotti-detail.component';
import { RatingComponent } from './components/rating/rating.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { RingraziamentoComponent } from './components/ringraziamento/ringraziamento.component';
import { SliderImmaginiComponent } from './components/slider-immagini/slider-immagini.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { NuoviArriviComponent } from './components/nuovi-arrivi/nuovi-arrivi.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    ProdottiVetrinaComponent,
    ProdottiPreviewComponent,
    HeaderComponent,
    MainComponent,
    CarrelloComponent,
    ProdottiDetailComponent,
    RatingComponent,
    RegistrazioneComponent,
    PagamentoComponent,
    RingraziamentoComponent,
    SliderImmaginiComponent,
    BestSellerComponent,
    NuoviArriviComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
