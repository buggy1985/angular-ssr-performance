import { InjectionToken, NgModule } from '@angular/core';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { PERFORMANCE_API } from './app.module';

@NgModule({
  imports: [
    AppModule
  ],
  providers: [
    { provide: PERFORMANCE_API, useValue: window.performance },
  ],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {}
