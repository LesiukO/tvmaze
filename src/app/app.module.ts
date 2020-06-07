import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { MainPageComponent } from './main-page/main-page.component';

import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

import { ShowComponent } from './show/show.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ShowNotFoundComponent } from './show-not-found/show-not-found.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    MainPageComponent,
    ShowComponent,
    LoginComponent,
    FooterComponent,
    SearchPageComponent,
    ShowNotFoundComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
