import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

import { DropdownDirective } from './dropdown.directive';

import { ShoppingListService } from './shopping-list/shopping-list.service';

import { routing } from "./app.routing";
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start.component';
import { HttpModule } from '@angular/http';
import { ShoppingListModule } from './shopping-list/shopping-list.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropdownDirective,
    RecipeEditComponent,
    RecipeStartComponent
  ],
  imports: [
	  FormsModule,
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [ShoppingListService, ShoppingListModule],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
