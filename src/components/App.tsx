import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {SignUp} from "./siginUp/SignUp";

const App = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={() => <div>Main Page</div>}/>
                <Route path="/signUp" exact component={() => <SignUp/>}/>
                <Route component={() => <h1 style={{textAlign: 'center'}}>404 not found</h1>}/>
            </Switch>
        </Router>
    )
}

export default App;