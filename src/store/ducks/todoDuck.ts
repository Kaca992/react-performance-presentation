interface TodoItem {
    id: number;
    name: string;
    count: number;
}

//#region Reducer

export interface TodoDuckState {
    itemsById: {[id: number]: TodoItem};
    allItems: number[];
} 

const initialState: TodoDuckState = {
    itemsById: {},
    allItems: []
}

export const todoReducer = (state: TodoDuckState = initialState, action = {type: "", payload: null}) => {
    return state;
}

//#endregion

//#region Actions

enum TodoActionTypes {
    INIT = "@TODO/INIT"
}

//#endregion