import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'manga-by-provider/:id',
    loadChildren: () => import('./pages/manga-by-provider/manga-by-provider.module').then(m => m.MangaByProviderModule)
  },
  {
    path: 'chapters/:id',
    loadChildren: () => import('./pages/chapters/chapters.module').then(m => m.ChaptersModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
