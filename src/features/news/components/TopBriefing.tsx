


import type { NewsArticle } from "../types"

interface Props {
  articles: NewsArticle[]
}

export function TopBriefing({ articles }: Props) {
  const breaking = articles.filter(a => a.breaking).slice(0, 3)

  return (
    <section className="briefing">
      <h2>Your briefing</h2>

      <ul>
        {breaking.map(article => (
          <li key={article.id}>
            <a href={article.url} target="_blank">
              {article.title}
            </a>
            <span className="source">{article.source}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}