import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { InfoSectionComponent } from './info-section/info-section.component';
import { PhoneSectionComponent } from './phone-section/phone-section.component';
import { CharacteristicSectionComponent } from './characteristic-section/characteristic-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    InfoSectionComponent,
    PhoneSectionComponent,
    CharacteristicSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
