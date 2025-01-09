import { supabase } from "@/utils/supabase";
import cuid from "cuid";

export async function syncUser(user: any) {
    try {

        if (!user) return;

        const { id: userId, firstName, lastName, username, emailAddresses, imageUrl } = user;

        const newid = cuid();
        const currentTime = new Date().toISOString();

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
                id: newid,
                clerkId: userId,
                name: `${firstName || ""} ${lastName || ""}`.trim(),
                username: username ?? emailAddresses[0]?.emailAddress.split("@")[0] ?? `user-${userId}`,
                email: emailAddresses[0]?.emailAddress ?? "",
                image: imageUrl ?? "",
                createdAt: currentTime,
                updatedAt: currentTime
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
}
