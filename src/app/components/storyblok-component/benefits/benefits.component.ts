import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {

  public data: any = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven'
  }

  @Input() _editable: any;
  @Input() content: any;

  constructor() { }

  ngOnInit(): void {
  }

  getAdditionalClass(idx: number, type: string) {
    return `${type === 'img' ? 'benefits__icon': 'benefits__title'} ${idx === 1 ? 'costil': this.data[idx]}`;
  }

  getCurrentSvg(idx: number): string {
    return `/assets/${idx}.svg`;
  }
}
