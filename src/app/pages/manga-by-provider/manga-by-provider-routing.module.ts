import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaByProviderComponent } from './manga-by-provider.component';

const routes: Routes = [
  {
    path: '',
    component: MangaByProviderComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MangaByProviderRoutingModule { }
