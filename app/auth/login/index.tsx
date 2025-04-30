import { View } from "react-native";
import { InputText } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLogin } from "@/hooks/login/use-login";
import { Stack } from "expo-router";

export default function LoginScreen() {
  const { form, handler } = useLogin();

  return (
    <>
      <Stack.Screen options={{ title: "Login" }} />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <View style={{ width: "100%", maxWidth: 400, gap: 8 }}>
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
          <Button
            disabled={!form.formState.isValid}
            title="Login"
            onPress={handler.onSubmit}
          />
        </View>
      </View>
    </>
  );
}
