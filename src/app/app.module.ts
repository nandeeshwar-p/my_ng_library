import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Modal} from './modules/modal/modal.module';
import {ImageSlider} from './modules/image-slider/image-slider.module';
import {Accordion} from './modules/accordion/accordion.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Modal,
    ImageSlider,
    Accordion
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
