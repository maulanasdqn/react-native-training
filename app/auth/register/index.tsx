import { View } from "react-native";
import { InputText } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRegister } from "./_hooks/use-register";

export default function RegisterScreen() {
  const { form, handler } = useRegister();

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <InputText
        name="name"
        control={form.control}
        label="Name"
        placeholder="Enter your fullname"
      />
      <InputText
        name="username"
        control={form.control}
        label="Username"
        placeholder="Enter your username"
      />
      <InputText
        name="email"
        control={form.control}
        label="Email"
        placeholder="Enter your email"
      />
      <InputText
        name="password"
        control={form.control}
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
      />
      <Button title="Register Now" onPress={handler.onSubmit} />
    </View>
  );
}
