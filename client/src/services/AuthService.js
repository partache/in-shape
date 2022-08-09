import * as request  from './requester';
// import { setUserData, clearUserData } from './util';

const baseUrl = 'http://localhost:3030';

export const login = (data) => {
    const result = request.post(`${baseUrl}/users/login`, data);
    // const userData = {
    //     email: result.email,
    //     id: result._id,
    //     token:  result.accessToken
    // };

    // setUserData(userData);
    return result;
}

export const register = (data) => {
    const result = request.post(`${baseUrl}/users/register`, data);
    // const userData = {
    //     email: result.email,
    //     id: result._id,
    //     token:  result.accessToken
    // };

    // setUserData(userData);
    return result;
}

export const logout = () => {
    const response = request.get(`${baseUrl}/users/logout`);
    return response;
    // localStorage.clear();
}