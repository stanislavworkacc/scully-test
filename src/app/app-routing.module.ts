import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./content-type/main-content-type/main/main.component";
import {NotFoundComponent} from "./components/static-components/not-found/not-found.component";

const routes: Routes = [
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)},
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'faq',
    component: MainComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
