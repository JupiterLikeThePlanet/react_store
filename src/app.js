import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from "./routes/AppRouter"


// const ExpenseDashboardPage = () => (
//     <div>
//         <p>Dashboard</p>
//     </div>
// );

// const AddExpensePage = () => (
//     <div>
//         <p>Add Page</p>
//     </div>
// );

// const EditExpensePage = () => (
//     <div>
//         <p>Edit Page</p>
//     </div>
// );

// const HelpPage = () => (
//     <div>
//         <p>HELP Page</p>
//     </div>
// );

// const NotFoundPage = () => (
//
//     <div>
//         404 - <Link to="/"> Return to Home Page </Link>
//     </div>
//
// )



// const Header = () => (
//
//     <header>
//         <h1>Expensify</h1>
//
//         <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink> |
//         <NavLink to="/create" activeClassName="is-active">Add</NavLink> |
//         <NavLink to="/edit" activeClassName="is-active">Edit</NavLink> |
//         <NavLink to="/help" activeClassName="is-active">Help</NavLink>
//
//     </header>
// )

// const routes = (
//     <BrowserRouter>
//         <div>
//             <Header />
//             <Switch>
//                 <Route path="/" component={ExpenseDashboardPage} exact={true}/>
//                 <Route path="/create" component={AddExpensePage} />
//                 <Route path="/edit" component={EditExpensePage} />
//                 <Route path="/help" component={HelpPage} />
//                 <Route component={NotFoundPage} />
//             </Switch>
//         </div>
//     </BrowserRouter>
// );


ReactDOM.render(<AppRouter/>, document.getElementById('app'));


// <Route path="/" component={ExpenseDashboardPage} />
//     <Route path="/create" component={AddExpensePage} />
//     <Route path="/edit" component={EditExpensePage} />
//     <Route path="/help" component={HelpPage} />