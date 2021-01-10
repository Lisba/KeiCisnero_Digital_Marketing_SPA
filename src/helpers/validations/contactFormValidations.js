import { userNameRegex, userEmailRegex } from '../globalConstants';

export const nameFieldValidations = (name) => {
    return userNameRegex.test(name)
}

export const emailFieldValidations = (email) => {
    return userEmailRegex.test(email)
}