import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes';
import { ShoppingListComponent } from './shopping-list';
import { RecipeService } from './recipes/recipe.service';


@Component({
  selector: 'rb-root',
  templateUrl: 'app.component.html',
  providers: [RecipeService]
})
export class AppComponent {
}
