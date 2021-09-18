import { trigger, state, style, transition, animate } from "@angular/animations";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input, OnInit,
  QueryList
} from "@angular/core";
import { AccordionItem } from "src/app/components/storyblok-component/faq/accordion/directive/accordion-item.directive";

//resource accordion https://codesandbox.io/s/ng-accordion-ssscp?file=/src/app/app.component.css
//url https://blog.sreyaj.dev/customizable-accordion-component-angular

@Component({
  selector: "accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('contentExpansion', [
      state('expanded', style({height: '*', opacity: 1, visibility: 'visible'})),
      state('collapsed', style({height: '0px', opacity: 0, visibility: 'hidden'})),
      transition('expanded <=> collapsed',
        animate('300ms cubic-bezier(.37,1.04,.68,.98)')),
    ])
  ]
})
export class AccordionComponent implements OnInit{
  expanded = new Set<number>();
  /**
   * Decides if the single item will be open at once or not.
   * In collapsing mode, toggling one would collapse others
   */
  @Input() collapsing = true;

  @ContentChildren(AccordionItem) items: QueryList<AccordionItem> | null;


  constructor(
  ) {
    this.items = null;
  }

  /**
   * Make the toggle function available to be called from
   * outside.
   * @param index - index of the accordion item
   */


  ngOnInit(): void {
  }

  getToggleState = (index: number) => {
    return this.toggleState.bind(this, index);
  };

  toggleState = (index: number) => {
    if (this.expanded.has(index)) {
      this.expanded.delete(index);
    } else {
      if (this.collapsing) {
        this.expanded.clear();
      }
      this.expanded.add(index);
    }

    // console.log(this.expanded)
  };
}
