export const apiURI = process.env.NODE_ENV === 'production' ? 'https://api-combiomed.herokuapp.com' : 'https://api-combiomed.herokuapp.com'
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
