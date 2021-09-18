import { Injectable } from '@angular/core';
import {NotFoundComponent} from 'src/app/components/static-components/not-found/not-found.component';
import {deleteLastSlash} from "../utils/deleteLastSlash";
import {routesCases, savePath} from "../utils/routes-cases";

@Injectable({
  providedIn: 'root'
})
export class ConfigurateFrontRoutesService {

  constructor() { }

  configureRoutes (data: any): any {
    return data.reduce((accum: any, page: any, idx: any) => {
      const slug = page.slug.split('/')[0];
      if(data.length === idx + 1) {
        accum.push(savePath(NotFoundComponent, '**'));
        return accum
      } else {
        accum.push(routesCases(slug, page.slug));
        return accum;
      }
    }, [])
  }

  getCurrentSlug(url: any, serverData: any): any {
    if(deleteLastSlash(serverData[serverData.length - 1].slug) === deleteLastSlash(url)) {
      return serverData[serverData.length - 1].slug
    }
    return this.getCurrentSlug(url, serverData.slice(0, serverData.length - 1));
  }
}
