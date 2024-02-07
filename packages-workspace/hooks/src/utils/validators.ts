import { ValidationError } from "../hooks";

/**
 * get error function for response in validation
 **/
export const getError = (message: string, code: string) => {
  const error: ValidationError = new ValidationError({
    type: "error",
    message: message,
    code: code,
  });

  return error;
};
/**
 * validate the value if has a special character
 **/
export const hasSpecialCharacter =
  () =>
  async (chars?: string): Promise<null> => {
    const pattern = /^[\w&.-]+$/;
    const CODE = "MAX_STR";

    if (!chars) {
      return null;
    }
    const error = getError("Must have special character!", CODE);

    if (pattern.test(chars)) {
      throw error;
    }

    return null;
  };
/**
 * validate the value for max length of characters
 **/
export const maxChar =
  (max = 8) =>
  async (chars?: string): Promise<null> => {
    const CODE = "MAX_CHAR";
    if (!chars) {
      return null;
    }
    const error = getError(`The maximum characters is ${max}`, CODE);

    if (chars?.length > max) {
      throw error;
    }

    return null;
  };
/**
 * validate the value if defined
 **/
export const isRequired =
  (required?: boolean) =>
  async (field?: any): Promise<null> => {
    const CODE = "REQUIRED";
    if (!required) {
      return null;
    }

    const error = getError("This field cannot be left blank.", CODE);

    if (typeof field === "number" && isNaN(field)) {
      throw error;
    }

    if (typeof field === "undefined" || field === null) {
      throw error;
    }

    if (typeof field === "string" && field === "") {
      throw error;
    }

    if (typeof field === "object" && !Object.entries(field).length) {
      throw error;
    }

    if (Array.isArray(field) && field.length === 0) {
      throw error;
    }

    return null;
  };
