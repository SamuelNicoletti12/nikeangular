import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider-immagini',
  templateUrl: './slider-immagini.component.html',
  styleUrl: './slider-immagini.component.css'
})
export class SliderImmaginiComponent {
  @Input() images: string[] = [];
  currentIndex: number = 0;

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = Math.ceil(this.images.length / 3) - 1; // Vai all'ultima colonna
    }
    this.updateSliderPosition();
  }

  nextSlide(): void {
    if (this.currentIndex < Math.ceil(this.images.length / 3) - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Vai alla prima colonna
    }
    this.updateSliderPosition();
  }

  private updateSliderPosition(): void {
    const sliderWrapper = document.querySelector('.slider-wrapper') as HTMLElement;
    if (sliderWrapper) {
      sliderWrapper.style.transform = `translateX(-${this.currentIndex * 100 / 3}%)`;
    }
  }
}