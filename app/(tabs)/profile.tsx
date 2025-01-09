import { Text } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { useUser } from "@clerk/clerk-expo";
import {
  ExternalLink,
  SquareArrowUpRight,
  SquarePen,
} from "lucide-react-native";
import { Image, TouchableOpacity, useColorScheme, View } from "react-native";

export default function Profile() {
  const currentUser = useUser();
  const user = currentUser?.user;
  const colorScheme = useColorScheme();
  const color = Colors[colorScheme ?? "light"].tint;

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      <View style={{ marginBottom: 10 }}>
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

      {/* Button */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: 18,
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#a3a3a3",
            paddingVertical: 10,
            borderRadius: 10,
            paddingHorizontal: 30,
            width: "50%",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Text>Edit Profile</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#a3a3a3",
            paddingVertical: 10,
            borderRadius: 10,
            paddingHorizontal: 30,
            width: "50%",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Text>Share Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
