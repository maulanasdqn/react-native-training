import { postLogin } from "@/api/auth/api";
import { TLoginRequest, TLoginResponse } from "@/api/auth/type";
import { useAuthStore } from "@/stores/auth-store";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const usePostLogin = (): UseMutationResult<
  TLoginResponse,
  AxiosError<unknown>,
  TLoginRequest,
  unknown
> => {
  const { signIn } = useAuthStore();
  return useMutation({
    mutationKey: ["post-login"],
    mutationFn: async (payload) => await postLogin(payload),
    onSuccess: (res) => {
      signIn(res.data.token, res.data.user);
    },
  });
};
