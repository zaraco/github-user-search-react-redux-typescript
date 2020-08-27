export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const API_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "X-Requested-With": "XMLHttpRequest"
};

export const API_ENDPOINTS = {
    users: `${API_BASE_URL}/users`,
    organizations: `${API_BASE_URL}/organizations`
};
