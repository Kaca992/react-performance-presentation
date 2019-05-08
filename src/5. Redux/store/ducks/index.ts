import { combineReducers } from "redux";
import { todoReducer, TodoDuckState } from "./todoDuck";

const rootReducer = combineReducers({
    todos: todoReducer
});

export interface RootReducerState {
    todos: TodoDuckState;
}

export default rootReducer;