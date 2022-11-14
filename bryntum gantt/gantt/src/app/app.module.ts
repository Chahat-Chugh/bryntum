import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BryntumGanttModule } from '@bryntum/gantt-angular'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BryntumGanttModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
