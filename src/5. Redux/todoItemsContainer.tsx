import { RootReducerState } from "./store/ducks";

interface TodoItemsContainerProps {
    todoItemIds: number[];
}

function mapStateToProps(state: RootReducerState): TodoItemsContainerProps {
    return {
        todoItemIds: state.todos.allItems
    }
}

export const TodoItemsContainer: React.FC<TodoItemsContainerProps> = (props) => {
    
}