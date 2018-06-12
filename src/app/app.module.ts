import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import {RecipeModule} from './recipe/recipe.module';
import {CustomMaterialModule} from './custom-material/custom-material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
    AppRoutingModule,
    RecipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
