import { Action } from '@ngrx/store';

import { ShoppingItem } from '../models/shopping-item.model';

export const ADD_ITEM = '[SHOPPING] Add Item';

export class AddItemAction implements Action {
	readonly type: string = ADD_ITEM;

	constructor(public payload: ShoppingItem) { }
}

export type Actions = AddItemAction;