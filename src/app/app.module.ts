import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { createSelector, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AddItemAction } from './store/actions/shopping.actions';
import * as shopping from './store/reducers/shopping.reducer';

export interface State {
  shopping: shopping.State
}

const reducers = {
  shopping: shopping.reducer
};

export const getShoppingState = (state: State) => state.shopping;

export const getShoppingItems = createSelector(
  getShoppingState,
  shopping.getShoppingItems
);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot<State, AddItemAction>(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
