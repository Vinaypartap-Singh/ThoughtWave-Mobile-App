import { useEffect } from "react";
import { syncUser } from "@/actions/user.action";
import { Text } from "@/components/Themed";
import { useUser } from "@clerk/clerk-expo";
import { SafeAreaView } from "react-native";

export default function HomeScreen() {
  const { user } = useUser();

  useEffect(() => {
    const fetchUser = async () => {
      if (user) {
        const dbUser = await syncUser(user); // Pass the user object here
      }
    };

    fetchUser();
  }, [user]); // Run when the user changes

  return (
    <SafeAreaView>
      <Text style={{ color: "white" }}>Home View</Text>
    </SafeAreaView>
  );
}
