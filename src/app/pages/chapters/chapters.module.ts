import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersRoutingModule } from './chapters-routing.module';
import { ChaptersComponent } from './chapters.component';
import { ReadMangaModalComponent } from './components/read-manga-modal/read-manga-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  declarations: [
    ChaptersComponent
    , ReadMangaModalComponent],
  imports: [
    CommonModule,
    ChaptersRoutingModule,
    MatDialogModule,
    MatPaginatorModule,
    ComponentsModule
  ]
})
export class ChaptersModule { }
