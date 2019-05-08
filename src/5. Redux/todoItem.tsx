import React, { useEffect, useRef } from 'react';
import { TodoItemInfo, todoItemInfoSelector } from './store/ducks/todoDuck';
import { RootReducerState } from './store/ducks';
import { connect } from 'react-redux';

interface TodoItemStateOwnProps {
    id: number;
    onClick?: () => void;
}

interface TodoItemStateProps extends TodoItemInfo {

}

type TodoItemProps = TodoItemStateOwnProps & TodoItemStateProps;

function mapStateToProps(state: RootReducerState, ownProps: TodoItemStateOwnProps): TodoItemStateProps {
    // console.log("Todo item map state to props called", ownProps.id);
    return todoItemInfoSelector(state, ownProps.id);
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
    const isFirstRender = useRef(true);
    useEffect(() => {
        if (!isFirstRender.current) {
            console.log("Todo item updated", props.name);
        } else {
            isFirstRender.current = false;
        }
    })

    return <div className="button" onClick={props.onClick}>
        {props.name}
    </div>;
}

export default connect(mapStateToProps)(TodoItem);