import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { PopupWindowButtonComponent } from './shared/popup-window-button.component';
import { MainComponent } from './components/main/main.component';
import { PopupComponent } from './components/popup/popup.component';
import { RouterModule, Routes } from '@angular/router';
import { CounterEffects } from './effects/counter.effects';
import { EffectsModule } from '@ngrx/effects';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'popup/:sessionId', component: PopupComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([ CounterEffects ]),
    RouterModule.forRoot(appRoutes),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    PopupWindowButtonComponent,
    MainComponent,
    PopupComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
