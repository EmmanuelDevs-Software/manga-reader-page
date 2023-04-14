import { Observable, of } from 'rxjs';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { InitialLoadingService } from 'src/app/services/initial-loading.service';




@Component({
  selector: 'app-read-manga-modal',
  templateUrl: './read-manga-modal.component.html',
  styleUrls: ['./read-manga-modal.component.css'],

})
export class ReadMangaModalComponent implements OnInit {


  /**
 * Loading spinner while load the data
 */
  loading$: Observable<boolean> = of(true);

  /**
   * Chapter array
   */
  chapters: string[] = [];


  /**
   * Class Constructor
   * 
   * @param dialog 
   * @param loading 
   * @param data 
   */
  constructor(public dialog: MatDialog,
    private loading: InitialLoadingService,
    @Inject(MAT_DIALOG_DATA) public data: { pages: string[] }
  ) { }

  /**
 * Initializes the component after Angular initializes it.
 * Sets the initial loading state and assigns the pages to the chapters property.
 * @returns void
 */
  ngOnInit(): void {
    this.loading$ = this.loading.initialLoading$;
    this.chapters = this.data.pages;
  }



}
