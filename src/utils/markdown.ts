import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

// 配置 marked（绕过类型限制以兼容 highlight）
;(marked as any).setOptions({
  // highlight 使用显式类型注解，避免 TS 隐式 any 报错
  highlight: (code: string, lang: string) => {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value
    }
    return hljs.highlightAuto(code).value
  },
  langPrefix: 'hljs language-',
  pedantic: false,
  gfm: true,
  breaks: false,
  // sanitize 已被移除/弃用，新项目不建议使用，但保留原有行为
  // @ts-ignore
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
})

// 解析 markdown 文件，保证类型安全并兼容 marked 返回 Promise 情况
export async function parseMarkdown(content: string): Promise<string> {
  const res = (marked.parse as any)(content)
  if (res instanceof Promise) return await res
  return String(res)
}

// 解析 frontmatter（返回 frontmatter 对象与正文字符串）
export function parseFrontmatter(content: string): {
  frontmatter: Record<string, any>
  content: string
} {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)

  if (!match) {
    return { frontmatter: {}, content }
  }

  const frontmatterStr = match[1] || ''
  const markdownContent = match[2] || ''

  const frontmatter: Record<string, any> = {}
  frontmatterStr.split('\n').forEach((line) => {
    const m = line.match(/^([^:]+):\s*(.*)$/)
    if (!m || !m[1] || !m[2]) return
    const key = m[1].trim()
    let value: any = m[2].trim()

    // 尝试解析 JSON 值（例如 tags: ["a","b"]）
    if (typeof value === 'string' && (value.startsWith('[') || value.startsWith('{'))) {
      try {
        value = JSON.parse(value)
      } catch {
        // 解析失败则保持字符串
      }
    }

    frontmatter[key] = value
  })

  return {
    frontmatter,
    content: markdownContent,
  }
}
