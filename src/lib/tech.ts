import { Icons } from "@/components/ui/icons";

export const stackName = {
  react: { name: "React", icon: Icons.React },
  next: { name: "Next.js", icon: Icons.Nextjs },
  typescript: { name: "TypeScript", icon: Icons.Typescript },
  tailwind: { name: "Tailwind CSS", icon: Icons.TailwindCSS },
  sanity: { name: "Sanity", icon: Icons.Sanity },
  radix: { name: "Radix", icon: Icons.RadixUI },
  css: { name: "CSS", icon: Icons.CSSNew },
  cssmodules: { name: "CSS Modules", icon: Icons.CSSNew },
  storyblok: { name: "Storyblok", icon: Icons.Storyblok },
  storybook: { name: "Storybook", icon: Icons.Storybook },
  jest: { name: "Jest", icon: Icons.Jest },
  vitest: { name: "Vitest", icon: Icons.Vitest },
  docker: { name: "Docker", icon: Icons.Docker },
  azure: { name: "Azure", icon: Icons.MicrosoftAzure },
  azuredevops: { name: "Azure DevOps", icon: Icons.MicrosoftAzure },
  tanstack: { name: "TanStack", icon: Icons.TanStack },
  rollup: { name: "Rollup", icon: Icons.Rollup },
  playwright: { name: "Playwright", icon: Icons.Playwright },
  vercel: { name: "Vercel", icon: Icons.Vercel },
  biome: { name: "Biome", icon: Icons.Biomejs },
  turbopack: { name: "Turbopack", icon: Icons.Turbopack },
  zitadel: { name: "Zitadel", icon: Icons.Zitadel },
  //   graphql: { name: "GraphQL", icon: Icons.Graphql },
  //   apollo: { name: "Apollo", icon: Icons.Apollo },
};

const techAliases: Record<string, string[]> = {
  next: ["nextjs", "next.js"],
  typescript: ["ts"],
  css: ["css3"],
  cssmodules: ["cssmodule", "css modules"],
  storyblok: ["storyblokcms", "storyblok cms"],
  azure: ["microsoftazure", "azurecloud", "azure cloud"],
  azuredevops: ["azure devops", "azuredevopsservices"],
  tanstack: [
    "tanstackquery",
    "tanstack query",
    "reactquery",
    "react query",
    "@tanstack/react-query",
  ],
  rollup: ["rollupjs", "rollup.js", "rollupdotjs"],
  biome: ["biomejs"],
};

function normalizeTechLabel(value: string): string {
  return value.toLowerCase().replaceAll(/[^a-z0-9]/g, "");
}

function getCandidateScore(normalizedLabel: string, candidate: string): number {
  if (candidate === normalizedLabel) {
    return 300 + candidate.length;
  }

  if (normalizedLabel.includes(candidate) && candidate.length >= 4) {
    return 200 + candidate.length;
  }

  if (candidate.includes(normalizedLabel) && normalizedLabel.length >= 4) {
    return 100 + normalizedLabel.length;
  }

  return 0;
}

export function getTechMetaByLabel(label?: string) {
  if (!label) return null;

  const normalizedLabel = normalizeTechLabel(label);
  let bestMatch: {
    score: number;
    meta: (typeof stackName)[keyof typeof stackName];
  } | null = null;

  for (const [key, meta] of Object.entries(stackName)) {
    const normalizedCandidates = [
      normalizeTechLabel(key),
      normalizeTechLabel(meta.name),
      ...(techAliases[key] ?? []).map((value) => normalizeTechLabel(value)),
    ].filter(Boolean);

    for (const candidate of normalizedCandidates) {
      const score = getCandidateScore(normalizedLabel, candidate);

      if (!score) continue;

      if (!bestMatch || score > bestMatch.score) {
        bestMatch = { score, meta };
      }
    }
  }

  return bestMatch?.meta ?? null;
}
