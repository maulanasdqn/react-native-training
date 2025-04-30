import { loginSchema } from "@/api/auth/schema";
import { TLoginRequest } from "@/api/auth/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { usePostLogin } from "./use-post-login";
import { useAuthStore } from "@/stores/auth-store";
import { Alert } from "react-native";

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
  const { signIn } = useAuthStore();

  const onSubmit = form.handleSubmit((data) => {
    console.log("Submit", data);
    mutate(data, {
      onSuccess: (res) => {
        console.log("succes ketrigge", res);
        signIn(res.accessToken, res);
        Alert.alert("Success", res.firstName);
      },
      onError: (err) => {
        console.log("Error ke trigger", err.message);
        Alert.alert("Error", err.message);
      },
    });
  });

  const handler = {
    onSubmit,
  };

  return {
    form,
    handler,
  };
};
