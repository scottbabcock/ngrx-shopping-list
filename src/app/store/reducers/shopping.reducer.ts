import { createSelector } from '@ngrx/store';
import * as shopping from '../actions/shopping.actions';
import { ShoppingItem } from '../models/shopping-item.model';

export interface State {
	items: ShoppingItem[];
}

const initialState: State = {
	items: [
		{
			id: '1775935f-36fd-467e-a667-09f95b917f6d',
			name: 'Diet Coke'
		}
	]
};

export function reducer(state = initialState, action: shopping.Actions): State {
	switch (action.type) {
		case shopping.ADD_ITEM:
			const item: ShoppingItem = action.payload;

			return {
				items: [...state.items, item]
			};
		default:
			return state;
	}
}

export const getShoppingItems = (state: State) => {
	return state.items;
};