import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';


import { ShoppingListService } from './shopping-list/shopping-list.service';

import { routing } from "./app.routing";
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { CoreModule } from "./core.module";



import { RecipeService } from "./recipes/recipe.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
	  FormsModule,
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    routing,
    CoreModule
  ],
  providers: [ShoppingListService,  RecipeService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {


}
