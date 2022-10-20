/* REACT */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* COMPONENTS */
import Dashboard from './views/dashboard/Dashboard';
import UserDetails from './views/dashboard/components/user_details/UserDetails';

const App = () => {
    return (
        <Router>
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    <Route path="/user/:user_id">
                        <UserDetails />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
