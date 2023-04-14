import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChaptersInterface } from 'src/app/models/chapters.model';
import { MangaApiService } from 'src/app/services/manga-api.service';
import { Location } from '@angular/common'
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ReadMangaModalComponent } from './components/read-manga-modal/read-manga-modal.component';
import { InitialLoadingService } from 'src/app/services/initial-loading.service';
@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss']
})
export class ChaptersComponent implements OnInit {

  /**
   * @ngdoc property
   */
  state: any;

  /**
  * Load Data
  */
  mangaInfo$: Observable<ChaptersInterface[]> = of([]);


  /**
 * Loading spinner while load the data
 */
  loading$: Observable<boolean> = of(true);

  /**
    * Class Constructor
    * 
    * @param mangaService 
    * @param route 
    */
  constructor(private mangaService: MangaApiService,
    private router: Router,
    private location: Location,
    public dialog: MatDialog,
    private loading: InitialLoadingService
  ) {
    this.state = this.router.getCurrentNavigation()?.extras.state;
  }


  ngOnInit(): void {
    this.loading$ = this.loading.initialLoading$;
    this.getChapters(this.state.provider, this.state.webtoons)
  }

  /**
   * Fetches chapters from the manga service for a specific provider and webtoon.
   * 
   * @param provider - The name of the provider to fetch from.
   * @param webtoons - The name of the webtoon to fetch chapters for.
   * @returns A subscription to the manga service's chapters.
   */
  getChapters(provider: string, webtoons: string) {
    this.mangaService.getChapters(1, 1000, provider, webtoons).subscribe(chapters => {
      this.mangaInfo$ = of(chapters);
    });
  }


  back(): void {
    this.location.back()
  }


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, pages: string[]): void {
    this.dialog.open(ReadMangaModalComponent, {
      width: '50%',
      height: '98%',

      enterAnimationDuration,
      exitAnimationDuration,
      data: { pages: pages }
    });
  }

}
