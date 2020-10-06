import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/mainPage" exact component={() => <div>Main Page</div>} />
                <Route component={() => <h1 style={{ textAlign: 'center' }}>404 not found</h1>} />
            </Switch>
        </Router>
    )
}

export default App;