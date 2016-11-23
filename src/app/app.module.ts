import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';

import { DropdownDirective } from './dropdown.directive';

import { ShoppingListService } from './shopping-list/shopping-list.service';

import { routing } from "./app.routing";
import { HttpModule } from '@angular/http';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';


import { RecipeService } from "./recipes/recipe.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    HomeComponent
  ],
  imports: [
	  FormsModule,
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    ShoppingListModule,
    routing
  ],
  providers: [ShoppingListService,  RecipeService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
