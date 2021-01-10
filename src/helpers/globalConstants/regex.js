export const userAliasRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
export const userNameRegex = /^[a-zA-Z][a-zA-Z ]{1,30}$/;
export const userEmailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const isEmailRegex = /@/;
export const lowerCaseRegex = /(?=.*[a-z])/;
export const upperCaseRegex = /(?=.*[A-Z])/;
export const numericCaseRegex = /(?=.*[0-9])/;