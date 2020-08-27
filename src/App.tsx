import React, {useEffect} from 'react';
import './App.css';
import {Switch, Route} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import useUsers from "./hooks/useUsers";

function App() {
    const {users, organizations, getSearch} = useUsers();

    useEffect(() => {
        getSearch({q: "zarac"})

    }, []);

    return (
        <>
            {JSON.stringify(users)}
            {JSON.stringify(organizations)}
            <Router>
                <Switch>


                </Switch>
            </Router>
        </>
    );
}

export default App;
