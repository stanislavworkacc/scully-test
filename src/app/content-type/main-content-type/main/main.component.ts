import {Component, OnDestroy, OnInit} from '@angular/core';
import {of, Subscription} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {GraphQlVariable} from "../../../core/interface/qraphQl.variables";
import {ConfigurateFrontRoutesService} from "../../../core/services/configurate-front-routes.service";
import {currentUrl} from "../../../core/utils/currentUrl";
import {ActivatedRoute, Router} from "@angular/router";
import {GraphQlService} from "../../../core/services/graph-ql.service";
import {Components} from "../../../core/storyblok/components";
import {RouteLoaderService} from "../../../core/services/route-loader.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  slug: string;
  routesDataFromServerSubscription: Subscription;
  subscriptionData: Subscription;
  story: any = {items: null, name: ''};
  storyComponent: any;
  components = Components;

  constructor(private graphqlService: GraphQlService,
              private route: ActivatedRoute,
              private router: Router,

  ) {
    this.slug = '';
    this.routesDataFromServerSubscription = new Subscription();
    this.subscriptionData = new Subscription();
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): any {
    const request = this.graphqlService.getTemplateReq(GraphQlVariable.GENERAL_CONTENT_TYPE, currentUrl(this.router.url));
    this.subscriptionData = this.graphqlService.getData(request).pipe(
      catchError(e => of(null)))
      .subscribe((page: any) => {
        this.story = page.data[GraphQlVariable.GENERAL_CONTENT_TYPE].items[0];
        this.storyComponent = page.data[GraphQlVariable.GENERAL_CONTENT_TYPE].items[0].content.component;
      })
  }

  ngOnDestroy(): void {
    this.subscriptionData.unsubscribe();
    this.routesDataFromServerSubscription.unsubscribe();
  }

}
