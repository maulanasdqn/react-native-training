import { Button } from "@/components/ui/button/button";
import { Text, View } from "react-native";

export default function Index() {
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
      <Button title={"Test Button"} />
    </View>
  );
}
