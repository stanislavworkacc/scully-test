import {Component, OnInit} from '@angular/core';
import {AddScriptsService} from "./core/services/add-scripts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private scriptService: AddScriptsService,
              public router: Router) {
  }

  ngOnInit() {
    this.scriptService.load('storyblock').then(data => {
      // @ts-ignore
      const {StoryblokBridge, location} = window
      const storyblokInstance = new StoryblokBridge();

      storyblokInstance.on(['published', 'change'], () => {
        // reload page if save or publish is clicked
        location.reload(true);
      })
    }).catch(error => console.log(error));
  }
}
