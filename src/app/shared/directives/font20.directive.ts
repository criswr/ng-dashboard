import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFont20]'
})
export class Font20Directive {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { 
    const element = this.elementRef.nativeElement
    this.renderer.setStyle(element, 'font-size', '20px')
  }

}
