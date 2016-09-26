import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from './shared'

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
    'Zucchini with Chickpea and Mushroom Stuffing',
    'A great vegetable dish that can be used as a centerpiece or as a side. Can be lovely when served with tomato based sauce and a green vegetable, or I have even had them with traditional roasted vegetables at Christmas.',
    'http://images.media-allrecipes.com/userphotos/720x405/242574.jpg',
    [
      new Ingredient('tomato', 3),
      new Ingredient('chickpeas', 1)
    ]
    ),
    new Recipe(
    'Three-Bean Chili With Spring Pesto',
    'Three types of beans—chickpeas, cannellini, and kidney—ensures this chili is filling and full of protein.',
    'http://cdn-image.realsimple.com/sites/default/files/styles/rs_photo_gallery_vert/public/image/images/photo-gallery/1402/3-bean-pesto_gal.jpg?itok=-8vXtYNc',
    []
    ),
    new Recipe(
    'Asian Hot Pot',
    'Thinly sliced mushrooms lend an earthy flavor and richness to this brothy noodle soup.',
    'http://cdn-image.realsimple.com/sites/default/files/styles/rs_photo_gallery_vert/public/image/images/photo-gallery/1402/asian-hotpot_gal.jpg?itok=VrhPYzHN',
    []
    ),
    new Recipe(
    'Smashed White Bean and Avocado Club',
    'Add this hearty vegetable-based sandwich to your no-cook dinner rotation.',
    'http://cdn-image.realsimple.com/sites/default/files/styles/rs_photo_gallery_vert/public/image/images/food-recipes/recipe-collections/0608/avocado-sprout-sandwiches-ictcrop_gal.jpg?itok=QO9ciO27',
    []
    ),
    new Recipe(
    'Swiss Chard With Chickpeas and Couscous',
    'Toasted pine nuts go a long way in providing flavor and texture to this sweet and savory dish. ',
    'http://cdn-image.realsimple.com/sites/default/files/styles/rs_photo_gallery_vert/public/image/images/photo-gallery/1402/chard-chickpea_gal.jpg?itok=OW50FXHn',
    []
    ),
    new Recipe(
    'Linguine With Caper and Green Olive Sauce',
    'Spanish olives and capers give this pasta an assertive, briny bite.',
    'http://cdn-image.realsimple.com/sites/default/files/styles/rs_photo_gallery_horz/public/image/images/photo-gallery/1402/linguine-olive_gal.jpg?itok=vKT81Wqo',
    []
    )
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
      return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe)
  {
      this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
