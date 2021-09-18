import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import { HttpHeaders } from '@angular/common/http';
import {HttpLink} from "apollo-angular-link-http";
import {ApolloClientOptions} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";

const uri = 'https://gapi.storyblok.com/v1/api'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  // const basic = setContext((operation: any, context: any) => ({
  // }));

  return {
    link: httpLink.create({
      uri,
      headers: new HttpHeaders({
        token: 'GDg7Sb0Kiguato7hfLg9rAtt',
        version: 'draft'
      })
    }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
