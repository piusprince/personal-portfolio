import { client } from "@/lib/sanity";
import { defineLive } from "next-sanity";

export const { SanityLive, sanityFetch } = defineLive({
  client: client.withConfig({
    token: process.env.SANITY_API_READ_TOKEN,
  }),
  serverToken: process.env.SANITY_API_READ_TOKEN,
  browserToken: process.env.SANITY_API_READ_TOKEN,
});
