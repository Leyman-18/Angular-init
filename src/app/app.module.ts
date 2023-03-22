import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/layout/content/content_components/home/home.component';
import { NewyorkComponent } from './components/layout/content/content_components/newyork/newyork.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AsideComponent } from './components/layout/aside/aside.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewyorkComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    AsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
