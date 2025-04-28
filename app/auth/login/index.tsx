import { View } from "react-native";
import { InputText } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLogin } from "./_hooks/use-login";

export default function LoginPage() {
  const { form, handler } = useLogin();

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <InputText
        name="username"
        control={form.control}
        label="Username"
        placeholder="Enter your username"
      />
      <InputText
        name="password"
        control={form.control}
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
      />
      <Button title="Login" onPress={handler.onSubmit} />
    </View>
  );
}
