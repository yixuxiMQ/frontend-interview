---
id: 'js-002'
title: '解释 JavaScript 的事件循环 (Event Loop)'
category: 'javascript'
tags: ['事件循环', '异步']
difficulty: 'medium'
---

## ❓ 问题描述

解释 JavaScript 的事件循环如何工作，以及宏任务与微任务的执行顺序。

## 💡 参考答案

事件循环负责管理任务队列与调用栈，微任务（microtask）优先于下一个宏任务。

示例：

```javascript
console.log('script start')

setTimeout(() => console.log('setTimeout'), 0)

Promise.resolve().then(() => console.log('promise'))

console.log('script end')
```

输出顺序：

script start -> script end -> promise -> setTimeout
