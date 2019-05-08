import React from 'react';
import { RootReducerState } from "./store/ducks";
import { addCount } from "./store/ducks/countDuck";
import TodoItem from './todoItem';
import { connect } from 'react-redux';

interface TodoItemsStateContainerProps {
    todoItemIds: number[];
    count: number;
}

interface TodoItemsDispatchContainerProps {
    addCount: (increment: number) => void;
}

function mapStateToProps(state: RootReducerState): TodoItemsStateContainerProps {
    return {
        todoItemIds: state.todos.allItems,
        // todoItemIds: state.todos.allItems.filter(item => item % 2),
        count: state.count.count
    }
}

function mapDispatchToProps(dispatch: any): TodoItemsDispatchContainerProps {
    return {
        addCount: (increment: number) => dispatch(addCount(increment))
    }
}

type TodoItemsContainerProps = TodoItemsStateContainerProps & TodoItemsDispatchContainerProps;

const TodoItemsContainer: React.FC<TodoItemsContainerProps> = (props) => {
    return <div>
        <div className="button" onClick={() => props.addCount(1)}>Change Count ({props.count})</div>
        <div>
            {props.todoItemIds.map(id => <TodoItem key={id} id={id} />)}
        </div>
    </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemsContainer);