import * as useAuthContext  from '../hooks/useAuthContext'
const serverAPI = 'https://server-game-play-hub.onrender.com';

async function Req(method, url, data) {
    const { user } = useAuthContext();
    const accessToken = user?.accessToken;
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

    // TODO: check how to store data in local storage
    if (accessToken) {
        options.headers = { ...options.headers, 'X-Authorization': JSON.stringify(accessToken) }
    }

    const res = await fetch(`${serverAPI}${url}`, options);

    const result = await res.json();

    return result;
}

export const requester = {
    get: Req.bind(null, 'GET'),
    post: Req.bind(null, 'POST'),
    put: Req.bind(null, 'PUT'),
    delete: Req.bind(null, 'DELETE'),
}