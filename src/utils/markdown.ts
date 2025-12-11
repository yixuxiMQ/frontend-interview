import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

// 配置marked
marked.setOptions({
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value
    }
    return hljs.highlightAuto(code).value
  },
  langPrefix: 'hljs language-',
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
})

// 解析markdown文件
export function parseMarkdown(content: string): string {
  return marked.parse(content)
}

// 解析frontmatter
export function parseFrontmatter(content: string): {
  frontmatter: Record<string, any>
  content: string
} {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)

  if (!match) {
    return { frontmatter: {}, content }
  }

  const frontmatterStr = match[1]
  const markdownContent = match[2]

  const frontmatter: Record<string, any> = {}
  frontmatterStr.split('\n').forEach((line) => {
    const match = line.match(/^([^:]+):\s*(.*)$/)
    if (match) {
      const key = match[1].trim()
      let value = match[2].trim()

      // 尝试解析JSON值
      if (value.startsWith('[') || value.startsWith('{')) {
        try {
          value = JSON.parse(value)
        } catch {
          // 保持原样
        }
      }

      frontmatter[key] = value
    }
  })

  return {
    frontmatter,
    content: markdownContent,
  }
}
