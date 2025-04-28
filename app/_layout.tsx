import { QueryProvider } from "@/components/provider/query-provider";
import { Stack } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <QueryProvider>
          <Stack />
        </QueryProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
