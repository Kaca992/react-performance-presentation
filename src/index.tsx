import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import { MutationPage } from './2. Props Mutation';
import { ChildrenPage } from './3. Children and pure component';
import GhostPropsContainer from './4. Ghost props';
import configureStore from './5. Redux/store';
import _ from 'lodash';
import { TodoItemInfo } from './5. Redux/store/ducks/todoDuck';
import TodoItemsContainer from './5. Redux/todoItemsContainer';

function generateTodoItems(): {[id: number]: TodoItemInfo} {
    return _.range(100).reduce<{[id: number]: TodoItemInfo}>((todosById, id) => {
        todosById[id] = {id: id, name: `TODO: ${id}`};
        return todosById;
    },{});
}

const store = configureStore({todos: {
    itemsById: generateTodoItems(),
    allItems: _.range(100)
}});

ReactDOM.render(
<Provider store={store}>
    <Router>
        <Switch>
            <Route path={"/example-2"} component={MutationPage} />
            <Route path={"/example-3"} component={ChildrenPage} />
            <Route path={"/example-4"} component={GhostPropsContainer} />
            <Route path={"/example-5"} component={TodoItemsContainer} />
            <Route path="/">
                <Redirect to="/example-2" />
            </Route>
        </Switch>
    </Router>
</Provider>, document.getElementById('root'));
