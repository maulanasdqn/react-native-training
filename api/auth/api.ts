import { api } from "@/libs/axios/api";
import {
  TLoginRequest,
  TLoginResponse,
  TRegisterRequest,
  TRegisterResponse,
} from "./type";

export const postLogin = async (
  params: TLoginRequest
): Promise<TLoginResponse> => {
  const { data } = await api({
    method: "post",
    url: "/auth/login",
    data: params,
  });
  return data;
};

export const postRegister = async (
  params: TRegisterRequest
): Promise<TRegisterResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          message: "User registered successfully",
        },
        version: 1,
      });
    }, 1000);
  });
};
