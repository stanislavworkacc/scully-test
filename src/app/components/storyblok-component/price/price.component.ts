import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  @Input() _editable: any;
  @Input() services: any;
  @Input() clothes: any;

  constructor() { }

  ngOnInit(): void {
  }

}
