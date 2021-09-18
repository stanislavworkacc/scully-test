import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-content-type',
  templateUrl: './main-content-type.component.html',
  styleUrls: ['./main-content-type.component.scss']
})
export class MainContentTypeComponent implements OnInit {

  components: any;

  constructor() {
    import('src/app/core/storyblok/components').then(cp => {
      this.components = cp.Components
    });
  }

  @Input() body: any = [];
  @Input() _editable: any;

  ngOnInit() {
  }

}
