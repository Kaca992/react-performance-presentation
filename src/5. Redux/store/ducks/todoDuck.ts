import { RootReducerState } from ".";

export interface TodoItemInfo {
    id: number;
    name: string;
}

//#region Reducer

export interface TodoDuckState {
    itemsById: {[id: number]: TodoItemInfo};
    allItems: number[];
} 

const initialState: TodoDuckState = {
    itemsById: {},
    allItems: []
}

export const todoReducer = (state: TodoDuckState = initialState, action = {type: "", payload: null}) => {
    return state;
}

export const todoItemInfoSelector = (state: RootReducerState, itemId: number) => state.todos.itemsById[itemId];

//#endregion
