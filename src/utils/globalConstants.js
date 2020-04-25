export const apiURI = process.env.NODE_ENV === 'production' ? 'https://api-combiomed.herokuapp.com' : 'http://127.0.0.1:8000'
export const apiGqlEndpoint = apiURI + 'graphql'
export const api = {
    uri: apiURI,
    endpoints: {
        graphgl: apiURI + 'graphql',
        auth: {
            google: apiURI + 'auth/google',
            protected: apiURI + 'auth/protected',
        },
    },
}
export const apiKeyFileStack = 'AvM4GawwuTFeUBzWR3yX9z'
