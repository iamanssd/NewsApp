import type { NewsArticle } from "../model/types"

type NewsCardProps = {
  article: NewsArticle
}

const formatDate = (value: string) => {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) {
    return "-- --- --"
  }
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "2-digit",
  })
}

const formatTime = (value: string) => {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) {
    return "--:--"
  }
  return date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="group grid grid-cols-1 items-center gap-4 border-2 border-line bg-paper-strong p-[14px] transition-colors duration-150 hover:bg-ink md:grid-cols-[84px_0.9fr_2.2fr]">
      <div className="text-left text-[12px] font-semibold tracking-[0.08em] text-ink-soft transition-colors duration-150 group-hover:text-paper-strong md:text-center">
        <div>{formatDate(article.publishedAt)}</div>
        <div className="mt-0.5 text-[10px] font-medium text-ink-soft/80 transition-colors duration-150 group-hover:text-paper-strong/80">
          {formatTime(article.publishedAt)}
        </div>
      </div>
      <div>
        <p className="m-0 text-left text-[13px] text-ink transition-colors duration-150 group-hover:text-paper-strong">
          {article.title}
        </p>
        <p className="mt-1 text-center text-[12px] tracking-[0.12em] text-ink-soft transition-colors duration-150 group-hover:text-paper-strong/80">
          <a href={article.url}>{article.source}</a>
        </p>
      </div>
      <div className="border-t border-line pt-2 md:border-l-2 md:border-t-0 md:pl-4 md:pt-0">
        <p className="m-0 text-[13px] text-ink transition-colors duration-150 group-hover:text-paper-strong">
          {article.summary}
        </p>
      </div>
    </article>
  )
}
