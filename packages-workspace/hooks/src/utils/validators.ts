import { ValidationError } from "../hooks";

/**
 * Returns an error object with the specified message and code.
 * @param message - The error message.
 * @param code - The error code.
 * @returns The error object.
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
 * Validates if the value has a special character.
 * @param chars - The value to be validated.
 * @returns Promise that resolves to null if the value is valid.
 * @throws ValidationError if the value is invalid.
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
 * Validates if the value exceeds the maximum length of characters.
 * @param max - The maximum length of characters.
 * @returns Promise that resolves to null if the value is valid.
 * @throws ValidationError if the value exceeds the maximum length.
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
 * Validates if the value is required.
 * @param required - Whether the value is required or not.
 * @returns Promise that resolves to null if the value is valid.
 * @throws ValidationError if the value is missing or empty.
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
