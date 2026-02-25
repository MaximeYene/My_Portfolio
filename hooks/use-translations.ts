"use client";

import { translations } from "@/lib/translations";
import { useContext } from "react";
import { LanguageContext } from "@/components/language-context";

export function useTranslations() {
  const context = useContext(LanguageContext);
  const language = context?.language || "fr";
  return translations[language];
}
