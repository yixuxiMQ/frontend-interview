---
id: 'vue-003'
title: 'Composition API 实战示例'
category: 'vue'
tags: ['composition', 'setup']
difficulty: 'medium'
---

## ❓ 问题描述

演示如何用 Composition API 抽离业务逻辑为可复用函数。

## 💡 参考答案

示例：

```javascript
// useCounter.js
import { ref } from 'vue'
export function useCounter() {
  const count = ref(0)
  const inc = () => count.value++
  return { count, inc }
}
```
