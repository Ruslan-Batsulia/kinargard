import type { Locale } from "@/src/common/types";

type Option = {
  label: string;
  value: Locale;
};

export const options: Option[] = [
  { label: "English", value: "en" },
  { label: "Українська", value: "uk" }
] as const;
