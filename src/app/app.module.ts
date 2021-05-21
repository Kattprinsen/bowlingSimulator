import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BowlersComponent } from './bowlers/bowlers.component';
import { BowlerDetailComponent } from './bowlers/bowler-detail/bowler-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BowlersComponent,
    BowlerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
