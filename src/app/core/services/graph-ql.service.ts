import {Injectable} from '@angular/core';
import gql from "graphql-tag";
import {Apollo} from "apollo-angular";

@Injectable({
  providedIn: 'root'
})
export class GraphQlService {
  constructor(
    private apollo: Apollo,
    // private ngZone: NgZone
  ) {
    // interval(1).pipe(tuiZonefree(ngZone)).subscribe()
  }


  getData(req: string) {
    return this.apollo
      .query<any>({
        query: gql`
          ${req}
        `
      })
  }

  getTemplateReq(contentType: string, slug: string): any {
    return `
        {
      ${contentType}(by_slugs: "${slug}") {
        total
        items {
          id
          content {
            _editable
            _uid
            body
            component
          }
        }
      }
    }
    `
  }
}
