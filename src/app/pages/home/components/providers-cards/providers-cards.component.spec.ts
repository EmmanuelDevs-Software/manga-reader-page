import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { ProvidersCardsComponent } from './providers-cards.component';
import { MangaApiService } from 'src/app/services/manga-api.service';
import { InitialLoadingService } from 'src/app/services/initial-loading.service';
import { ProvidersInterface } from 'src/app/models/providers.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProvidersCardsComponent', () => {
  let component: ProvidersCardsComponent;
  let fixture: ComponentFixture<ProvidersCardsComponent>;
  let mangaServiceSpy: MangaApiService
  let loadingSvrSpy: InitialLoadingService;
  const providersMock: ProvidersInterface[] = [
    {
      slug: "string",
      name: "string",
      baseURL: "string"
    },
    {
      slug: "string1",
      name: "string2",
      baseURL: "string3"
    }
  ]

  beforeEach(() => {
    mangaServiceSpy = jasmine.createSpyObj('MangaApiService', ['getProviders']);
    loadingSvrSpy = jasmine.createSpyObj('InitialLoadingService', ['initialLoading$']);

    TestBed.configureTestingModule({
      declarations: [ProvidersCardsComponent],
      imports: [HttpClientTestingModule],
      providers: [
        MangaApiService,
        InitialLoadingService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidersCardsComponent);
    component = fixture.componentInstance;
    mangaServiceSpy = TestBed.inject(MangaApiService)
    loadingSvrSpy = TestBed.inject(InitialLoadingService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });




  it('should set providers$ to the result of getProviders()', () => {
    const mockGetProvider = spyOn(mangaServiceSpy, 'getProviders').and.callFake(() => of(providersMock));
    const providers = providersMock
    component.getProviders();
    expect(mockGetProvider).toHaveBeenCalled();
    component.providers$.subscribe(response => expect(response.length).toBe(providers.length));
  });
});
