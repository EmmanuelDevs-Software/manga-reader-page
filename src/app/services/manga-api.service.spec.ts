
import { TestBed, fakeAsync, flush, inject, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InitialLoadingService } from './initial-loading.service';
import { MangaApiService } from './manga-api.service';
import { mockChapter, mockgetMangasWithPagination, mockgetProviders } from './testing-mocks';
import { catchError, finalize, of } from 'rxjs';
import { ProvidersInterface } from '../models/providers.model';

describe('MangaApiService', () => {
  let service: MangaApiService;
  let httpMock: HttpTestingController;
  let loadingService: InitialLoadingService;
  const mockError = { status: 404, statusText: 'Not Found' } as any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InitialLoadingService, MangaApiService]
    });
    service = TestBed.inject(MangaApiService);
    httpMock = TestBed.inject(HttpTestingController);
    loadingService = TestBed.inject(InitialLoadingService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  describe('getProviders', () => {
    it('should return providers', () => {
      service.getProviders().subscribe(providers => {
        expect(providers).toEqual(mockgetProviders);
      });

      const req = httpMock.expectOne(`${service.endpoint}/providers`);
      expect(req.request.method).toBe('GET');
      req.flush(mockgetProviders);
    });

    it('should handle errors when fetching getProviders', inject([MangaApiService], fakeAsync((service: MangaApiService) => {
      service.getProviders().pipe(
        catchError(() => {
          return of(mockError);
        }),
        finalize(() => { })
      ).subscribe()
      const req = httpMock.expectOne(`${service.endpoint}/providers`);
      tick(200);
      expect(req.request.method).toBe('GET');
      req.error(mockError);
      flush();
    })));

    it('should set initialLoading to true when loading providers', () => {
      spyOn(loadingService.initialLoading, 'next');
      service.getProviders().subscribe(() => {
        expect(loadingService.initialLoading.next).toHaveBeenCalledWith(true);
      });

      const req = httpMock.expectOne(`${service.endpoint}/providers`);
      expect(req.request.method).toBe('GET');
      req.flush([]);
    });


  });


  describe('getMangasWithPagination', () => {
    it('should return manga by provider', () => {
      const mockManga = mockgetMangasWithPagination

      service.getMangasWithPagination(1, 10, 'provider1').subscribe(manga => {
        expect(manga).toEqual(mockManga);
      });

      const req = httpMock.expectOne(`${service.endpoint}/webtoons?page=1&limit=10&provider=provider1`);
      expect(req.request.method).toBe('GET');
      req.flush(mockManga);
    });


    it('should handle errors when fetching getMangasWithPagination', inject([MangaApiService], fakeAsync((service: MangaApiService) => {
      service.getMangasWithPagination(1, 10, 'provider1').pipe(
        catchError(() => {
          return of(mockError);
        }),
        finalize(() => { })
      ).subscribe()
      const req = httpMock.expectOne(`${service.endpoint}/webtoons?page=1&limit=10&provider=provider1`);
      tick(200);
      expect(req.request.method).toBe('GET');
      req.error(mockError);
      flush();
    })));

    it('should set initialLoading to true when loading manga by provider', () => {
      spyOn(loadingService.initialLoading, 'next');
      service.getMangasWithPagination(1, 10, 'provider1').subscribe(() => {
        expect(loadingService.initialLoading.next).toHaveBeenCalledWith(true);
      });

      const req = httpMock.expectOne(`${service.endpoint}/webtoons?page=1&limit=10&provider=provider1`);
      expect(req.request.method).toBe('GET');
      req.flush([]);
    });

    it('should set initialLoading to true when loading providers', () => {
      spyOn(loadingService.initialLoading, 'next');
      service.getProviders().subscribe(() => {
        expect(loadingService.initialLoading.next).toHaveBeenCalledWith(true);
      });

      const req = httpMock.expectOne(`${service.endpoint}/providers`);
      expect(req.request.method).toBe('GET');
      req.flush([]);
    });

  });


  describe('getChapters', () => {
    it('should return an observable of chapter data', () => {
      const mockChapterData = mockChapter
      const page = 1;
      const limit = 10;
      const provider = 'webtoon';
      const webtoon = 'test';

      service.getChapters(page, limit, provider, webtoon).subscribe(chapters => {
        expect(chapters).toEqual(mockChapterData);
      });

      const req = httpMock.expectOne(`${service.endpoint}/chapters?page=${page}&limit=${limit}&provider=${provider}&webtoon=${webtoon}`);
      expect(req.request.method).toEqual('GET');
      req.flush(mockChapterData);
    });

    it('should handle errors when fetching providers', inject([MangaApiService], fakeAsync((service: MangaApiService) => {
      const page = 1;
      const limit = 10;
      const provider = 'webtoon';
      const webtoon = 'test';

      service.getChapters(page, limit, provider, webtoon).pipe(
        catchError(() => {
          return of(mockError);
        }),
        finalize(() => { })
      ).subscribe()
      const req = httpMock.expectOne(`${service.endpoint}/chapters?page=${page}&limit=${limit}&provider=${provider}&webtoon=${webtoon}`);
      tick(200);
      expect(req.request.method).toBe('GET');
      req.error(mockError);
      flush();
    })));

    it('should set initialLoading to true when loading manga by provider', () => {
      spyOn(loadingService.initialLoading, 'next');
      service.getMangasWithPagination(1, 10, 'provider1').subscribe(() => {
        expect(loadingService.initialLoading.next).toHaveBeenCalledWith(true);
      });

      const req = httpMock.expectOne(`${service.endpoint}/webtoons?page=1&limit=10&provider=provider1`);
      expect(req.request.method).toBe('GET');
      req.flush([]);
    });

    it('should set initialLoading to true when loading providers', () => {
      spyOn(loadingService.initialLoading, 'next');
      service.getProviders().subscribe(() => {
        expect(loadingService.initialLoading.next).toHaveBeenCalledWith(true);
      });

      const req = httpMock.expectOne(`${service.endpoint}/providers`);
      expect(req.request.method).toBe('GET');
      req.flush([]);
    });

  });
});
