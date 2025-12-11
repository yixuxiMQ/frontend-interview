<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">分类浏览</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <router-link
        v-for="cat in categories"
        :key="cat.id"
        :to="`/category/${cat.id}`"
        class="card bg-base-100 shadow-md hover:shadow-lg transition-all p-4"
      >
        <div class="flex items-center gap-3">
          <div class="text-3xl">{{ cat.icon }}</div>
          <div>
            <h3 class="text-lg font-medium">{{ cat.name }}</h3>
            <p class="text-sm text-gray-500">{{ cat.description }}</p>
          </div>
        </div>
      </router-link>
    </div>

    <!-- 图表：题目数量分布 -->
    <div class="mt-8">
      <h2 class="text-xl font-semibold mb-4">题目数量分布</h2>
      <div id="categories-chart" style="height: 320px; width: 100%"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import meta from '@/content/meta.json'
import { onMounted, ref } from 'vue'

const categories = meta.categories || []

const chart = ref<any>(null)

onMounted(async () => {
  try {
    const echarts = await import('echarts')
    const dom = document.getElementById('categories-chart')
    if (!dom) return
    chart.value = echarts.init(dom as HTMLElement)
    const option = {
      tooltip: { trigger: 'item' },
      legend: { bottom: 0 },
      series: [
        {
          name: '题目数量',
          type: 'pie',
          radius: '60%',
          data: categories.map((c: any) => ({ value: c.count || 0, name: c.name })),
          emphasis: {
            itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0,0,0,0.5)' },
          },
        },
      ],
    }
    chart.value.setOption(option)

    // 处理窗口大小变化以自适应图表
    window.addEventListener('resize', () => chart.value && chart.value.resize())
  } catch (e) {
    // 如果没有安装 echarts，则静默忽略错误
    // console.warn('ECharts 不可用', e)
  }
})
</script>
