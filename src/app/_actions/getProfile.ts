"use server";
import { client } from "@/lib/sanity";
import { groq } from "next-sanity";
import { Profile } from "@/types/sanity";

export async function getProfile(): Promise<Profile | null> {
  const query = groq`
    *[_type == "profile"][0] {
      name,
      tagline,
      bio,
      email,
      location,
      socials,
      openToWork,
      resumeUrl,
      "avatarUrl": avatar.asset->url
    }
  `;

  return client.fetch<Profile | null>(query);
}
