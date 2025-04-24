import { Stack } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Stack />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
