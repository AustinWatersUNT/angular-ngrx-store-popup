import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers';
import { Increment, Decrement, Set } from '../../actions/counter.actions';
import { getCount } from '../../selectors/counter.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.css' ]
})
export class MainComponent implements OnInit {
  name = 'Angular & NgRx';
  count$: Observable<number>;

  get sessionId() {
    return window.sessionStorage.getItem('tabId');
  }

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.pipe(select(getCount));
  }

  decrement(): void {
    this.store.dispatch(new Decrement());
  }
  increment(): void {
    this.store.dispatch(new Increment());
  }
  ngOnInit(): void {
    this.store.dispatch(new Set({value: 2, storeToStorage: true}));
  }
}
