import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { of } from 'rxjs/internal/observable/of';
import { ChaptersComponent } from './chapters.component';
import { MangaApiService } from '../../services/manga-api.service';
import { ReadMangaModalComponent } from './components/read-manga-modal/read-manga-modal.component';
import { InitialLoadingService } from '../../services/initial-loading.service';
import { mockChapter } from 'src/app/services/testing-mocks';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ChaptersComponent', () => {
  let component: ChaptersComponent;
  let fixture: ComponentFixture<ChaptersComponent>;
  let mangaServiceSpy: MangaApiService
  let loadingSpy: InitialLoadingService
  let locationSpy: jasmine.SpyObj<Location>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;


  const mockMangaInfo = [
    { id: 1, title: 'Chapter 1' },
    { id: 2, title: 'Chapter 2' },
  ];

  beforeEach(() => {
    mangaServiceSpy = jasmine.createSpyObj('MangaApiService', ['getChapters']);
    locationSpy = jasmine.createSpyObj('Location', ['back']);
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    loadingSpy = jasmine.createSpyObj('InitialLoadingService', ['initialLoading$']);

    TestBed.configureTestingModule({
      declarations: [ChaptersComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: Location, useValue: locationSpy },
        { provide: MatDialog, useValue: dialogSpy },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ChaptersComponent);
    component = fixture.componentInstance;
    mangaServiceSpy = TestBed.inject(MangaApiService);
    loadingSpy = TestBed.inject(InitialLoadingService);

    component.state = { provider: 'mockProvider', webtoons: 'mockWebtoons' };
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set loading to true on init', () => {
    loadingSpy.initialLoading$ = of(true);
    fixture.detectChanges();

    expect(component.loading$).toBeTruthy();
  });

  it('should fetch manga chapters on init', () => {
    const spySrv = spyOn(mangaServiceSpy, 'getChapters').and.callFake(() => of(mockChapter));
    fixture.detectChanges();
    component.ngOnInit()
    expect(spySrv).toHaveBeenCalledWith(1, 1000, 'mockProvider', 'mockWebtoons');

    component.mangaInfo$.subscribe(response => expect(response.length).toEqual(mockMangaInfo.length));
  });

  it('should navigate back on back()', () => {
    component.back();

    expect(locationSpy.back).toHaveBeenCalled();
  });

  it('should open read manga modal on openDialog()', () => {
    const enterAnimationDuration = '1s';
    const exitAnimationDuration = '1s';
    const pages = ['page1', 'page2'];

    component.openDialog(enterAnimationDuration, exitAnimationDuration, pages);

    expect(dialogSpy.open).toHaveBeenCalledWith(ReadMangaModalComponent, {
      width: '50%',
      height: '98%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { pages },
    });
  });
});
