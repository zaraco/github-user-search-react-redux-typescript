import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from "react-bootstrap";
import {Switch, Route} from "react-router";
import {HashRouter as Router} from "react-router-dom";
import Search from "./components/Search";

function App() {

    return (
        <>
            <Container>
                <Router>
                    <Switch>
                        <Route path='/' exact component={Search}/>
                    </Switch>
                </Router>
            </Container>
        </>
    );
}

export default App;
