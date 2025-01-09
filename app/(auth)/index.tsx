import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as WebBrowser from "expo-web-browser";
import { useEffect } from "react";
import SocialLoginButton from "@/components/SocialLoginButton";
import { Text } from "@/components/Themed";

export const useWarmUpBrowser = () => {
  useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

const AuthScreen = () => {
  useWarmUpBrowser();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        gap: 20,
        display: "flex",
        justifyContent: "center",
        paddingTop: insets.top + 40,
        paddingBottom: insets.bottom + 40,
      }}
    >
      <View style={{ width: "100%", gap: 5 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Login on Thought Wave
        </Text>
        <Text style={{ fontSize: 16, color: "gray" }}>
          Start your journey with thousands of thinkers and creators around the
          world.
        </Text>
      </View>

      <View style={{ width: "100%", marginTop: 20, gap: 10 }}>
        <SocialLoginButton />
      </View>
    </View>
  );
};

export default AuthScreen;
