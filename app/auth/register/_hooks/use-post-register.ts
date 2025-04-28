import { postRegister } from "@/api/auth/api";
import { TRegisterRequest, TRegisterResponse } from "@/api/auth/type";

import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const usePostRegister = (): UseMutationResult<
  TRegisterResponse,
  AxiosError<unknown>,
  TRegisterRequest,
  unknown
> => {
  return useMutation({
    mutationKey: ["post-register"],
    mutationFn: async (payload) => await postRegister(payload),
  });
};
