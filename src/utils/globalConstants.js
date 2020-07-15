// TODO: COMMENT TO USE IN DEPLOY
export const apiURI = process.env.NODE_ENV === 'production' ? 'https://api-combiomed.herokuapp.com' : 'http://127.0.0.1:8000'
export const baseUrl = process.env.NODE_ENV === 'production' ? 'https://combiomed.herokuapp.com/' : 'http://127.0.0.1:8080/'

// TODO: UNCOMMENT TO USE IN DEPLOY
// export const apiURI = process.env.NODE_ENV === 'production' ? 'https://api-combiomed.biocubafarma.com' : 'http://127.0.0.1:8000'
// export const baseUrl = process.env.NODE_ENV === 'production' ? 'https://combiomed.biocubafarma.com/' : 'https://combiomed.biocubafarma.com/'

export const apiKeyFileStack = 'AvM4GawwuTFeUBzWR3yX9z'
