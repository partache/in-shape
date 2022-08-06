const baseUrl = 'http://localhost:3030';

export const getPopularItems = (category) => {
return fetch(`${baseUrl}/items/popular/${category}`);
}