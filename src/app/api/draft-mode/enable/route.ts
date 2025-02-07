import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { client } from "@/lib/sanity";

export const { GET } = defineEnableDraftMode({
  client: client.withConfig({
    token: process.env.SANITY_API_READ_TOKEN,
  }),
});
