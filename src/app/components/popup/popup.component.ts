import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';
import { getCount } from 'src/app/selectors/counter.selector';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: [ './popup.component.css' ]
})
export class PopupComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.count$ = this.store.pipe(select(getCount));
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {

      const sessionId = params.get('sessionId');
      window.sessionStorage.setItem('tabId', sessionId);

    });
  }
}
