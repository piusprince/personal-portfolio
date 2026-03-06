"use server";
import { client } from "@/lib/sanity";
import { groq } from "next-sanity";
import { Homepage, Profile, SocialLink } from "@/types/sanity";

export async function getHomepage(): Promise<{ home: Homepage | null; contact: { email?: string; socialLinks: { platform: string; url: string }[] } }> {
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

  const result = await client.fetch<{ home: Homepage | null; profile: Profile | null }>(query, {}, { next: { revalidate: 0 } });

  return {
    home: result.home,
    contact: {
      email: result.profile?.email,
      socialLinks: result.profile?.socials?.map((s) => ({
        platform: s.platform,
        url: s.url
      })) || []
    }
  };
}

//* You can use this approach to query as well */
//   'featuredProjects': *[_type == "project"]{
//     title,
//     slug,
//     description,
//     coverImage,
//   }
