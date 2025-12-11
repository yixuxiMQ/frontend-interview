<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
      <div v-if="!loaded" class="text-center text-gray-500 py-20">加载中...</div>

      <div v-else>
        <div class="mb-4">
          <h1 class="text-2xl font-bold">{{ frontmatter.title || title }}</h1>
          <p v-if="frontmatter.difficulty" class="text-sm text-gray-500 mt-1">
            难度：{{ frontmatter.difficulty }}
          </p>
        </div>

        <div>
          <div v-if="errorMsg" class="mb-4 p-4 bg-red-50 text-red-700 rounded">{{ errorMsg }}</div>
          <template v-for="(b, idx) in blocks" :key="idx">
            <div
              v-if="b.type === 'text'"
              class="prose prose-slate dark:prose-invert mb-4"
              v-html="b.html"
            ></div>
            <div v-else class="my-4">
              <div class="text-sm text-gray-500 mb-2">代码：</div>
              <div class="bg-base-100 p-4 rounded overflow-auto code-block" v-html="b.html"></div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { parseMarkdown, parseFrontmatter } from '@/utils/markdown'
import { marked } from 'marked'

const route = useRoute()
const slug = String(route.params.id || '')

const loaded = ref(false)
const title = ref('')
import { reactive } from 'vue'
const frontmatter = reactive<Record<string, any>>({})
const htmlContent = ref('')
const blocks = ref<any[]>([])
const errorMsg = ref('')

// 加载 markdown 文件
const modules = import.meta.glob('/src/content/questions/**/*.md', { eager: true, as: 'raw' })

onMounted(() => {
  try {
    const entry = Object.entries(modules).find(([path]) => {
      const filename = path.split('/').pop() || ''
      const s = filename.replace(/\.md$/, '')
      return s === slug
    })

    if (!entry) {
      title.value = '未找到题目'
      htmlContent.value = '<p class="text-gray-500">未找到对应的题目文件。</p>'
      loaded.value = true
      return
    }

    const raw = String((entry as any)[1])
    const { frontmatter: fm, content } = parseFrontmatter(raw)
    Object.assign(frontmatter, fm || {})

    // 标题兜底逻辑
    title.value =
      frontmatter.title ||
      (() => {
        const m = content.match(/^#\s+(.*)/m)
        return m ? m[1].trim() : slug
      })()

    // 将内容按块拆分为文字块与代码块，分别渲染以改善观感
    const tokens = marked.lexer(content || '')
    const chunks: any[] = []
    let buffer: any[] = []

    const flushBuffer = () => {
      if (buffer.length === 0) return
      const html = marked.parser(buffer)
      chunks.push({ type: 'text', html })
      buffer = []
    }

    tokens.forEach((t: any) => {
      if (t.type === 'code') {
        // 将累积的文本 token 刷出并生成 HTML
        flushBuffer()
        // 生成代码块的 HTML（使用 marked 保持高亮一致）
        const codeHtml = marked.parse('```' + (t.lang || '') + '\n' + t.text + '\n```')
        chunks.push({ type: 'code', html: codeHtml })
      } else {
        buffer.push(t)
      }
    })
    flushBuffer()

    // 写入响应式块数组
    blocks.value = chunks
  } catch (e: any) {
    console.error('Error loading question detail:', e)
    errorMsg.value = '加载题目时发生错误：' + (e?.message || String(e))
  } finally {
    loaded.value = true
  }
})
</script>

<style scoped>
/* ensure code blocks scroll nicely */
.prose pre {
  overflow: auto;
}

/* make code blocks visually distinct */
.code-block {
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.98), rgba(10, 14, 24, 0.98));
  color: #f8fafc;
  border: 1px solid rgba(255, 255, 255, 0.04);
  box-shadow: 0 1px 2px rgba(2, 6, 23, 0.6);
}

.code-block pre {
  background: transparent !important;
  color: inherit !important;
}
</style>
