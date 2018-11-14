import axios from 'axios';

export function setTokenHeader(token){
    const instance = axios.create({
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    if(token){
        // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return instance;
    } else {
        // delete axios.defaults.headers.common["Authorization"];
    }
}

export function apiCall(method, path, data){
    return new Promise((resolve, reject) => {
        return axios[method.toLowerCase()](path, data)
        .then(res => {
            return resolve(res.data);
        }).catch(err => {
            return reject(err.response.data.error);
        });
    });
}