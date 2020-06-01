import { Store } from '@ngrx/store';
import { LoggingService } from './../logging.service';
import { Ingredient } from './../shared/ingredients.modal';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromShoppingList from './store/shopping-list.reducer';
import * as shoppingListAction from './store/shopping-list.actions';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  // private subscription: Subscription;
  constructor(
    private loggingService: LoggingService,
    private store: Store<fromShoppingList.AppState>
  ) {}

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.slService.getIngredients();
    // this.subscription = this.slService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
    this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit');
  }
  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
  onEditItem(index: number) {
    // this.slService.startedEditing.next(index);
    this.store.dispatch(new shoppingListAction.StartEdit(index));
  }
}
