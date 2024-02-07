import {useEffect, useState} from 'react';
import bluebird from 'bluebird';

export type errorType = {
  type: 'error';
  code: string;
  message: string;
};

export class ValidationError extends Error {
  type?: string;
  message: string;
  code: string;
  constructor(error: errorType) {
    super();
    this.type = error.type ?? 'error';
    this.code = error.code;
    this.message = error.message ?? '';
  }
}

export type ValidatorFunction<TParam = any> = (param: TParam) => Promise<null>;

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
      .mapSeries(validators, fn => {
        return fn(param);
      })
      .then(() => setError(null))
      .catch((err: errorType) => {
        setError(prev => err);
      });
  }, [param]);

  return error;
}
