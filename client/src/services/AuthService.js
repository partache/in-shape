const baseUrl = 'http://localhost:3030';

export const login = () => {
return fetch(`${baseUrl}/users/login`);
}