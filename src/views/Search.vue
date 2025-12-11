<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-4">搜索结果</h1>

    <div v-if="!ready" class="text-gray-500">加载中...</div>

    <div v-else>
      <div v-if="results.length === 0" class="text-gray-500">未找到匹配的题目。</div>
      <div class="grid grid-cols-1 gap-4">
        <router-link
          v-for="r in results"
          :key="r.item.slug"
          :to="`/question/${r.item.slug}`"
          class="card bg-base-100 shadow-md p-4"
        >
          <h3 class="text-lg font-medium">{{ r.item.title }}</h3>
          <p class="text-sm text-gray-500 mt-1">{{ r.item.excerpt }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Fuse from 'fuse.js'
import { parseFrontmatter } from '@/utils/markdown'
import meta from '@/content/meta.json'

const route = useRoute()
const q = String(route.query.q || '')

const ready = ref(false)
const results = ref<any[]>([])

onMounted(async () => {
  const modules = import.meta.glob('/src/content/questions/**/*.md', { eager: true, as: 'raw' })
  const docs = Object.entries(modules).map(([path, raw]) => {
    const filename = path.split('/').pop() || ''
    const slug = filename.replace(/\.md$/, '')
    const { frontmatter, content } = parseFrontmatter(String(raw))
    const title = frontmatter.title || slug
    const excerpt = (content.split('\n').find((l) => l.trim().length > 0) || '').slice(0, 160)
    const category = meta.categories.find((c) => c.id === frontmatter.category) || null
    return { slug, title, excerpt, content, tags: frontmatter.tags || [], category }
  })

  // 优化 Fuse.js 配置：对 title/tags 提升权重并使用更严格的阈值以获得更精确的匹配
  const fuse = new Fuse(docs, {
    keys: [
      { name: 'title', weight: 0.6 },
      { name: 'tags', weight: 0.2 },
      { name: 'excerpt', weight: 0.15 },
      { name: 'content', weight: 0.05 },
    ],
    includeScore: true,
    threshold: 0.35,
    ignoreLocation: true,
  })

  if (q.trim()) {
    const hits = fuse.search(q.trim()).slice(0, 50)
    // 将命中结果按分数排序后映射为展示项
    results.value = hits.sort((a, b) => (a.score || 0) - (b.score || 0))
  } else {
    // 如果没有查询，则按文件顺序展示最近的题目
    results.value = docs.map((d) => ({ item: d }))
  }

  ready.value = true
})
</script>
