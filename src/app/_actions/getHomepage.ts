"use server";
import { client } from "@/lib/sanity";
import { sanitizeTextValue } from "@/lib/text";
import { groq } from "next-sanity";
import { Homepage, Profile } from "@/types/sanity";

export async function getHomepage(): Promise<{
  home: Homepage | null;
  contact: { email?: string; socialLinks: { platform: string; url: string }[] };
}> {
  const query = groq`
    {
      "home": *[_type == "homepage"] | order(_updatedAt desc) [0] {
        title,
        heroSection {
          heading,
          subheading
        },
        'featuredProjects': featuredProjects[]-> {
          _id,
          name,
          title,
          "slug": slug.current,
          "coverImage": coverImage.asset->url,
          summary,
          stack,
          isFeatured,
          layoutSize,
          accentColor
        }
      },
      "profile": *[_type == "profile"][0] {
        email,
        socials
      }
    }
  `;

  const result = await client.fetch<{
    home: Homepage | null;
    profile: Profile | null;
  }>(query, {}, { next: { revalidate: 0 } });
  const cleanResult = sanitizeTextValue(result);

  return {
    home: cleanResult.home,
    contact: {
      email: cleanResult.profile?.email,
      socialLinks:
        cleanResult.profile?.socials?.map((s) => ({
          platform: s.platform,
          url: s.url,
        })) || [],
    },
  };
}

//* You can use this approach to query as well */
//   'featuredProjects': *[_type == "project"]{
//     title,
//     slug,
//     description,
//     coverImage,
//   }
