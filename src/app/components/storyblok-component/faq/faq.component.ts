import {
  Component, Input,
} from "@angular/core";

@Component({
  selector: "faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.scss"],
})
export class FaqComponent {
  public collapsing = true;

  @Input() faq: any;
}

