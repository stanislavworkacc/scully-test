import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {ConfigurateFrontRoutesService} from "./configurate-front-routes.service";
import {gql} from "graphql-request";
import {GraphQlService} from "./graph-ql.service";

const query = gql`
    {
      Links {
        items {
          isFolder
          slug
        }
      }
    }
  `

@Injectable({
  providedIn: 'root'
})
export class RouteLoaderService {

  public routesDataFromServer : BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private client: HttpClient,
    private router: Router,
    private configutareRoutes: ConfigurateFrontRoutesService,
    private graphqlService: GraphQlService,

  ){ }

  public load(): any {
    return this.graphqlService.getData(query).pipe(
      tap(res => {
        this.routesDataFromServer.next(
          res.data.Links.items
        );
      }),
      map((el: any) => this.createRoutes(el.data.Links.items)),
    )
  }

  private createRoutes(json: any) {
    const routes = this.configutareRoutes.configureRoutes(json);
    // this.routesDataFromServer.next(routes);
    this.router.resetConfig(routes)
  }
}
