import { loginSchema } from "@/api/auth/schema";
import { TLoginRequest } from "@/api/auth/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { usePostLogin } from "./use-post-login";

export const useLogin = () => {
  const form = useForm<TLoginRequest>({
    mode: "all",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { mutate } = usePostLogin();

  const onSubmit = form.handleSubmit((data) => {
    mutate(data);
  });

  const handler = {
    onSubmit,
  };

  return {
    form,
    handler,
  };
};
