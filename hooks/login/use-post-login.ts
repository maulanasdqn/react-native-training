import { postLogin } from "@/api/auth/api";
import { TLoginRequest, TLoginResponse } from "@/api/auth/type";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const usePostLogin = (): UseMutationResult<
  TLoginResponse,
  AxiosError<unknown>,
  TLoginRequest,
  unknown
> => {
  return useMutation({
    mutationKey: ["post-login"],
    mutationFn: postLogin,
  });
};
