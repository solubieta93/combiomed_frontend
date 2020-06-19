const required = value => !!value || 'Required'

const charactersLength = (min, max) => {
  return (v) => {
    if (!!min && !!v && v.length < min) return `Min ${min} characters`
    if (!!max && !!v && v.length > max) return `Max ${max} characters`
    return true
  }
}
const emailValid = (v) => /.+@.+/.test(v) || 'Email must be valid'

const validPassword = (v) =>
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d][a-zA-Z0-9!@#$%^&*]{7,50}$/.test(v) || 'Password required almost one special character'

const alphaNumeric = (v) =>
  /^[a-zA-Z0-9]+$/.test(v) || 'Only Alphanumeric characters are allowed'

const alpha = (v) =>
  /^[A-Za-z][A-Za-z ]*$/.test(v) || 'Only letters are allowed'

const numeric = (v) => /^[0-9]+$/.test(v) || 'Only digits are allowed'

const isPhoneNumber = (v) =>
  /^\+[0-9]+$/.test(v) || 'Only digits are allowed'

const isInValues = (values) => {
  const res = (v) => !!values.find(x => x === v) || 'Not is a valid option'
  return res
}

const notMatch = (match) => {
  return (value) => value === match || 'Not match'
}

const isGmail = (email) =>
  /^.+@gmail\.com$/.test(email) || 'Only gmail are allowed'

const inputSize = (size) => {
  return (value) => {
    if (!value || !value.length || value.some(x => x.size < (1000000 * size))) {
      return true
    }
    return `El tamaño del archivo debe ser menor de ${size} MB!`
  }
}

export {
  required,
  charactersLength,
  emailValid,
  alphaNumeric,
  alpha,
  numeric,
  isInValues,
  notMatch,
  isGmail,
  isPhoneNumber,
  inputSize,
  validPassword,
}

export default {
  required,
  charactersLength,
  emailValid,
  alphaNumeric,
  alpha,
  numeric,
  isInValues,
  notMatch,
  isGmail,
  isPhoneNumber,
  inputSize,
  validPassword,
}
