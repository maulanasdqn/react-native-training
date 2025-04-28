import { z } from "zod";
import { loginSchema, registerSchema } from "./schema";
import { TResponseDetail, TResponseMessage } from "@/commons/types/response";
import { TUserItem } from "../users/type";

export type TLoginRequest = z.infer<typeof loginSchema>;

export type TRegisterRequest = z.infer<typeof registerSchema>;

export type TTokenItem = {
  access_token: string;
  refresh_token: string;
};

export type TLoginItem = {
  token: TTokenItem;
  user: TUserItem;
};

export type TLoginResponse = TResponseDetail<TLoginItem>;

export type TRegisterResponse = TResponseDetail<TResponseMessage>;
