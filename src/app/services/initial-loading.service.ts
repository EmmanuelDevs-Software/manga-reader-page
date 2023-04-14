import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

/**
 * InitialLoadingService
 */
@Injectable({
  providedIn: 'root'
})
export class InitialLoadingService {
  /**
   * Subject for emitting if request is in process
   */
  initialLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  /**
   * Loading as observable
   */
  initialLoading$: Observable<boolean> = this.initialLoading.asObservable();
}
