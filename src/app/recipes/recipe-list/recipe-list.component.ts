import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeItemComponent } from './recipe-item.component';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  @Output() recipeSelected = new EventEmitter<Recipe>();


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelected(recipe: Recipe) {
    console.log("selected: " + recipe.name);
    this.recipeSelected.emit(recipe);
  }

}
