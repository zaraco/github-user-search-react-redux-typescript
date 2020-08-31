import React from 'react';
import {UsersState} from "../../models/UsersState";
import {Action} from "../../models/Action";
import {users} from "./users";

const initialState: UsersState = {
    users: [],
    organizations: [],
    search: {
        q: "",
        sort: "",
        order: ""
    },
    submittedSearch: {
        q: "",
        sort: "",
        order: ""
    },
    isLoading: {
        search: false
    },
    error: {
        search: ""
    },
    showMore: false
};

test('show more', () => {
    const action: Action<string, any> = {
        type: "SHOW_MORE",
        payload: true
    };
    const result = users(initialState, action)
    expect(result.showMore).toEqual(true);
});

test('no action', () => {
    const action: Action<string, any> = {
        type: "",
        payload: null
    };
    const result = users(initialState, action)
    expect(result).toEqual(initialState);
});
