const prefix = 'query/'

export const buildPrefix = (x) => {
  switch (x) {
    case 0: return `${prefix}state/`
    case 1: return `${prefix}actions/`
    case 2: return `${prefix}getters/`
    case 3: return `${prefix}mutations/`
    default: return `${prefix}`
  }
}

export default {
  state: {
    QUERY: `${buildPrefix(0)}QUERY`,
  },
  getters: {
    GET_QUERY: `${buildPrefix(2)}GET_QUERY`,
  },
  actions: {
    SET_QUERY: `${buildPrefix(1)}SET_QUERY`,
  },
  mutations: {
    SET_QUERY: `${buildPrefix(3)}SET_QUERY`,
  },
}
