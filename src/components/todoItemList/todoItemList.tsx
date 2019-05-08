import React from 'react';

interface TodoItemListProps {
    items: TodoItemProps[];
}

export class TodoItemList extends React.PureComponent<TodoItemListProps> {
    public render() {
        return <div>
            {this.props.items.map(item => <TodoItem key={item.name} name={item.name} options={item.options || []} />)}
        </div>;
    }
}

export interface TodoItemProps {
    name: string;
    options?: any[];
}

class TodoItem extends React.PureComponent<TodoItemProps> {
    public componentDidUpdate() {
        console.log("Todo item updated", this.props.name);
    }

    public render() {
        return <div className="todo-item">
            {this.props.name}
        </div>;
    }
}