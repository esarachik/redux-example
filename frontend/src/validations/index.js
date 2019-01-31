const SUCCESS_TEXT = "success";
const ERROR_TEXT = "error";

export const getValidationState = e => {
  const length = e ? e.length : 0;
  if (length === 0) return "error";
  if (length > 0) return "success";
  else return null;
};

export const getValidationDropDown = state => {
  return state ? SUCCESS_TEXT : ERROR_TEXT;
};
