import {HeaderComponent} from "../../components/static-components/header/header.component";
import {IntroComponent} from "../../components/storyblok-component/intro/intro.component";
import {PriceComponent} from "../../components/storyblok-component/price/price.component";
import {BenefitsComponent} from "../../components/storyblok-component/benefits/benefits.component";
import {MainContentTypeComponent} from "../../content-type/main-content-type/main-content-type/main-content-type.component";
import {MapsComponent} from "../../components/storyblok-component/maps/maps.component";
import {FaqComponent} from "../../components/storyblok-component/faq/faq.component";

const Components: any = {
  'main': MainContentTypeComponent,
  'header': HeaderComponent,
  'intro': IntroComponent,
  'benefits': BenefitsComponent,
  'price': PriceComponent,
  'maps': MapsComponent,
  'faq': FaqComponent
};

export { Components };
