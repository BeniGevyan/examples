import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Directive({
  selector: "[highlight]",
})
export class HighlightDirective implements OnChanges {
  @Input() highlight;
  
  defaultColor = 'yellow';

  // el === the host element to which we apply the directive
  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.applyHighlight('');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.applyHighlight(this.highlight || this.defaultColor);
  }


  private applyHighlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  ngOnChanges(changes: SimpleChanges) {
    const { highlight } = changes;
    if (highlight.currentValue !== highlight.previousValue) {
      this.applyHighlight(this.highlight || this.defaultColor)
    }
  }

}
