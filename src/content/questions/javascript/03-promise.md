---
id: 'js-003'
title: 'Promise 的用法与原理'
category: 'javascript'
tags: ['Promise', '异步']
difficulty: 'medium'
---

## ❓ 问题描述

说明 Promise 的基本使用，以及如何链式调用和错误处理。

## 💡 参考答案

Promise 是表示异步操作最终完成或失败的对象。

示例：

```javascript
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

wait(1000)
  .then(() => console.log('done'))
  .catch((err) => console.error(err))
```
