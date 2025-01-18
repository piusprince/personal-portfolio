import { stackName } from "@/lib/tech";

export const renderIcon = (tech: keyof typeof stackName) => {
  if (stackName[tech]) {
    const Icon = stackName[tech].icon;
    return <Icon className="w-4 h-4" />;
  }
};
