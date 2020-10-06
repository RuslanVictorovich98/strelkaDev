import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Headers/Header"

const App = () => {
    return (
        <Router>
            <Switch>
                <Header />
                <Route path="/mainPage" exact component={() => <div>Main Page</div>} />
                <Route component={() => <h1 style={{ textAlign: 'center' }}>404 not found</h1>} />
            </Switch>
        </Router>
    )
}

export default App;