import React from 'react';
import _ from 'lodash';

interface TodoItemListProps {
    items: TodoItemProps[];
}

export class TodoItemList extends React.PureComponent<TodoItemListProps> {
    public render() {
        return <div>
            {this.props.items.map(item => <TodoItem name={item.name} options={item.options || []} />)}
        </div>;
    }
}

interface TodoItemProps {
    name: string;
    options?: any[];
}

export class TodoItem extends React.PureComponent<TodoItemProps> {
    public render() {
        return <div>
            {this.props.name}
        </div>;
    }
}