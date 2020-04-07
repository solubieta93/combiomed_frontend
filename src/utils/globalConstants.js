export const apiURI = process.env.NODE_ENV === 'production' ? 'https://apinest.anandaspa.us' : 'http://localhost:8000'
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
