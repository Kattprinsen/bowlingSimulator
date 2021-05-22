import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BowlersComponent } from './bowlers/bowlers.component';
import { BowlerDetailComponent } from './bowlers/bowler-detail/bowler-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    BowlersComponent,
    BowlerDetailComponent,
    MessagesComponent
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
