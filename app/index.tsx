import { Button } from "@/components/ui/button/button";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
        Welcome to React
      </Text>
      <Button onPress={() => router.push("/auth/login")} title="Login" />
    </View>
  );
}
