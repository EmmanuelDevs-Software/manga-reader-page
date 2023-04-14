import { of } from 'rxjs/internal/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentDev } from '../env/environment';
import { Observable } from 'rxjs/internal/Observable';
import { ProvidersInterface } from '../models/providers.model';
import { MangaByProviderInterface } from '../models/manga-by-provider.model';
import { ChaptersInterface } from '../models/chapters.model';
import { catchError, finalize } from 'rxjs/operators';
import { InitialLoadingService } from './initial-loading.service';

@Injectable({
  providedIn: 'root'
})
export class MangaApiService {



  /**
   * API Key
   */
  rapidAPIKey = environmentDev.xRapidAPIKey;
  /**
   * Host
   */
  host = environmentDev.xRapidAPIHost;

  /**
   * Manga
   */
  endpoint = "https://manga-scrapper.p.rapidapi.com"


  /**
   * Class Constructor
   * 
   * @param http 
   */
  constructor(private http: HttpClient, private loadingService: InitialLoadingService) { }

  /**
  Returns HTTP headers for making requests to a specific API host using a RapidAPI key.
  @function getMyData
  @returns {HttpHeaders} - The HTTP headers with the required RapidAPI key and host information. 
  */
  getMyData(): HttpHeaders {
    const headers = new HttpHeaders()
      .set('x-rapidapi-key', this.rapidAPIKey)
      .set('x-rapidapi-host', this.host)
    return headers
  }

  /**
  * Fetches the list of providers from the server.
  * @returns An Observable that emits an array of ProvidersInterface objects.
  */
  getProviders(): Observable<ProvidersInterface[]> {
    this.loadingService.initialLoading.next(true);
    const url = `${this.endpoint}/providers`
    return this.http.get<ProvidersInterface[]>(url, { headers: this.getMyData() }).pipe(
      catchError((err: any) => {
        this.loadingService.initialLoading.next(false);
        return of(err)
      }),
      finalize(() => this.loadingService.initialLoading.next(false))
    );
  }

  /**
 * Returns an Observable containing MangaByProviderInterface[] objects for a given page, limit, and provider.
 *
 * @param {number} page - The page number to retrieve.
 * @param {number} limit - The maximum number of MangaByProviderInterface[] objects to return per page.
 * @param {string} provider - The provider to retrieve MangaByProviderInterface[] objects for.
 * @returns {Observable<MangaByProviderInterface[]>} - An Observable containing MangaByProviderInterface[] objects.
 */
  getMangasWithPagination(page: number, limit: number, provider: string): Observable<MangaByProviderInterface[]> {
    this.loadingService.initialLoading.next(true);
    const url = `${this.endpoint}/webtoons`
    return this.http.get<MangaByProviderInterface[]>(url, { headers: this.getMyData(), params: { page, limit, provider } }).pipe(
      catchError((err: any) => {
        this.loadingService.initialLoading.next(false);
        return of(err)
      }),
      finalize(() => this.loadingService.initialLoading.next(false))
    );
  }
  /**
   * Returns an observable of chapters for a given webtoon from a specified provider.
   * @param page - The page number to retrieve.
   * @param limit - The maximum number of chapters to retrieve.
   * @param provider - The provider to retrieve chapters from.
   * @param webtoon - The webtoon to retrieve chapters for.
   * @returns An Observable of ChaptersInterface[].
   */
  getChapters(page: number, limit: number, provider: string, webtoon: string): Observable<ChaptersInterface[]> {
    this.loadingService.initialLoading.next(true);
    const url = `${this.endpoint}/chapters`
    return this.http.get<ChaptersInterface[]>(url, { headers: this.getMyData(), params: { page, limit, provider, webtoon } }).pipe(
      catchError((err: any) => {
        this.loadingService.initialLoading.next(false);
        return of(err)
      }),
      finalize(() => this.loadingService.initialLoading.next(false))
    );
  }

  /**
 * Returns an Observable that emits an array of chapters for the webtoon with the given slug and provider.
 * @param slug The slug of the webtoon.
 * @param provider The provider of the webtoon.
 * @returns An Observable that emits an array of chapters for the webtoon with the given slug and provider.
 */
/*   getWebtoonByItsSlug(slug: string, provider: string): Observable<any> {
    this.loadingService.initialLoading.next(true);
    const url = `${this.endpoint}/webtoons/${slug}`
    return this.http.get<any>(url, { headers: this.getMyData(), params: { slug, provider } }).pipe(
      catchError((err: any) => {
        this.loadingService.initialLoading.next(false);
        return of(err)
      }),
      finalize(() => this.loadingService.initialLoading.next(false))
    );
  }
 */
  /**
 * Retrieves chapters by their slug and webtoon name.
 * @param webtoon - The name of the webtoon to retrieve chapters for.
 * @param provider - The provider of the webtoon.
 * @param slug - The slug of the chapter to retrieve.
 * @returns An observable that emits an array of chapter objects.
 */
/*   getByChapterByItsSlug(webtoon: string, provider: string, slug: string): Observable<any[]> {
    this.loadingService.initialLoading.next(true);
    const url = `${this.endpoint}/webtoons/chapters/${slug}`
    return this.http.get<any[]>(url, { headers: this.getMyData(), params: { provider, webtoon } }).pipe(
      catchError((err: any) => {
        this.loadingService.initialLoading.next(false);
        return of(err)
      }),
      finalize(() => this.loadingService.initialLoading.next(false))
    );
  } */


}
