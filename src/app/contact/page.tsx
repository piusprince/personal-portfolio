import ContactPageClient from "@/components/contact/contact-page-client";
import { getProfile } from "../_actions/getProfile";

export default async function ContactPage() {
  const profile = await getProfile();

  return (
    <ContactPageClient
      email={profile?.email || "piusprince@example.com"}
      location={profile?.location || "Takoradi, Ghana"}
      socials={
        profile?.socials?.map((item) => ({
          platform: item.platform,
          url: item.url,
        })) || []
      }
    />
  );
}
