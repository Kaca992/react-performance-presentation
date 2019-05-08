import { combineReducers } from "redux";
import { todoReducer, TodoDuckState } from "./todoDuck";
import { CountDuckState, countReducer } from "./countDuck";

const rootReducer = combineReducers({
    todos: todoReducer,
    count: countReducer
});

export interface RootReducerState {
    todos: TodoDuckState;
    count: CountDuckState;
}

export default rootReducer;