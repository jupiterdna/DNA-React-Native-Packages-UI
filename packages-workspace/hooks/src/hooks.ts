import { useEffect, useState } from "react";
import bluebird from "bluebird";

export type ErrorType = {
  type: "error";
  code: string;
  message: string;
};

/**
 * Class for ValidationError that extends Error class.
 **/
export class ValidationError extends Error {
  type?: string;
  message: string;
  code: string;
  constructor(error: ErrorType) {
    super();
    this.type = error.type ?? "error";
    this.code = error.code;
    this.message = error.message ?? "";
  }
}

/**
 * Dynamic types for the validator function.
 **/
export type ValidatorFunction<TParam = any> = (param: TParam) => Promise<null>;

/**
 * Hook for field validation.
 **/
export function useValidator<TParam = any | undefined>({
  param,
  validators,
}: {
  param: TParam;
  validators: Array<ValidatorFunction<TParam>>;
}): ErrorType | null {
  const [error, setError] = useState<ErrorType | null>(null);

  useEffect(() => {
    bluebird
      .mapSeries(validators, (fn) => {
        return fn(param);
      })
      .then(() => setError(null))
      .catch((err: ErrorType) => {
        setError(err);
      });
  }, [param]);

  return error;
}
