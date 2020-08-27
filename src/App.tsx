import React, {useEffect} from 'react';
import './App.css';
import {Switch, Route} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import useUsers from "./hooks/useUsers";

function App() {
    const {users, getUsers} = useUsers();

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <>
            {JSON.stringify(users)}
            <Router>
                <Switch>


                </Switch>
            </Router>
        </>
    );
}

export default App;
