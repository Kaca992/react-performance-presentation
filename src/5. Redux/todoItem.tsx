import React from 'react';
import { TodoItemInfo, todoItemInfoSelector } from './store/ducks/todoDuck';
import { RootReducerState } from './store/ducks';

interface TodoItemStateOwnProps {
    id: number;
}

interface TodoItemStateProps extends TodoItemInfo {

}

function mapStateToProps(state: RootReducerState, ownProps: TodoItemStateOwnProps): TodoItemStateProps {
    return todoItemInfoSelector(state, ownProps.id);
}

export const TodoItem: React.FC<TodoItemProps> = (props) => {
    return <div className="button">
        {}
    </div>;
}