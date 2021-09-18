import {Inject, Injectable} from '@angular/core';
import { ScriptStore } from 'src/app/core/utils/addScript.store'
import { DOCUMENT } from '@angular/common';

declare var document: any;

@Injectable({
  providedIn: 'root'
})
export class AddScriptsService {
  private scripts: any = {};

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  load(...scripts: string[]) {
    var promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      //resolve if already loaded
      if (this.scripts[name].loaded) {
        resolve({script: name, loaded: true, status: 'Already Loaded'});
      }
      else {
        //load script
        let script = this.document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        // @ts-ignore
        if (script.readyState) {  //IE
          // @ts-ignore
          script.onreadystatechange = () => {
            // @ts-ignore
            if (script.readyState === "loaded" || script.readyState === "complete") {
              // @ts-ignore
              script.onreadystatechange = null;
              this.scripts[name].loaded = true;
              resolve({script: name, loaded: true, status: 'Loaded'});
            }
          };
        } else {  //Others
          script.onload = () => {
            this.scripts[name].loaded = true;
            resolve({script: name, loaded: true, status: 'Loaded'});
          };
        }
        script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
        this.document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }
}
