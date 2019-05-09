export const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(value => value.length > 0 && (valid = false));
  return valid;
};
