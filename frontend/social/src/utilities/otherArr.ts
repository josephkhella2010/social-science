import type { LanguageDropDownType } from "./interfacesType";

export const languageDropDown: LanguageDropDownType[] = [
  { name: "sv", title: "SV", url: "/foto/sv.webp" },
  { name: "ar", title: "AR", url: "/foto/eg.webp" },
].sort((a, b) => b.title.localeCompare(a.title));
