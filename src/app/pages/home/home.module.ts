import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProvidersCardsComponent } from './components/providers-cards/providers-cards.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    HomeComponent,
    ProvidersCardsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    ComponentsModule
  ]
})
export class HomeModule { }
