import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Set } from '../actions/counter.actions';


@Injectable()
export class CounterEffects {

    @Effect()
    onStorageChange$ = fromEvent<StorageEvent>(window, 'storage').pipe(
        filter(evt => evt.key === `${window.sessionStorage.getItem('tabId')}_counter`),
        filter(evt => evt.newValue !== null),
        map (evt => JSON.parse(evt.newValue)),
        filter(({storeToStorage}) => storeToStorage),
        map(({count}) => new Set(count)),
    );
}

