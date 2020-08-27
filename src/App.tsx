import React, {useEffect} from 'react';
import './App.css';
import {Switch, Route} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import useUsers from "./hooks/useUsers";
import useOrganizations from "./hooks/useOrganizations";

function App() {
    const {users, getUsers} = useUsers();
    const {organizations, getOrganizations} = useOrganizations();

    useEffect(() => {
        getUsers()
        getOrganizations()

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
