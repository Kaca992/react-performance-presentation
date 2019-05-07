import React from 'react';
import _ from 'lodash';
import { TodoItem, TodoItemProps } from '../todoItem/todoItem';

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