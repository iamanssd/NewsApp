

export type Topic =
  | "all"
  | "world"
  | "tech"
  | "business"
  | "science"
  | "sports"

export interface NewsArticle {
  id: string
  title: string
  summary: string
  source: string
  url: string
  publishedAt: string
  topic: Topic
  engagementScore?: number
  breaking?: boolean
}