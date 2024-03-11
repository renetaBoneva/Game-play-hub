const serverAPI = 'https://server-game-play-hub.onrender.com';

async function Req(method, url, data) {
    // TODO: Check REDUX
    let user = localStorage.getItem('%user%');
    user = user ? JSON.parse(user) : user;
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

    if (accessToken) {
        options.headers = { ...options.headers, 'X-Authorization': JSON.stringify(accessToken) }
    }

    const res = await fetch(`${serverAPI}${url}`, options);

    // TODO: Error handling
    const result = await res.json();

    return result;
}

export const requester = {
    get: Req.bind(null, 'GET'),
    post: Req.bind(null, 'POST'),
    put: Req.bind(null, 'PUT'),
    delete: Req.bind(null, 'DELETE'),
}