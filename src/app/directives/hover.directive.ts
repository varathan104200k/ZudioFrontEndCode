import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class HoverDirective {

  constructor(private element:ElementRef,private render: Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    // this.render.setStyle(this.element.nativeElement,'margin','10px')
    this.render.setStyle(this.element.nativeElement,'padding','0')
    this.render.setStyle(this.element.nativeElement,'transotion','0.5s')
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    // this.render.setStyle(this.element.nativeElement,'margin','0')
    this.render.setStyle(this.element.nativeElement,'padding','10px')
    this.render.setStyle(this.element.nativeElement,'transotion','0.5s')
  }

}
