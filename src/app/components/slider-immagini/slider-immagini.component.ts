import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider-immagini',
  templateUrl: './slider-immagini.component.html',
  styleUrl: './slider-immagini.component.css'
})
export class SliderImmaginiComponent {
  @Input() images: string[] = []; // Input decorator per accettare un array di immagini dal componente padre
  currentIndex: number = 0;  // Indice che traccia la slide corrente
  categories: string[] = ['basket', 'running', 'sneakers'];   // Array di categorie associate alle immagini del slider
  constructor(private router: Router) { }  // Inietta il Router per la navigazione programmatica
  prevSlide(): void {     // Metodo per spostarsi alla slide precedente
    if (this.currentIndex > 0) {   // Se non siamo alla prima slide, decrementa l'indice
      this.currentIndex--;
    } else {
      this.currentIndex = Math.ceil(this.images.length / 3) - 1;  // Se siamo alla prima slide, passa all'ultima
    }
    this.updateSliderPosition();  // Aggiorna la posizione del slider
  }

  nextSlide(): void {  // Metodo per spostarsi alla slide successiva
    if (this.currentIndex < Math.ceil(this.images.length / 3) - 1) {   // Se non siamo all'ultima slide, incrementa l'indice
      this.currentIndex++;
    } else {
      this.currentIndex = 0;   // Se siamo all'ultima slide, torna alla prima
    }
    this.updateSliderPosition();   // Aggiorna la posizione del slider
  }

  private updateSliderPosition(): void {   // Metodo privato per aggiornare la posizione dello slider
    const sliderWrapper = document.querySelector('.slider-wrapper') as HTMLElement;  // Seleziona l'elemento DOM con la classe 'slider-wrapper'
    if (sliderWrapper) {
      // Trasforma la posizione del wrapper per spostare le immagini
      // La formula riduce il valore di 'translateX' in base all'indice corrente
      sliderWrapper.style.transform = `translateX(-${this.currentIndex * 100 / 3}%)`;
    }
  }

  navigateToCategory(index: number): void {   // Metodo per navigare alla categoria associata con l'immagine
    const category = this.categories[index];  // Recupera la categoria corrispondente all'indice
    this.router.navigate(['/prodotti'], { queryParams: { categoria: category } });   // Naviga alla rotta '/prodotti' con il parametro di query 'categoria'
  }
}
