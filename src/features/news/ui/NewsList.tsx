

import { useEffect, useMemo, useState } from "react"
import { fetchNews } from "../api/newsApi"
import type { NewsArticle } from "../model/types"
import { NewsCard } from "./NewsCard"

type CategoryTab = "global" | "finance" | "tech" | "politics"

const categoryTabs: { id: CategoryTab; label: string }[] = [
  { id: "global", label: "Global" },
  { id: "finance", label: "Finance" },
  { id: "tech", label: "Tech" },
  { id: "politics", label: "Politics" },
]

export function NewsList() {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [activeTab, setActiveTab] = useState<CategoryTab>("global")

  useEffect(() => {
    fetchNews()
      .then(setArticles)
      .catch(console.error)
  }, [])

  // For now, filtered === articles
  // Later this becomes topic filtering
  const filtered = articles

  const sorted = useMemo(
    () =>
      [...filtered].sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() -
          new Date(a.publishedAt).getTime()
      ),
    [filtered]
  )

  return (
    <section className="mx-auto mt-8 mb-12 max-w-[860px] px-5 pb-12">
      <div className="border-2 border-line bg-paper-strong">
        <div className="px-10 pt-7 pb-8">
          <header className="mb-1 text-center">
            <p className="m-0 font-display text-[34px] tracking-[0.18em] text-accent">
              NEWSAPP
            </p>
            <p className="mt-1.5 text-[12px] tracking-[0.35em] text-ink-soft">
              YOUR DAILY DOSE OF NEWS
            </p>
            <div
              className="mx-auto mt-2 h-[1px] w-40 bg-line"
              aria-hidden="true"
            />
          </header>

          <nav
            className="mb-5 flex flex-wrap justify-center gap-2"
            aria-label="News categories"
          >
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`rounded-full px-4 py-2 text-[13px] font-semibold tracking-[0.08em] text-ink-soft transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 hover:bg-ink hover:text-paper-strong ${
                  activeTab === tab.id
                    ? "bg-ink text-paper-strong"
                    : "bg-transparent"
                }`}
                aria-pressed={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="grid gap-3 px-8 pb-8">
          {sorted.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>

        <div
          className="my-5 text-center tracking-[0.4em] text-ink-soft"
          aria-hidden="true"
        >
          ...
        </div>

        <div className="mt-7 flex flex-col gap-3 px-8 pb-8 md:flex-row md:justify-between">
          <button
            type="button"
            className="flex-1 border-2 border-line bg-paper-strong px-4 py-3 text-center font-semibold"
          >
            Select All
          </button>
          <button
            type="button"
            className="flex-1 border-2 border-line bg-paper-strong px-4 py-3 text-center font-semibold disabled:cursor-not-allowed disabled:opacity-50"
            disabled
          >
            Mark As Read
          </button>
          <button
            type="button"
            className="flex-1 border-2 border-line bg-paper-strong px-4 py-3 text-center font-semibold"
          >
            Trash
          </button>
        </div>
      </div>
    </section>
  )
}
