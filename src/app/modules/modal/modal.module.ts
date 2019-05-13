import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';


@NgModule({
  declarations: [
    ModalComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ThirdComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ModalComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ThirdComponentComponent
  ],
  providers:[ModalService]
})
export class Modal { }
