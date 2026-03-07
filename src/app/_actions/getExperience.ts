"use server";
import { client } from "@/lib/sanity";
import { sanitizeTextValue } from "@/lib/text";
import { groq } from "next-sanity";
import { Experience } from "@/types/sanity";

export async function getExperience(): Promise<Experience[]> {
  const query = groq`
    *[_type == "experience"] | order(order asc) {
      _id,
      company,
      role,
      startDate,
      endDate,
      isCurrent,
      location,
      description,
      highlights,
      stack,
      order
    }
  `;

  const data = await client.fetch<Experience[]>(query);
  return sanitizeTextValue(data);
}
