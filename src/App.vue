<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="grow pt-16">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<style>
@import '@/assets/css/main.css';
</style>
