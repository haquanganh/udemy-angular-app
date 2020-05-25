import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.modal';
import { Ingredient } from '../shared/ingredients.modal';
@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://previews.123rf.com/images/foodandmore/foodandmore1502/foodandmore150200151/36578074-close-up-gourmet-tasty-crumbled-schnitzel-and-crispy-fries-with-lemon-tomato-and-lettuce-.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Bit Fat Burger',
      'What else you need to say?',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/5/5/0/FNM_060115-Fatbuger-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1431449537270.jpeg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  getRecipe(index: number): Recipe {
    return this.recipes.slice()[index];
  }
}
