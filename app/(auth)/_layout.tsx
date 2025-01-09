import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack, usePathname } from "expo-router";

export default function AuthLayout() {
  const pathName = usePathname();
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    if (pathName !== "/(tabs)") {
      return <Redirect href="/(tabs)" />;
    }
  }

  // if (!isSignedIn) {
  //   return <Redirect href="/(auth)" />;
  // }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
