import React, { useState } from 'react';
import _ from 'lodash';
import { TodoItemProps } from '../components/todoItem/todoItem';
import { TodoItemList } from '../components/todoItemList/todoItemList';

const initialItems = _.range(100).reverse().map<TodoItemProps>(i => ({name: `Item ${i}`}));

export const MutationPage: React.FC = (props) => {
    const [items, setItems] = useState(initialItems);

    return <div>
        <div className="button" onClick={() => setItems(items => [{name: `Item ${items.length}`}, ...items])}>Add item</div>
        <TodoItemList items={items}/>
    </div>;
}
