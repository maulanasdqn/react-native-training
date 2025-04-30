import { registerSchema } from "@/api/auth/schema";
import { TRegisterRequest } from "@/api/auth/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { usePostRegister } from "./use-post-register";

export const useRegister = () => {
  const form = useForm<TRegisterRequest>({
    mode: "all",
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      username: "",
      password: "",
    },
  });

  const { mutate } = usePostRegister();

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
