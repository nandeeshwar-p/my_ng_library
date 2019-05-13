import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import {AccordionGroupComponent} from './accordion-group.component';

@NgModule({
  declarations: [AccordionComponent,AccordionGroupComponent],
  imports: [
    CommonModule
  ],
  exports:[
    AccordionComponent,
    AccordionGroupComponent
  ]
})
export class Accordion { }
