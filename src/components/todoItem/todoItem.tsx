import React from 'react';

export interface TodoItemProps {
    name: string;
    options?: any[];
}

export class TodoItem extends React.PureComponent<TodoItemProps> {
    public componentDidUpdate() {
        console.log("Todo item updated", this.props.name);
    }

    public render() {
        return <div className="todo-item">
            {this.props.name}
        </div>;
    }
}