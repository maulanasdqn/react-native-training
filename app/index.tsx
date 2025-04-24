import { Button } from "@/components/ui/button";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title={"Test Button"} />
    </View>
  );
}
