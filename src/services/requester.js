
const serverAPI = 'https://server-game-play-hub.onrender.com';

async function req(method, url, data) {
    const options = {};

    if (method !== 'GET') {
        options.method = method;
        if (data) {
            options.headers = {
                'Content-Type': 'application/json',
            }
            options.body = JSON.stringify(data);
        }
    }

    const res = await fetch(`${serverAPI}${url}`, options);

    const result = await res.json();

    return result;
}

export const requester = {
    get: req.bind(null, 'GET'),
    post: req.bind(null, 'POST'),
    put: req.bind(null, 'PUT'),
    delete: req.bind(null, 'DELETE'),
}