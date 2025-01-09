import { Text } from "@/components/Themed";
import { useClerk, useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { Button, Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  const { signOut } = useClerk();
  const router = useRouter();
  const currentUser = useUser();
  const user = currentUser?.user;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ marginBottom: 20 }}>
        <Image
          source={{ uri: user?.imageUrl }}
          width={90}
          height={90}
          style={{ borderRadius: 45, borderWidth: 2, borderColor: "#ddd" }}
        />
        <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 10 }}>
          {user?.fullName}
        </Text>
        <Text style={{ fontSize: 16 }}>@developervsandhu</Text>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 16, lineHeight: 22, color: "#777" }}>
          I am deeply passionate about creating innovative solutions and
          continuously exploring new technologies. Every day, I strive to learn
          something new and enhance my skills. While I excel in development, I
          am also focused on strengthening my problem-solving abilities and
          logic-building skills.
        </Text>
      </View>

      {/* Followers, Following, Post Count */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>0</Text>
          <Text style={{ color: "#777" }}>Followers</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>0</Text>
          <Text style={{ color: "#777" }}>Following</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>0</Text>
          <Text style={{ color: "#777" }}>Posts</Text>
        </View>
      </View>
    </View>
  );
}
