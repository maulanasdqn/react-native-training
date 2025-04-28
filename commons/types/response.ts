import { AxiosError } from "axios";

export type TResponseList<T> = {
  data: T[];
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
  version: number;
};

export type TResponseDetail<T> = {
  data: T;
  version: number;
};

export type TResponseMessage = {
  message: string;
};

export type TResponseError = AxiosError<TResponseMessage>;
