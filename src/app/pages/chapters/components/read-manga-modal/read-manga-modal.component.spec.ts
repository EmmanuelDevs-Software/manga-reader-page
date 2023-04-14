import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';
import { InitialLoadingService } from 'src/app/services/initial-loading.service';
import { ReadMangaModalComponent } from './read-manga-modal.component';

describe('ReadMangaModalComponent', () => {
  let component: ReadMangaModalComponent;
  let fixture: ComponentFixture<ReadMangaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadMangaModalComponent],
      imports: [MatDialogModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: { pages: ['page1', 'page2', 'page3'] }
        },
        {
          provide: InitialLoadingService,
          useValue: {
            initialLoading$: of(false)
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMangaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set loading$ to false', () => {
    component.ngOnInit();
    component.loading$.subscribe((loading) => {
      expect(loading).toEqual(false);
    })

  });

  it('should set chapters to the pages data', () => {
    component.ngOnInit();
    expect(component.chapters).toEqual(['page1', 'page2', 'page3']);
  });
});
