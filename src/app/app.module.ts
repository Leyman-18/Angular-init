import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/layout/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { Ejemplo1Component } from './components/layout/content/content_components/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './components/layout/content/content_components/ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './components/layout/content/content_components/ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './components/layout/content/content_components/ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from './components/layout/content/content_components/ejemplo5/ejemplo5.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    AsideComponent,
    Ejemplo1Component,
    Ejemplo2Component,
    Ejemplo3Component,
    Ejemplo4Component,
    Ejemplo5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
