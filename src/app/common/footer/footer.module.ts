import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule { }
