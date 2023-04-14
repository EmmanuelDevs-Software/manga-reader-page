import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { MangaApiService } from 'src/app/services/manga-api.service';
import { Location } from '@angular/common';
import { MangaByProviderComponent } from './manga-by-provider.component';
import { InitialLoadingService } from 'src/app/services/initial-loading.service';


describe('MangaByProviderComponent', () => {
  let component: MangaByProviderComponent;
  let fixture: ComponentFixture<MangaByProviderComponent>;
  let mangaServiceSpy: jasmine.SpyObj<MangaApiService>;
  let route: ActivatedRoute;
  let routerSpy: jasmine.SpyObj<Router>;
  let locationSpy: jasmine.SpyObj<Location>;

  beforeEach(async () => {
    const mangaServiceMock = jasmine.createSpyObj('MangaApiService', ['getMangasWithPagination']);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigateByUrl']);
    const locationSpyObj = jasmine.createSpyObj('Location', ['back']);

    await TestBed.configureTestingModule({
      declarations: [MangaByProviderComponent],
      providers: [
        { provide: MangaApiService, useValue: mangaServiceMock },
        { provide: ActivatedRoute, useValue: { params: of({ id: 'test-provider' }) } },
        { provide: Router, useValue: routerSpyObj },
        { provide: Location, useValue: locationSpyObj },
        InitialLoadingService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaByProviderComponent);
    component = fixture.componentInstance;

    mangaServiceSpy = TestBed.inject(MangaApiService) as jasmine.SpyObj<MangaApiService>;
    route = TestBed.inject(ActivatedRoute);
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    locationSpy = TestBed.inject(Location) as jasmine.SpyObj<Location>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the provider when the route param is present', () => {
    expect(component.provider).toBe('test-provider');
  });

  it('should call getMangaByWebToons with the correct provider', () => {
    const provider = 'test-provider';
    component.getMangaByWebToons(provider);
    expect(mangaServiceSpy.getMangasWithPagination).toHaveBeenCalledWith(1, 100, provider);
  });

  it('should navigate to the specified chapter', () => {
    const webtoons = 'test-webtoon';
    const mangaImage = 'test-manga-image';
    component.navigateTOChapter(webtoons, mangaImage);
    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith(`/chapters/${webtoons}`, {
      state: { provider: component.provider, webtoons, mangaImage }
    });
  });

  it('should navigate back', () => {
    component.back();
    expect(locationSpy.back).toHaveBeenCalled();
  });
});
