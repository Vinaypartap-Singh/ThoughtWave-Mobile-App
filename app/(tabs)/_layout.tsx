import { Tabs, useRouter } from "expo-router";
import React from "react";
import { Platform, TouchableOpacity, useColorScheme } from "react-native";
import {
  Bell,
  House,
  Image,
  LogOut,
  Search,
  SearchCode,
  Telescope,
  User,
} from "lucide-react-native";
import Colors from "@/constants/Colors";
import { useClerk } from "@clerk/clerk-expo";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.replace("/(auth)");
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
            backgroundColor: "transparent",
          },
          default: {},
        }),
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].background,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <House size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color }) => <Bell size={22} color={color} />,
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => <SearchCode size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Your Profile",
          tabBarIcon: ({ color }) => <User size={22} color={color} />,
          headerRight: () => (
            <TouchableOpacity onPress={handleSignOut}>
              <LogOut
                size={22}
                color={
                  colorScheme === "dark"
                    ? Colors.light.primary
                    : Colors.dark.primary
                }
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tabs>
  );
}
