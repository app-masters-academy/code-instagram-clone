import axios from "axios";

// console.log('process.env', process.env);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);

const configs = {
    development: {
        baseUrl: "https://treinamento-nodejs-app-masters.herokuapp.com",
        keyGoogleMaps: "dev-u8uf9asasdqqq3y9879q86r9q",
        sentryKey: "dev-8au8d9a87f9a8f987fy9ry8hijoj14j1ihejo23i"
    },
    production: {
        baseUrl: "https://treinamento-nodejs-app-masters.herokuapp.com",
        keyGoogleMaps: "oop123oi1p23oi1p23o",
        sentryKey: "opi1p23oi1p3oi12po3i1p2o3"
    }
};

const config = configs[process.env.NODE_ENV];

console.log('config', config);

const axiosConfig = { baseURL: config.baseUrl };

console.log("axiosConfig", axiosConfig);

if (localStorage.getItem("auth-token")) {
    axiosConfig.headers = {
        Authorization: localStorage.getItem("auth-token"),
    };
}

export const API = axios.create(axiosConfig);

export const setAuthToken = (token) => {
    const authToken = `Bearer ${token}`;
    // Salvar o token no localStorage
    localStorage.setItem("auth-token", authToken);
    // Definir o padrão do axios (header)
    API.defaults.headers.common["Authorization"] = authToken;
};
