import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe'
import { RecipeItemComponent } from './recipe-item.component'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipe = new Recipe(
    'Zucchini with Chickpea and Mushroom Stuffing',
    'A great vegetable dish that can be used as a centerpiece or as a side. Can be lovely when served with tomato based sauce and a green vegetable, or I have even had them with traditional roasted vegetables at Christmas.',
    'http://images.media-allrecipes.com/userphotos/720x405/242574.jpg'
    );

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    console.log("selected: " + recipe.name);
    this.recipeSelected.emit(recipe);
  }

}
