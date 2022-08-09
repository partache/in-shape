// import { getUserData } from './util';

export const request = async (method, url, data) => {
    try {
        let options = {
            method,
            headers: {}
        };

        // const logoutString= url.split('/')
        // .find(x => x==='logout');

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
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData && userData !== "{}") {
            options.headers['x-authorization'] = userData.accessToken;
        }

        // if(logoutString){
        //     options.headers['x-authorization'] = userData.accessToken;
        // }

        // options.headers['x-authorization'] = userData.accessToken;

        const response = await fetch(url, options);

        if (response.status === 204) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(response);
                },100 );
            });
        } else {
            const result = await response.json();
            return result;
        }

    } catch (error) {
        console.log(error);
    }
}

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const remove = request.bind({}, 'DELETE');

