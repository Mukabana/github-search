import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { UserFormComponent } from './components/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
