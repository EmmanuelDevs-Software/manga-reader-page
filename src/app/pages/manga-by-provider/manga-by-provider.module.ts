import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangaByProviderRoutingModule } from './manga-by-provider-routing.module';
import { MangaByProviderComponent } from './manga-by-provider.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MangaByProviderComponent
  ],
  imports: [
    CommonModule,
    MangaByProviderRoutingModule,
    ComponentsModule,
    RouterModule
  ],
  providers: [

  ]
})
export class MangaByProviderModule { }
