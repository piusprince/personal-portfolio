"use server";
import { client } from "@/lib/sanity";
import { groq } from "next-sanity";

export async function getHomepage() {
  const query = groq`
    *[_type == "homepage"]{
      title,
      heroSection {
        heading,
        subheading,
        contact {
          email,
          socialLinks
        }
      },
      'featuredProjects': *[_type == "project" && isFeatured == true] {
        _id,
        name,
        title,
        slug,
        coverImage,
        summary,
        stack,
        projectLink,
        description,
        isFeatured,
      }
    }[0]
    `;

  const result = await client.fetch(query);

  return result;
}

//* You can use this approach to query as well */
//   'featuredProjects': *[_type == "project"]{
//     title,
//     slug,
//     description,
//     coverImage,
//   }
