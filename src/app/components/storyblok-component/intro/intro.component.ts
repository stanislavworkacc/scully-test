import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  @Input() _editable: any;
  @Input() content: any;
  // @Input() text: any;
  // @Input() button_text: any;

  get titleGetter(): any {
    return this.content.find((el: any) => el.component === 'title');
  }

  get textGetter(): any {
    return this.content.find((el: any) => el.component === 'Text');
  }

  get buttonGetter(): any {
    return this.content.find((el: any) => el.component === 'Button');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
