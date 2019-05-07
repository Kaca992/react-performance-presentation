import React, { useState } from 'react';
import _ from 'lodash';

const initialItems = _.range(100).reverse().map<TodoItemProps>(i => ({name: `Item ${i}`}));

export const MutationPage: React.FC = (props) => {
    const [items, setItems] = useState(initialItems);

    return <div>
        <div onClick={() => setItems(items => [{name: `Item ${items.length}`}, ...items])}>Add item</div>
        <TodoItemList items={items}/>
    </div>;
}

interface TodoItemListProps {
    items: TodoItemProps[];
}

const defaultOption: any[] = [];
export class TodoItemList extends React.PureComponent<TodoItemListProps> {
    public render() {
        return <div>
            {this.props.items.map(item => <TodoItem key={item.name} name={item.name} options={item.options || defaultOption} />)}
        </div>;
    }
}

interface TodoItemProps {
    name: string;
    options?: any[];
}

export class TodoItem extends React.PureComponent<TodoItemProps> {
    public componentDidUpdate() {
        console.log("Todo item updated", this.props.name);
    }

    public render() {
        return <div>
            {this.props.name}
        </div>;
    }
}