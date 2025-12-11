<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
      <div class="mb-6">
        <h1 class="text-3xl font-bold mb-2">{{ category?.name || '分类' }}</h1>
        <p class="text-gray-600">{{ category?.description || '' }}</p>
      </div>

      <div v-if="questions.length === 0" class="text-center py-20 text-gray-500">
        本分类暂无题目
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <router-link
          v-for="q in questions"
          :key="q.slug"
          :to="`/question/${q.slug}`"
          class="card bg-base-100 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 p-4"
        >
          <div class="flex items-start gap-3">
            <div class="text-3xl">📘</div>
            <div>
              <h3 class="text-lg font-medium">{{ q.title }}</h3>
              <p class="text-sm text-gray-500 mt-1">{{ q.excerpt }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import meta from '@/content/meta.json'

const route = useRoute()
const id = String(route.params.id || '')

// 从 src/content/questions 中以原始文本方式导入所有 markdown 文件
const modules = import.meta.glob('/src/content/questions/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

const questions = Object.entries(modules)
  .filter(([path]) => path.includes(`/questions/${id}/`))
  .map(([path, raw]) => {
    const filename = path.split('/').pop() || ''
    const slug = filename.replace(/\.md$/, '')
    const content = String(raw)
    // 尝试把第一个一级标题作为题目标题
    const m = content.match(/^#\s+(.*)/m)
    const title = m ? m[1]?.trim() : slug
    // 摘要：取标题后的第一行非空文本，或最多 120 字
    const afterTitle = content.replace(/^#.*$/m, '').trim()
    const excerptLine = afterTitle.split('\n').find((l) => l.trim().length > 0) || ''
    const excerpt = excerptLine.length ? excerptLine.slice(0, 120) : content.slice(0, 120)
    return { slug, title, excerpt }
  })

const category = computed(() => meta.categories.find((c) => c.id === id))
</script>

<style scoped>
/* 卡片的微调样式 */
.card {
  min-height: 72px;
}
</style>
