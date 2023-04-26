import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejemplo1Component } from './components/layout/content/content_components/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './components/layout/content/content_components/ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './components/layout/content/content_components/ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './components/layout/content/content_components/ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from './components/layout/content/content_components/ejemplo5/ejemplo5.component';

const routes: Routes = [
  {
    path:"ejemplo1",
    component:Ejemplo1Component
  },
  {
    path:"ejemplo2",
    component:Ejemplo2Component
  },
  {
    path:"ejemplo3",
    component:Ejemplo3Component
  },
  {
    path:"ejemplo4",
    component:Ejemplo4Component
  },
  {
    path:"ejemplo5",
    component:Ejemplo5Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
