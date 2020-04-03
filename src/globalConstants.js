export const apiURI = 'http://localhost:3000/'
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
