---
id: 'vue-002'
title: 'Vue 组件生命周期（Composition API）'
category: 'vue'
tags: ['lifecycle', 'composition']
difficulty: 'easy'
---

## ❓ 问题描述

说明 Vue 3 中常见的生命周期钩子及其使用场景。

## 💡 参考答案

示例：

```javascript
import { onMounted, onUnmounted } from 'vue'
onMounted(() => {
  console.log('mounted')
})
onUnmounted(() => {
  console.log('unmounted')
})
```
