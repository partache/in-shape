import * as request from './requester';

const baseUrl = 'http://localhost:3030/items';


export const getAll = () => { 
    return request.get(`${baseUrl}`);
}

export const getMyItems = () => { 
    return request.get(`${baseUrl}/my-items`);
}

export const getPopularItems = (category) => { 
    return request.get(`${baseUrl}/popular/${category}`);
}

export const getItemById = (itemId) => { 
    return request.get(`${baseUrl}/${itemId}`);
}

export const editItem = (itemId, itemData) => { 
    return request.put(`${baseUrl}/${itemId}`, itemData);
}

export const deleteItem = (itemId) => { 
    return request.remove(`${baseUrl}/${itemId}`);
}

export const createItem = (itemData) => { 
    return request.post(`${baseUrl}`, itemData);
}

