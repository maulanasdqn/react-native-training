import { z } from "zod";
import { loginSchema, registerSchema } from "./schema";
import { TResponseDetail, TResponseMessage } from "@/commons/types/response";

export type TLoginRequest = z.infer<typeof loginSchema>;

export type TRegisterRequest = z.infer<typeof registerSchema>;

export type TTokenItem = {
  access_token: string;
  refresh_token: string;
};

export type TLoginResponse = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: "male" | "female";
  image: string;
  accessToken: string;
  refreshToken: string;
};

export type TRegisterResponse = TResponseDetail<TResponseMessage>;
