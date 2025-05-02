import { QueryProvider } from "@/components/provider/query-provider";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <QueryProvider>
          <Stack />
        </QueryProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
