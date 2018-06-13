import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('class')
  elementClass: string;

  constructor() {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.elementClass = 'blue-text-dir';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementClass = null;
  }

  @HostListener('click') onMouseClick() {
    this.elementClass = 'yellow-dir';
  }

}
