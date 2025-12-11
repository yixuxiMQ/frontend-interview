<template>
  <header
    class="navbar bg-base-100 shadow-sm fixed top-0 left-0 right-0 z-50 backdrop-blur-sm h-16"
  >
    <div class="container mx-auto px-4 h-full flex items-center">
      <div class="flex-1">
        <router-link to="/" class="text-xl font-bold"> 🚀 前端面试指南 </router-link>
        <span class="text-sm text-gray-500 ml-2 hidden md:inline"> 助力你的前端面试之路 </span>
      </div>
      <div class="flex-none gap-2 flex items-center">
        <div class="form-control">
          <input
            type="text"
            placeholder="搜索题目..."
            class="input input-bordered w-24 md:w-auto"
            @keyup.enter="handleSearch"
            v-model="searchKeyword"
          />
        </div>
        <!-- 移动端下拉菜单 -->
        <div class="dropdown dropdown-end md:hidden">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/categories">分类浏览</router-link></li>
            <li>
              <a href="https://github.com/yourusername/frontend-interview" target="_blank"
                >GitHub</a
              >
            </li>
          </ul>
        </div>

        <!-- 桌面端水平菜单 -->
        <nav class="hidden md:flex md:items-center md:gap-2">
          <ul class="menu menu-horizontal p-0 header-menu">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/categories">分类浏览</router-link></li>
            <li>
              <a href="https://github.com/yourusername/frontend-interview" target="_blank"
                >GitHub</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchKeyword = ref('')

const handleSearch = () => {
  if (searchKeyword.value.trim()) {
    router.push(`/search?q=${encodeURIComponent(searchKeyword.value.trim())}`)
  }
}
</script>
