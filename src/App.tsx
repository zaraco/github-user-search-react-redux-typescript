import React from 'react';
import './App.css';
import {Switch, Route} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import Search from "./components/Search";

function App() {

    return (
        <>
            <Router>
                <Switch>
                    <Route path='/' exact component={Search}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
