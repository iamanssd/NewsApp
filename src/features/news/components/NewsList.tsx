

import { useEffect, useState } from "react"
import { fetchNews } from "../api"
import type { NewsArticle } from "../types"

type SortMode = "recent" | "breaking" | "engagement"

export function NewsList() {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [sort, setSort] = useState<SortMode>("recent")

  useEffect(() => {
    fetchNews()
      .then(setArticles)
      .catch(console.error)
  }, [])

  // For now, filtered === articles
  // Later this becomes topic filtering
  const filtered = articles

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "recent") {
      return (
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
      )
    }

    if (sort === "breaking") {
      return Number(b.breaking) - Number(a.breaking)
    }

    // engagement (default fallback)
    return (b.engagementScore ?? 0) - (a.engagementScore ?? 0)
  })

  return (
    <section>
      <div className="sort-bar">
        <button onClick={() => setSort("recent")}>Most Recent</button>
        <button onClick={() => setSort("breaking")}>Breaking</button>
        <button onClick={() => setSort("engagement")}>Trending</button>
      </div>

      {sorted.map((article) => (
        <article key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.summary}</p>
          <a href={article.url} target="_blank" rel="noreferrer">
            Read more ({article.source})
          </a>
        </article>
      ))}
    </section>
  )
}