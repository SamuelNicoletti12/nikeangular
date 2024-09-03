import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider-immagini2',
  templateUrl: './slider-immagini2.component.html',
  styleUrl: './slider-immagini2.component.css'
})
export class SliderImmagini2Component {
  @Input() images: string[] = [];
  currentIndex: number = 0;
  categories: string[] = ['basket', 'running', 'sneakers'];
  constructor(private router: Router) { }
  precedente(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = Math.ceil(this.images.length / 3) - 1;
    }
    this.posizioneSliderAggiornata();
  }

  successivo(): void {
    if (this.currentIndex < Math.ceil(this.images.length / 3) - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.posizioneSliderAggiornata();
  }

  private posizioneSliderAggiornata(): void {
    const sliderWrapper = document.querySelector('.slider-wrapper') as HTMLElement;
    if (sliderWrapper) {
      sliderWrapper.style.transform = `translateX(-${this.currentIndex * 100 / 3}%)`;
    }
  }

  vaiAllaCategoria(index: number): void {
    const category = this.categories[index];
    this.router.navigate(['/prodotti'], { queryParams: { categoria: category } });
  }
}


