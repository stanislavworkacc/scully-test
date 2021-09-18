import {ContentChild, Directive, Input} from '@angular/core';
import { AccordionContentDirective } from "./accordion-content.directive";
import { AccordionHeader } from "./accordion-header.directive";
import { AccordionTitleDirective } from "./accordion-title.directive";

@Directive({
  selector: 'accordion-item'
})
export class AccordionItem {
  @Input() title = "";
  @Input() disabled = false;

  @ContentChild(AccordionContentDirective) content: any;
  @ContentChild(AccordionTitleDirective) customTitle: any;
  @ContentChild(AccordionHeader) customHeader: any;

  constructor() {

  }
}
