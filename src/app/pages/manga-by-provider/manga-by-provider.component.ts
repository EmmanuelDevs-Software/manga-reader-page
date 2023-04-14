import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MangaByProviderInterface } from 'src/app/models/manga-by-provider.model';
import { MangaApiService } from 'src/app/services/manga-api.service';
import { Location } from '@angular/common';
import { of } from 'rxjs/internal/observable/of';
import { InitialLoadingService } from 'src/app/services/initial-loading.service';

@Component({
  selector: 'app-manga-by-provider',
  templateUrl: './manga-by-provider.component.html',
  styleUrls: ['./manga-by-provider.component.scss']
})
export class MangaByProviderComponent implements OnInit {



  /**
   * Manga provider
   */
  provider: string = '';

  /**
  * Load Data
  */
  mangas$: Observable<MangaByProviderInterface[]> = of([]);

  /**
 * Loading spinner while load the data
 */
  loading$: Observable<boolean> = of(true);


  /**
   * Class Constructor
   * 
   * @param mangaService 
   * @param route 
   * @param router
   */
  constructor(private mangaService: MangaApiService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private loading: InitialLoadingService
  ) { }

  /**
   * Initializes the component and subscribes to the route params to get the ID parameter.
   * If the parameter is present, retrieves manga data from the specified provider.
   */
  ngOnInit(): void {
    this.loading$ = this.loading.initialLoading$;
    this.route.params.subscribe((params: any) => {
      console.log(params);
      if (params.id) {
        this.provider = params.id;
        this.getMangaByWebToons(this.provider);
      }
    })

  }

  /**
 * TODO: this is from the page providers-id 
 * Retrieves a list of manga from the manga service API.
 * 
 * @returns {void} An observable containing manga objects.
 */
  getMangaByWebToons(provider: string): void {
    this.mangas$ = this.mangaService.getMangasWithPagination(1, 100, provider)
  }


  /**
   * Navigate to the specified chapter for the given webtoon using Angular router.
   * @param webtoons The name of the webtoon to navigate to.
   * @param mangaImage The image associated with the manga.
   * @returns void
   */
  navigateTOChapter(webtoons: string, mangaImage: string): void {
    this.router.navigateByUrl(`/chapters/${webtoons}`, {
      state: {
        provider: this.provider, webtoons: webtoons, mangaImage
      }
    });
  }

  /**
   * Navigates to the previous page in the browser history.
   * 
   * @returns {void}
   */
  back(): void {
    this.location.back()
  }

}
