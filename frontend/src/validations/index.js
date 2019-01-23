export const getValidationState = e => {    
  const length = e ? e.length : 0;
  if (length > 0) return "success";
  else return null;
};
