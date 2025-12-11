---
id: 'vue-001'
title: 'Vue 响应式原理简介'
category: 'vue'
tags: ['reactivity', 'ref', 'reactive']
difficulty: 'medium'
---

## ❓ 问题描述

描述 Vue 3 的响应式系统（Proxy）以及 `ref` 与 `reactive` 的区别。

## 💡 参考答案

示例：

```javascript
import { ref, reactive } from 'vue'
const count = ref(0)
const state = reactive({ a: 1 })
```
