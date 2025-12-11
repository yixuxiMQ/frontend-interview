const n=`---
id: 'browser-001'
title: '浏览器渲染流程（从 request 到 paint）'
category: 'browser'
tags: ['渲染', '回流', '重绘']
difficulty: 'medium'
---

## ❓ 问题描述

简单描述浏览器从请求页面到渲染显示的关键步骤。

## 💡 参考答案

关键步骤包括：解析 HTML -> 构建 DOM -> 构建 CSSOM -> 生成渲染树 -> 布局（layout）-> 绘制（paint）。
`,t=`---
id: 'browser-002'
title: '浏览器环境下的事件循环与任务队列'
category: 'browser'
tags: ['event-loop', '任务队列']
difficulty: 'medium'
---

## ❓ 问题描述

比较浏览器与 Node 中事件循环的差异，说明 task/microtask 在浏览器中的行为。

## 💡 参考答案

浏览器的渲染帧与任务队列结合，微任务会在当前任务之后、渲染之前执行。
`,e=`---
id: 'browser-003'
title: '浏览器存储机制对比（localStorage / sessionStorage / IndexedDB）'
category: 'browser'
tags: ['storage']
difficulty: 'easy'
---

## ❓ 问题描述

比较几种常用的浏览器存储方案及其适用场景。

## 💡 参考答案

localStorage：同步、容量有限；IndexedDB：异步、适合大数据存储。
`,o=`---
id: 'css-001'
title: 'Flexbox 布局基础'
category: 'html-css'
tags: ['flexbox', '布局']
difficulty: 'easy'
---

## ❓ 问题描述

简述 Flexbox 常用属性并举例说明水平/垂直居中。

## 💡 参考答案

示例：水平垂直居中：

\`\`\`html
<div style="display:flex;align-items:center;justify-content:center;height:200px;">
  <div>居中内容</div>
</div>
\`\`\`
`,i=`---
id: 'css-002'
title: 'CSS Grid 基本用法'
category: 'html-css'
tags: ['grid', '布局']
difficulty: 'medium'
---

## ❓ 问题描述

说明如何使用 CSS Grid 实现两栏布局并自适应宽度。

## 💡 参考答案

示例：

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 16px;
}
\`\`\`
`,s=`---
id: 'css-003'
title: '响应式设计实践'
category: 'html-css'
tags: ['responsive', '媒体查询']
difficulty: 'easy'
---

## ❓ 问题描述

如何使用媒体查询实现不同屏幕下的样式适配？

## 💡 参考答案

示例：

\`\`\`css
@media (max-width: 768px) {
  .nav {
    display: none;
  }
}
\`\`\`
`,c=`---
id: 'js-001'
title: 'JavaScript闭包是什么？请举例说明'
category: 'javascript'
tags: ['闭包', '作用域', '内存管理']
difficulty: 'medium'
frequency: 5
companies: ['阿里巴巴', '腾讯', '字节跳动', '美团']
related: ['js-002', 'js-003']
createdAt: '2024-01-01'
updatedAt: '2024-01-01'
---

## ❓ 问题描述

1. 什么是JavaScript闭包？
2. 闭包的形成条件是什么？
3. 闭包有哪些实际应用场景？
4. 使用闭包时需要注意什么？

## 💡 参考答案

**闭包（Closure）** 是指有权访问另一个函数作用域中变量的函数。简单说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。

### 基本概念

\`\`\`javascript
function outer() {
  let count = 0

  function inner() {
    count++
    console.log(count)
  }

  return inner
}

const counter = outer()
counter() // 1
counter() // 2
counter() // 3
\`\`\`
`,r=`---
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

\`\`\`javascript
console.log('script start')

setTimeout(() => console.log('setTimeout'), 0)

Promise.resolve().then(() => console.log('promise'))

console.log('script end')
\`\`\`

输出顺序：

script start -> script end -> promise -> setTimeout
`,a=`---
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

\`\`\`javascript
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

wait(1000)
  .then(() => console.log('done'))
  .catch((err) => console.error(err))
\`\`\`
`,l=`---
id: 'net-001'
title: 'HTTP 协议基础'
category: 'network'
tags: ['http', '协议']
difficulty: 'easy'
---

## ❓ 问题描述

简述 HTTP 请求/响应的基本结构以及常见状态码。

## 💡 参考答案

示例：GET/POST，状态码 200/301/404/500。
`,u=`---
id: 'net-002'
title: 'HTTPS 与 TLS 简介'
category: 'network'
tags: ['https', 'tls']
difficulty: 'medium'
---

## ❓ 问题描述

为什么需要 HTTPS，TLS 的基本工作流程是什么？

## 💡 参考答案

HTTPS 提供传输层加密，基本流程包括握手、密钥协商和加密传输。
`,_=`---
id: 'net-003'
title: 'WebSocket 与长连接'
category: 'network'
tags: ['websocket', '实时']
difficulty: 'medium'
---

## ❓ 问题描述

解释 WebSocket 的工作原理及与 HTTP 的区别。

## 💡 参考答案

WebSocket 建立在 TCP 之上，提供双向持久连接，适合实时消息场景。
`,d=`---
id: 'react-001'
title: 'React Hooks 基础'
category: 'react'
tags: ['hooks', 'useState', 'useEffect']
difficulty: 'easy'
---

## ❓ 问题描述

说明 \`useState\` 与 \`useEffect\` 的基本用法并举例。

## 💡 参考答案

示例：

\`\`\`javascript
import { useState, useEffect } from 'react'
function Counter() {
  const [n, setN] = useState(0)
  useEffect(() => {
    console.log(n)
  }, [n])
  return <button onClick={() => setN(n + 1)}>{n}</button>
}
\`\`\`
`,g=`---
id: 'react-002'
title: 'Virtual DOM 与 Diff 算法简介'
category: 'react'
tags: ['virtual-dom', 'diff']
difficulty: 'medium'
---

## ❓ 问题描述

解释 Virtual DOM 的作用以及如何通过 diff 最小化更新。

## 💡 参考答案

示例说明（略）
`,f=`---
id: 'react-003'
title: 'Context 的使用场景'
category: 'react'
tags: ['context', 'state']
difficulty: 'medium'
---

## ❓ 问题描述

说明 React Context 适合解决哪些问题，并给出示例。

## 💡 参考答案

示例：

\`\`\`javascript
const ThemeContext = React.createContext('light')
function App() {
  return <ThemeContext.Provider value="dark">...</ThemeContext.Provider>
}
\`\`\`
`,m=`---
id: 'vue-001'
title: 'Vue 响应式原理简介'
category: 'vue'
tags: ['reactivity', 'ref', 'reactive']
difficulty: 'medium'
---

## ❓ 问题描述

描述 Vue 3 的响应式系统（Proxy）以及 \`ref\` 与 \`reactive\` 的区别。

## 💡 参考答案

示例：

\`\`\`javascript
import { ref, reactive } from 'vue'
const count = ref(0)
const state = reactive({ a: 1 })
\`\`\`
`,v=`---
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

\`\`\`javascript
import { onMounted, onUnmounted } from 'vue'
onMounted(() => {
  console.log('mounted')
})
onUnmounted(() => {
  console.log('unmounted')
})
\`\`\`
`,p=`---
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

\`\`\`javascript
// useCounter.js
import { ref } from 'vue'
export function useCounter() {
  const count = ref(0)
  const inc = () => count.value++
  return { count, inc }
}
\`\`\`
`;export{p as _,v as a,m as b,f as c,g as d,d as e,_ as f,u as g,l as h,a as i,r as j,c as k,s as l,i as m,o as n,e as o,t as p,n as q};
