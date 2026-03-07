"use server";
import { client } from "@/lib/sanity";
import { sanitizeTextValue } from "@/lib/text";
import { groq } from "next-sanity";
import { Project } from "@/types/sanity";

export async function getProjects(): Promise<Project[]> {
  const query = groq`
    *[_type == "project"] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
      summary,
      stack,
      projectLinks,
      isFeatured,
      layoutSize,
      accentColor
    }
  `;
  const data = await client.fetch<Project[]>(
    query,
    {},
    { next: { revalidate: 0 } },
  );
  return sanitizeTextValue(data);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const query = groq`
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
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
        "url": asset->url,
        alt
      }
    }
  `;
  const data = await client.fetch<Project | null>(
    query,
    { slug },
    { next: { revalidate: 0 } },
  );
  return sanitizeTextValue(data);
}
