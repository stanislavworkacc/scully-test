import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import {DynamicModule} from "ng-dynamic-component";
import {AgmCoreModule, GoogleMapsAPIWrapper} from "@agm/core";
import {listOfComponent} from "./core/utils/universal-component-list";
import {StoryblokDirective} from "./core/storyblok/storyblok.directive";
import {MainContentTypeComponent} from "./content-type/main-content-type/main-content-type/main-content-type.component";
import {HeaderComponent} from "./components/static-components/header/header.component";
import {PriceComponent} from "./components/storyblok-component/price/price.component";
import {BenefitsComponent} from "./components/storyblok-component/benefits/benefits.component";
import {NotFoundComponent} from "./components/static-components/not-found/not-found.component";
import {AccordionComponent} from "./components/storyblok-component/faq/accordion/accordion.component";
import {AccordionContentDirective} from "./components/storyblok-component/faq/accordion/directive/accordion-content.directive";
import {MapsComponent} from "./components/storyblok-component/maps/maps.component";
import {AccordionItem} from "./components/storyblok-component/faq/accordion/directive/accordion-item.directive";
import {IntroComponent} from "./components/storyblok-component/intro/intro.component";
import {MainComponent} from "./content-type/main-content-type/main/main.component";
import {AccordionTitleDirective} from "./components/storyblok-component/faq/accordion/directive/accordion-title.directive";
import {AccordionHeader} from "./components/storyblok-component/faq/accordion/directive/accordion-header.directive";
import {SideNavComponent} from "./components/static-components/header/side-nav/side-nav.component";
import {FaqComponent} from "./components/storyblok-component/faq/faq.component";
import {SideNavContentComponent} from "./components/static-components/header/side-nav-content/side-nav-content.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GraphQLModule} from "./graphql.module";
import {HttpLinkModule} from "apollo-angular-link-http";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NavigationService} from "./core/services/navigation.service";
import {MainInterceptorInterceptor} from "./core/interceptor/main-interceptor.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    StoryblokDirective,
    AppComponent,
    MainComponent,
    MainContentTypeComponent,
    HeaderComponent,
    IntroComponent,
    PriceComponent,
    BenefitsComponent,
    NotFoundComponent,
    MapsComponent,
    AccordionComponent,
    AccordionContentDirective,
    AccordionItem,
    AccordionTitleDirective,
    AccordionHeader,
    FaqComponent,
    SideNavComponent,
    SideNavContentComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpLinkModule,
    HttpClientModule,
    DynamicModule.withComponents([
      ...listOfComponent
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAgn6ubj5a_oS5YucyBdrD9xGlYsppOSrM',
    }),
    ScullyLibModule
  ],
  providers: [
    GraphQLModule,
    GoogleMapsAPIWrapper,
    NavigationService,
    { provide: HTTP_INTERCEPTORS, useClass: MainInterceptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
