import { client } from "@/lib/sanity";

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: any;
  tags?: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      tags,
    },
  });
}

// Dummy export to prevent layout breaking elsewhere if they expect SanityLive
export const SanityLive = () => null;
