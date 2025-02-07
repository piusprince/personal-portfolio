import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  apiVersion: "2022-03-07",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
  stega: {
    enabled: true,
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
});

const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source);
}
