import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[BorderBox]'
})
export class BorderBoxDirective implements OnChanges {
// dom =>
// document.getElement
// ElementRef
@Input() HoverColor:string='darkred';
@Input('BorderBox') borderColor:string='pink';
  constructor(private elem:ElementRef) {
    // elem.nativeElement.style.border=`3px solid ${this.borderColor}`;
  }
  ngOnChanges(): void {
    this.elem.nativeElement.style.border=`3px solid ${this.borderColor}`;

  }

// onmouseover=func1()
// method decoractor
  @HostListener('mouseover') mouseOverFunc(){
    // this.elem.nativeElement.style.border="3px dashed blue";
    this.elem.nativeElement.style.border=`3px dashed ${this.HoverColor}`;
  }

  @HostListener('mouseout') mouseOutFunc(){
    this.elem.nativeElement.style.border=`3px solid ${this.borderColor}`;
  }


}
