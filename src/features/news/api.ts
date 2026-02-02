

import type { NewsArticle } from "./types"

export async function fetchNews(): Promise<NewsArticle[]> {
  const res = await fetch("/data/news.json")
  if (!res.ok) throw new Error("Failed to load news")
  return res.json()
}