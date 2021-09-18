

export function routesCases(slug: any, pageSlug: any): any {
  switch (slug) {
    //Information Page Content Type
    case 'about':
    case 'privacy':
    case 'contact':
    case 'cookies':
      // return savePath(InformationComponent, pageSlug);
      break
    //General Content Page
    case 'cover':
    case 'why-choose-home-emergency-assist':
    case 'compare-our-packages':
      // return savePath(GeneralComponent, pageSlug);
      break;
    //Frequently asked questions Content Type
    case 'faq/':
    case 'faq':
      // return savePath(FaqComponent, pageSlug);
      break;
    //LandingPage Content Type
    case 'heatable/':
    case 'privacy/':
    case 'contact/':
    case '404/':
    case 'heatable':
    case 'privacy':
    case 'contact':
    case '404':
      // return savePath(LandingComponentComponent, pageSlug);
      break;
    //Blog Content Type
    case 'blog/':
    case 'blog':
      // return savePath(BlogComponentComponent, pageSlug);
      break;
    default:
      // return savePath(GeneralComponent, pageSlug);
      break;
  }
}

export function savePath (component: any, slug: any) {
  return {
    path: slug,
    component: component
  }
}
