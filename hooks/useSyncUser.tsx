import { supabase } from "@/utils/supabase";
import { useUser } from "@clerk/clerk-expo";
import { useEffect } from "react";

export function useSyncUser() {
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    const syncUser = async () => {
      if (!isSignedIn || !user) return;

      const {
        id: userId,
        firstName,
        lastName,
        username,
        emailAddresses,
        imageUrl,
      } = user;

      try {
        const { data: existingUser, error: findError } = await supabase
          .from("User")
          .select("*")
          .eq("clerkId", userId)
          .single();

        if (findError && findError.code !== "PGRST116") {
          console.error("Error fetching user:", findError);
          return;
        }

        if (existingUser) return existingUser;

        const { data: dbUser, error: createError } = await supabase
          .from("User")
          .insert({
            clerk_id: userId,
            name: `${firstName || ""} ${lastName || ""}`.trim(),
            username:
              username ??
              emailAddresses[0]?.emailAddress.split("@")[0] ??
              `user-${userId}`,
            email: emailAddresses[0]?.emailAddress ?? "",
            image: imageUrl ?? "",
          })
          .single();

        if (createError) {
          console.error("Error creating user:", createError);
          return;
        }

        return dbUser;
      } catch (error) {
        console.error("Unexpected error syncing user:", error);
      }
    };

    syncUser();
  }, [isSignedIn, user]); // Trigger when user or sign-in status changes
}
