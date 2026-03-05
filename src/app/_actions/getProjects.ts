import { client } from "@/lib/sanity";
import { groq } from "next-sanity";

export async function getProjects() {
  const query = groq`
    *[_type == "project"] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      coverImage,
      summary,
      stack,
      projectLinks,
      isFeatured,
      layoutSize
    }
  `;
  return client.fetch(query);
}

export async function getProjectBySlug(slug: string) {
  const query = groq`
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      coverImage,
      summary,
      description,
      challenge,
      solution,
      impact,
      role,
      client,
      duration,
      accentColor,
      stack,
      projectLinks,
      gallery[] {
        asset->,
        alt,
        hotspot
      }
    }
  `;
  return client.fetch(query, { slug });
}
