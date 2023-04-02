import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { ForpracticeComponent } from './forpractice/forpractice.component';
import { OddevenComponent } from './oddeven/oddeven.component';
import { SwitchpracComponent } from './switchprac/switchprac.component';

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    ForpracticeComponent,
    OddevenComponent,
    SwitchpracComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
