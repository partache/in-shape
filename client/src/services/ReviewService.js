import * as request from './requester';

const baseUrl = 'http://localhost:3030/items/';

export const getReviews = (itemId) => {
    return request.get(`${baseUrl}/${itemId}/reviews`);
}
