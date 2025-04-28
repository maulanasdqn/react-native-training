import { z } from "zod";
import { loginSchema } from "./schema";
import { TResponseDetail } from "@/commons/types/response";
import { TUserItem } from "../users/type";

export type TLoginRequest = z.infer<typeof loginSchema>;

export type TTokenItem = {
  access_token: string;
  refresh_token: string;
};

export type TLoginItem = {
  token: TTokenItem;
  user: TUserItem;
};

export type TLoginResponse = TResponseDetail<TLoginItem>;
