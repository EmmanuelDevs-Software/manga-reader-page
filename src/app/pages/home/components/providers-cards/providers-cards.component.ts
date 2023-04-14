import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProvidersInterface } from 'src/app/models/providers.model';
import { MangaApiService } from 'src/app/services/manga-api.service';
import { InitialLoadingService } from 'src/app/services/initial-loading.service';

@Component({
  selector: 'app-providers-cards',
  templateUrl: './providers-cards.component.html',
  styleUrls: ['./providers-cards.component.scss']
})
export class ProvidersCardsComponent implements OnInit {


  /**
   * Load Data
   */
  providers$: Observable<ProvidersInterface[]> = of([]);

  /**
 * Loading spinner while load the data
 */
  loading$: Observable<boolean> = of(true);

  /**
   * Class Constructor
   * 
   * @param mangaService 
   */
  constructor(private mangaService: MangaApiService,
    private loadingSvr: InitialLoadingService) { }

  /**
   * Life Cicle
   */
  ngOnInit(): void {
    this.loading$ = this.loadingSvr.initialLoading$;
    this.getProviders();
  }

  /**
   * This code defines a method called getProviders that fetches a list of manga providers using mangaService.getProviders(). It then subscribes to the result and sets the providers$ property to an observable of the fetched providers. The @returns tag indicates that the method does not return anything (void).
   * @returns {void}
   */
  getProviders(): void {
    this.mangaService.getProviders().subscribe(providers => {
      this.providers$ = of(providers);
    });
  }

}


