// import { getUserData } from './util';

export const request = async (method, url, data) => {
    try {
        let options = {
            method,
            headers: {}
        };

        if (data !== undefined) {
            options = {
                ...options,
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            };
        }


        // const userData = getUserData();
        // if (authData) {
        //     options.headers['x-authorization'] = userData.token;
        // }
        const userData = localStorage.getItem('userData');
        if (userData) {
            options.headers['x-authorization'] = userData.accessToken;
        }

        options.headers['x-authorization'] = userData.accessToken;

        const response = await fetch(url, options);

        if (response.status === '204') {
            return response;
        }

        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error);
    }
}

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const remove = request.bind({}, 'DELETE');

