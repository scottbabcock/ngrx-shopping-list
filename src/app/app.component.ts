import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

import * as fromRoot from './app.module';
import { ShoppingItem } from './store/models/shopping-item.model';
import { AddItemAction } from './store/actions/shopping.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  shoppingItems!: Observable<ShoppingItem[]>;
  newShoppingItem: ShoppingItem = { id: '', name: '' }

  constructor(private store: Store<fromRoot.State>) { }

   ngOnInit() {
    this.shoppingItems = this.store.select(fromRoot.getShoppingItems);
   }

   addItem() {
     this.newShoppingItem.id = uuid();

     this.store.dispatch(new AddItemAction(this.newShoppingItem));

     this.newShoppingItem = { id: '', name: '' };
   }
}

