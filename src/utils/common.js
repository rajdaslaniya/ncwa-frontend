export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const digitRegExp = /^\d{10}$/;

export const getCharacterValidationError = (str) => {
  return `Your password must have at least 1 ${str} character`;
};
