import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[accordionTitle]'
})
export class AccordionTitleDirective {
  constructor(public templateRef: TemplateRef<any>) {}

}
