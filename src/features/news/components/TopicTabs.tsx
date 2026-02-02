

import type { Topic } from "../types"

const topics: Topic[] = [
  "all",
  "world",
  "tech",
  "business",
  "science",
  "sports"
]

interface Props {
  active: Topic
  onChange: (topic: Topic) => void
}

export function TopicTabs({ active, onChange }: Props) {
  return (
    <nav className="topics">
      {topics.map(topic => (
        <button
          key={topic}
          className={active === topic ? "active" : ""}
          onClick={() => onChange(topic)}
        >
          {topic.toUpperCase()}
        </button>
      ))}
    </nav>
  )
}