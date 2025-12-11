<template>
  <footer class="footer footer-center p-10 bg-base-200 text-base-content">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="font-bold text-lg mb-4">🚀 前端面试指南</h3>
          <p class="text-sm text-gray-600">
            专注前端面试题的高质量聚合平台<br />
            每日更新最新面试题
          </p>
        </div>

        <div>
          <h3 class="font-bold text-lg mb-4">快速链接</h3>
          <div class="flex flex-col gap-2">
            <router-link to="/" class="link link-hover">首页</router-link>
            <router-link to="/categories" class="link link-hover">分类浏览</router-link>
            <a
              href="https://github.com/yourusername/frontend-interview"
              target="_blank"
              class="link link-hover"
            >
              GitHub仓库
            </a>
          </div>
        </div>

        <div>
          <h3 class="font-bold text-lg mb-4">贡献指南</h3>
          <p class="text-sm text-gray-600 mb-2">发现题目错误？想要贡献新题？</p>
          <a
            href="https://github.com/yourusername/frontend-interview/issues"
            target="_blank"
            class="btn btn-sm btn-primary"
          >
            提交Issue
          </a>
        </div>
      </div>

      <div class="divider"></div>

      <div class="text-center">
        <p class="text-sm">
          © 2025 前端面试指南.
          <span class="text-gray-500">本站内容仅供学习参考</span>
        </p>
        <p class="text-xs text-gray-400 mt-2">
          本项目基于 MIT 协议开源 | Built with Vue 3 & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>
