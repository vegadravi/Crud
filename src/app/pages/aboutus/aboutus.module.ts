import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus.component';
import { RouterModule } from '@angular/router';
import { FooterModule } from 'src/app/common/footer/footer.module';
import { HeaderModule } from 'src/app/common/header/header.module';

const routes = [{path: '', component: AboutusComponent}];

@NgModule({
  declarations: [AboutusComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FooterModule,
    HeaderModule
  ],
  exports: [AboutusComponent]
})
export class AboutusModule { }
