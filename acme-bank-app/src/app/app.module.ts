import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountService } from './service/account.service';


@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
