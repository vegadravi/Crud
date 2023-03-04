import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { FooterModule } from 'src/app/common/footer/footer.module';
import { HeaderModule } from 'src/app/common/header/header.module';
import { FormsModule } from '@angular/forms';

const routes = [{path: '', component: HomeComponent}];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FooterModule,
    HeaderModule,
    FormsModule
  ]
})
export class HomeModule { }
