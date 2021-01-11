import { userNameRegex, userEmailRegex } from '../../helpers';

export const nameFieldValidations = (name) => {
    return userNameRegex.test(name)
}

export const emailFieldValidations = (email) => {
    return userEmailRegex.test(email)
}