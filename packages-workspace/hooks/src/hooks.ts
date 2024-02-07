import { useEffect, useState } from "react";
import bluebird from "bluebird";

export type errorType = {
  type: "error";
  code: string;
  message: string;
};

/**
 * defined class for Validator extends with error class
 **/
export class ValidationError extends Error {
  type?: string;
  message: string;
  code: string;
  constructor(error: errorType) {
    super();
    this.type = error.type ?? "error";
    this.code = error.code;
    this.message = error.message ?? "";
  }
}

/**
 * dynamic types for validator function
 **/
export type ValidatorFunction<TParam = any> = (param: TParam) => Promise<null>;

/**
 * hook for validator for fields
 **/
export function useValidator<TParam = any | undefined>({
  param,
  validators,
}: {
  param: TParam;
  validators: Array<ValidatorFunction<TParam>>;
}): errorType | null {
  const [error, setError] = useState<errorType | null>(null);

  useEffect(() => {
    bluebird
      .mapSeries(validators, (fn) => {
        return fn(param);
      })
      .then(() => setError(null))
      .catch((err: errorType) => {
        setError(err);
      });
  }, [param]);

  return error;
}
