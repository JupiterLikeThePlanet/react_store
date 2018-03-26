import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const ExpenseDashboardPage = () => (
    <div>
        <p>Dashboard</p>
    </div>
);

const AddExpensePage = () => (
    <div>
        <p>Add Page</p>
    </div>
);

const EditExpensePage = () => (
    <div>
        <p>Edit Page</p>
    </div>
);

const HelpPage = () => (
    <div>
        <p>HELP Page</p>
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
        </div>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('app'));


// <Route path="/" component={ExpenseDashboardPage} />
//     <Route path="/create" component={AddExpensePage} />
//     <Route path="/edit" component={EditExpensePage} />
//     <Route path="/help" component={HelpPage} />