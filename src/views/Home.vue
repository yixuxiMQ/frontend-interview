<template>
  <div class="min-h-screen">
    <!-- 头部横幅（Hero）区域 -->
    <section class="hero bg-linear-to-r from-primary/10 to-secondary/10 py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            前端面试题库
            <span class="block text-2xl md:text-3xl text-primary mt-2">
              一站式前端面试学习平台
            </span>
          </h1>
          <p class="text-lg text-gray-600 mb-8">
            收集整理最新、最全的前端面试题目，涵盖HTML/CSS、JavaScript、Vue、React等核心技术栈。
            提供详细解析、面试技巧和实际应用场景。
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/categories" class="btn btn-primary btn-lg"> 开始学习 </router-link>
            <button class="btn btn-outline btn-lg" @click="scrollToFeatures">了解更多</button>
          </div>
        </div>
      </div>
    </section>

    <!-- 特色功能（Features）区域 -->
    <section ref="featuresRef" class="py-12 bg-base-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">为什么选择我们？</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card bg-base-100 shadow-lg">
            <div class="card-body items-center text-center px-6">
              <div class="text-4xl mb-4">📚</div>
              <h3 class="card-title">全面覆盖</h3>
              <p>涵盖前端各大技术栈，从基础到进阶，满足不同层次的学习需求</p>
            </div>
          </div>
          <div class="card bg-base-100 shadow-lg">
            <div class="card-body items-center text-center px-6">
              <div class="text-4xl mb-4">💡</div>
              <h3 class="card-title">详细解析</h3>
              <p>每道题目都有详细解答和思路分析，不仅知道答案，更要理解原理</p>
            </div>
          </div>
          <div class="card bg-base-100 shadow-lg">
            <div class="card-body items-center text-center px-6">
              <div class="text-4xl mb-4">🚀</div>
              <h3 class="card-title">持续更新</h3>
              <p>紧跟技术发展，定期更新大厂最新面试题，保持内容的新鲜度</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 分类预览（Categories）区域 -->
    <section class="py-12 bg-base-200">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-4">热门分类</h2>
        <p class="text-center text-gray-600 mb-8">选择你感兴趣的技术栈开始学习</p>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <router-link
            v-for="category in categories"
            :key="category.id"
            :to="`/category/${category.id}`"
            class="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div class="card-body items-center text-center p-6">
              <div class="text-3xl mb-2">{{ category.icon }}</div>
              <h3 class="card-title text-lg">{{ category.name }}</h3>
              <p class="text-sm text-gray-500">{{ category.count }} 道题目</p>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const featuresRef = ref<HTMLElement>()

// 模拟数据 - 以后会替换为真实接口数据
const categories = [
  { id: 'html-css', name: 'HTML/CSS', icon: '💻', count: 25 },
  { id: 'javascript', name: 'JavaScript', icon: '⚡', count: 50 },
  { id: 'vue', name: 'Vue.js', icon: '🟢', count: 30 },
  { id: 'react', name: 'React', icon: '⚛️', count: 30 },
  { id: 'browser', name: '浏览器', icon: '🌐', count: 20 },
  { id: 'network', name: '网络', icon: '📡', count: 15 },
]

const scrollToFeatures = () => {
  featuresRef.value?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  // 这里可以用于加载真实数据
})
</script>
