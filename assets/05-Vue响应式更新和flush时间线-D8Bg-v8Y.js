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
`,e=`---
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
`,t=`---
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
`,r=`---
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
`,a=`---
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
`,c=`---
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
`,i=`---
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
`,u=`---
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
`,p=`---
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
`,d=`---
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
`,l=`---
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
`,f=`---
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
`,m=`---
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
`,v=`---
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
`,_=`---
id: 'vue-002'
title: 'Vue 组件生命周期（Composition API）'
category: 'vue'
tags: ['lifecycle', 'composition']
difficulty: 'easy'
---

## 一、**说说 Vue 的生命周期**

Vue组件的生命周期是指：组件实例 **创建、初始化、渲染、更新、销毁** 的过程。Vue 内部引擎在不同阶段插入的 “可控钩子”，用于让开发者在 “正确的时间点” 介入业务逻辑，避免越权操作DOM或状态。

**Vue 3 中的主要生命周期钩子（Composition API 与 Options API 对应）**

|   阶段   | Options API 钩子 | Composition API 钩子 | 描述                                                         |
| :------: | :--------------: | :------------------: | ------------------------------------------------------------ |
| 创建阶段 |   beforeCreate   |     setup() 开始     | 实例初始化前，无法访问 data、methods 等。                    |
|          |     created      | setup() 执行中/结束  | 实例创建完成，可访问 data、methods、computed 等，但 DOM 未挂载。 |
| 挂载阶段 |   beforeMount    |    onBeforeMount     | 模板编译完成，即将挂载到 DOM，但 DOM 还未渲染。              |
|          |     mounted      |      onMounted       | 组件已挂载到 DOM，可访问 DOM 元素（通过 ref 或 $el）。       |
| 更新阶段 |   beforeUpdate   |   onBeforeUpdated    | 数据变化后，DOM 更新前。                                     |
|          |     updated      |      onUpdated       | DOM 更新完成后。                                             |
| 卸载阶段 |  beforeUnmount   |   onBeforeUnmount    | 组件即将卸载前。                                             |
|          |    unmounted     |   onBeforeUnmount    | 组件卸载完成后。                                             |

## **二、生命周期完整拆解**

1. **setup（≈ beforeCreate + created）**

   1. ### **① Vue 在这一阶段做了什么？**

      1. **内部执行顺序（简化）**

         \`\`\`javascript
         createComponentInstance
           ↓
         initProps
           ↓
         initSlots
           ↓
         setupComponent
           ↓
         setup() 执行（你写的代码）
         \`\`\`

      1. 此时 Vue 已经完成：

         - ✅ 创建组件实例 instance
         - ✅ props 初始化（只读）
         - ✅ 注入依赖（provide/inject 可用）
         - ❌ DOM 尚未创建
         - ❌ render 尚未执行
         
         👉 **响应式系统已可用，但 DOM 相关系统未启动**

   2. ### **② Vue 为什么“此时”能做这些事？**

      1. 因为 setup 执行时：

         - Vue 已创建 **组件实例容器**
         - Proxy / Reactive 已准备好
         - 但 **渲染管线还没启动**

         👉 所以它是**纯逻辑安全区**

   3. ### **③ 开发者在 setup 里能 / 应该做什么？**

      **核心定位：组件的“业务初始化工厂”**

      #### **典型场景**

      - 定义响应式状态
      - 定义业务方法
      - 发请求（不依赖 DOM）
      - 注册 watch / computed

   4. ### **④ 完整代码示例（setup）**

      1. \`\`\`javascript
               <script setup lang="ts">
               import { ref, reactive, computed, watch } from 'vue'
               
               // =======================
               // 1. 初始化响应式状态
               // =======================
               const count = ref(0)
               
               const user = reactive({
                 name: 'Alice',
                 age: 18
               })
               
               // =======================
               // 2. 计算属性（此时响应式系统已可用）
               // =======================
               const doubleCount = computed(() => {
                 return count.value * 2
               })
               
               // =======================
               // 3. watch 副作用
               // =======================
               watch(count, (newVal, oldVal) => {
                 console.log('count changed:', oldVal, '->', newVal)
               })
               
               // =======================
               // 4. 业务初始化逻辑
               // =======================
               // setup 中可以安全发请求（不依赖 DOM）
               async function fetchUser() {
                 // 模拟接口请求
                 await new Promise(resolve => setTimeout(resolve, 500))
                 user.name = 'Bob'
               }
               
               fetchUser()
               
               // ⚠️ 这里不能做 DOM 操作
               // document.querySelector(...) ❌
               <\/script>
         \`\`\`

2. ## **onBeforeMount**

   1. ### **① Vue 在干什么？**

      - render 函数已生成
      - 虚拟 DOM 树已创建
      - **即将执行首次 patch**

      👉 这是**DOM 上屏前的最后一刻**

   2. ### **② 为什么此时“还不能操作 DOM”？**

      因为：

      - 真实 DOM 还没插入页面
      - ref 还未绑定到真实元素

   3. ### **③ 开发者能做什么？**

      - 修改状态（影响首屏）
      - 做调试
      - 极少用于业务

   4. ### **④ 示例代码**

      \`\`\`javascript
      import { onBeforeMount } from 'vue'
      
      onBeforeMount(() => {
        // 此时修改状态，会影响首次渲染结果
        console.log('组件即将挂载')
      
        // ❌ 不能访问 DOM
        // console.log(document.getElementById('app')) // null
      })
      \`\`\`

3. ## **onMounted**

   1. ### **① Vue 在干什么？**

      - 虚拟 DOM → 真实 DOM
      - DOM 已插入页面
      - refs 已绑定
      - 浏览器完成首次渲染

      👉 **这是 DOM 的“稳定态”**

   2. ### **② Vue 为什么“此时”允许 DOM 操作？**

      因为：

      - patch 完成
      - DOM 节点已存在
      - Scheduler 已完成一次完整 flush

   3. ### **③ 开发者能做什么？（企业级）**

      #### **典型场景**

      - 初始化第三方库
      - DOM 尺寸计算
      - 绑定 window/document 事件
      - 操作 canvas / video

   4. ### **④ 示例代码（真实企业场景）**

      \`\`\`react
      <template>
        <div ref="chartEl" style="width: 400px; height: 300px;"></div>
      </template>
      
      <script setup lang="ts">
      import { ref, onMounted, onBeforeUnmount } from 'vue'
      
      const chartEl = ref<HTMLDivElement | null>(null)
      let chartInstance: any = null
      
      onMounted(() => {
        // 此时 DOM 已存在
        if (chartEl.value) {
          // 模拟初始化第三方图表库
          chartInstance = {
            init(el: HTMLElement) {
              console.log('chart init on', el)
            },
            destroy() {
              console.log('chart destroyed')
            }
          }
      
          chartInstance.init(chartEl.value)
        }
      
        // 绑定全局事件
        window.addEventListener('resize', handleResize)
      })
      
      function handleResize() {
        console.log('window resized')
      }
      
      onBeforeUnmount(() => {
        // 清理事件
        window.removeEventListener('resize', handleResize)
      
        // 销毁第三方实例
        chartInstance?.destroy()
      })
      <\/script>
      \`\`\`

4. ## **onBeforeUpdate**

   1. ### **① Vue 在干什么？**

      - 响应式数据变化
      - 新旧 VNode diff 前
      - DOM 尚未更新

   2. ### **② 为什么能拿到“旧 DOM”？**

      因为 patch 尚未执行

      👉 DOM 仍然是上一次状态

   3. ### **③ 开发者能干什么？**

      - 对比更新前后状态
      - 调试性能

   4. ### **④ 示例代码**

      \`\`\`javascript
      import { onBeforeUpdate } from 'vue'
      
      onBeforeUpdate(() => {
        console.log('DOM 即将更新，此时还是旧状态')
      })
      \`\`\`

5. ## **onUpdated**

   1. ### **① Vue 在干什么？**

      - patch 执行完成
      - DOM 已反映最新状态

   2. ### **② 为什么“慎用”？**

      因为：

      - 在这里 setState
      - 会触发新一轮更新
      - **极易死循环**

   3. ### **③ 示例（正确使用）**

      \`\`\`javascript
      import { onUpdated } from 'vue'
      
      onUpdated(() => {
        // 只读 DOM，不改状态
        console.log('DOM 已更新完成')
      })
      \`\`\`

6. ## **onBeforeUnmount**

   1. ### **① Vue 在干什么？**

      - 组件仍存在
      - DOM 即将移除
      - 响应式仍有效

   2. ### **② 为什么这是“清理黄金点”？**

      因为：

      - 实例还活着
      - 可以访问所有资源
      - DOM 尚未被销毁

   3. ### **③ 示例（标准资源清理模板）**

      \`\`\`javascript
      import { onBeforeUnmount } from 'vue'
      
      let timer: number
      
      timer = window.setInterval(() => {
        console.log('polling...')
      }, 1000)
      
      onBeforeUnmount(() => {
        // 清除定时器
        clearInterval(timer)
      
        // 取消订阅 / socket / observer
        console.log('资源已释放')
      })
      \`\`\`

7. ## **onUnmounted**

   ### **Vue 在干什么？**

   - DOM 已移除
   - 响应式依赖解除
   - 实例不可再用

   ### **能干什么？**

   - 打日志
   - 埋点

   \`\`\`javascript
   import { onUnmounted } from 'vue'
   
   onUnmounted(() => {
     console.log('组件已彻底销毁')
   })
   \`\`\`

   `,g=`---
id: 'vue-003'
title: '对比Vue2和Vue3的生命周期中，选项式中的beforeCreate、created与组合式中的setup有什么区别？'
category: 'vue'
tags: ['lifecycle', 'setup']
difficulty: 'medium'
---

## 一、**对比Vue2和Vue3的生命周期中，选项式中的beforeCreate、created与组合式中的setup有什么区别？**

Vue 3 在引入 Composition API 的同时，对生命周期钩子进行了调整。最显著的变化就是 Options API 中的 beforeCreate 和 created 钩子在 Composition API 中被 setup() 完全取代。

**beforeCreate / created 是“生命周期钩子”，** **setup 是“组件初始化流程本身”。**

换句话说：

Vue2：**你在框架流程之外，被通知发生了什么**

Vue3：**你直接参与了框架流程的构造**。这是“回调”与“构造阶段”的本质差异。

## 二、**从执行时序上看，本质差别在哪里？**

## **Vue2（Options API）**

\`\`\`javascript
new Vue()
  ↓
beforeCreate      ← 框架调用你
  ↓
initState
  ↓
created           ← 框架通知你
  ↓
beforeMount
\`\`\`

### **特点**

- 生命周期是**插入点**
- 你永远是**被动的**
- this 是一个“逐步补全”的对象

## **Vue3（Composition API）**

\`\`\`javascript
createComponentInstance
  ↓
initProps / initSlots
  ↓
setup()            ← 你参与实例构造
  ↓
finishComponentSetup
  ↓
beforeMount
\`\`\`

### **特点**

- setup 是**初始化管线的一部分**
- 你是**主动构建组件能力**
- 不存在 this，避免“半成品实例”

## **三、beforeCreate：为什么它存在？又为什么它几乎没用？**

1. ## **Vue 在 beforeCreate 时做了什么？**

   在 Vue2 中，beforeCreate 触发时：

   

   - ❌ data 还没初始化
   - ❌ props 还没初始化
   - ❌ computed / watch 都不存在
   - ❌ 响应式系统还没接管

   👉 **实例只是一个空壳**

   \`\`\`javascript
   export default {
     beforeCreate() {
       console.log(this.data) // undefined
     }
   }
   \`\`\`

2. ## **那 beforeCreate 是给谁用的？**

   **beforeCreate 是给插件 / mixin 用的，不是给业务用的**，例如：Vuex 注入、全局 mixin 改写实例

3. ## **工程结论**

   1. 业务开发中，**几乎不应该写 beforeCreate**
   2. 它是 Vue2 架构下的“历史产物”

## **四、created：Vue2 真正的“业务初始化点”**

1. ## **created 时，Vue 做完了什么？**

   在 created 之前，Vue 已完成：

   - ✅ data 初始化
   - ✅ props 初始化
   - ✅ computed / watch 建立
   - ✅ 响应式系统 ready
   - ❌ DOM 尚未生成

   👉 **这是一个“无 DOM，但有完整状态”的阶段**

2. ## **为什么 created 特别适合发请求？**

   \`\`\`javascript
   export default {
     data() {
       return { list: [] }
     },
     async created() {
       const res = await fetch('/api/list')
       this.list = await res.json()
     }
   }
   \`\`\`

   原因是：

   - 改数据会触发首次渲染
   - 不会造成重复 patch
   - 不依赖 DOM

3. ## **created 的结构性问题**

   - 状态在 data
   - 行为在 methods
   - 派生在 computed
   - 副作用在 watch

   👉 **逻辑被“生命周期 + 选项”强行拆散**

## 五、**setup：它不是 created 的替代，而是“升维”**

1. ## **setup 执行时，Vue 到底准备好了什么？**

   在 setup 执行前，Vue3 已确保：

   - ✅ props 可用
   - ✅ 响应式系统可用（Proxy）
   - ✅ inject 可用
   - ❌ render effect 尚未注册
   - ❌ DOM 不存在

   👉 **能力已就绪，但实例未完成**

2. ## **为什么说 setup 覆盖了 beforeCreate + created 的职责？**

   1. 因为 setup 同时具备：

      | **能力**     | **beforeCreate** | **created** | **setup** |
      | ------------ | ---------------- | ----------- | --------- |
      | 访问 props   | ❌                | ✅           | ✅         |
      | 定义响应式   | ❌                | ❌           | ✅         |
      | 发请求       | ❌                | ✅           | ✅         |
      | 组织业务逻辑 | ❌                | ❌           | ✅         |

   ​	但注意关键一句：**setup 覆盖的是“能力”，不是“生命周期语义”**

3. **setup 的真实定位（非常重要）**

   **setup = 组件的“构造函数 + 业务装配线”**，它不是“组件创建完成后你能干什么”，而是“组件被创建时你亲手怎么拼”。

   

## **六、同一个真实场景，对比三者的写法差异**

### **场景：客户列表初始化 + 派生状态**

### **Vue2（created）**

\`\`\`javascript
export default {
  data() {
    return { customers: [] }
  },

  created() {
    this.fetchCustomers()
  },

  computed: {
    vipCustomers() {
      return this.customers.filter(c => c.vip)
    }
  },

  methods: {
    async fetchCustomers() {
      const res = await fetch('/api/customers')
      this.customers = await res.json()
    }
  }
}
\`\`\`

**问题**：逻辑分散、强依赖 this、难复用

### **Vue3（setup）**

\`\`\`javascript
<script setup lang="ts">
import { ref, computed } from 'vue'

// 状态
const customers = ref<any[]>([])

// 派生状态
const vipCustomers = computed(() =>
  customers.value.filter(c => c.vip)
)

// 初始化逻辑
async function fetchCustomers() {
  const res = await fetch('/api/customers')
  customers.value = await res.json()
}

// setup 即初始化
fetchCustomers()
<\/script>
\`\`\`

**优势**：

- 状态 + 行为 + 派生高度内聚
- 可直接抽成 composable
- 无 this、不存在“半成品实例”

## **七、为什么还要强调：setup 执行时实例未完全构造好？**

虽然在执行 \`setup\` 时，Vue 已经在内存里创建了一个内部实例对象（Internal Instance），但这个实例处于**“毛坯房”**状态：

- **没有 \`this\` 绑定：** Vue 故意没有将 \`this\` 指向该实例。这是为了避免开发者在初始化阶段去依赖那些尚未挂载的属性（如 \`$refs\` 或 \`$el\`），同时也是为了更好的 TypeScript 支持。
- **选项未合并：** 此时组件还没开始处理 \`data\`、\`computed\` 或 \`methods\`。如果你在同一个组件里混合使用了选项式 API，\`setup\` 运行的时候，这些选项里的东西还是一片空白。
- **渲染函数未生成：** 此时组件还没有开始编译模板，更没有生成虚拟 DOM 树。

## **八、如何理解 \`setup\` 涵盖了它们？**

说 \`setup\` 涵盖了 \`beforeCreate\` 和 \`created\`，是指在**功能逻辑**上，你不再需要这两个钩子了：

- **替代 \`beforeCreate\`：** 在 \`beforeCreate\` 阶段，你通常做一些不依赖响应式数据的初始化（如设置常量）。在 \`setup\` 中，你直接声明变量即可。
- **替代 \`created\`：** 在 \`created\` 阶段，你会进行 API 请求、初始化响应式状态。在 \`setup\` 中，你通过 \`ref\` 定义数据并直接调用异步函数，效果完全一致。

**逻辑执行顺序图示：**

1. **初始化**：Vue 内部创建实例。

2. **\`setup()\` 执行**（你的代码在这里运行）：

   - 定义 \`ref\`、\`reactive\`。
   - 绑定 \`onMounted\` 等生命周期回调。
   - 发送网络请求。

3. **解析选项式**：处理 \`data\`、\`computed\`（为了兼容 Vue 2 语法）。

4. **实例就绪**：此时才触发选项式的 \`created\` 钩子。

**同时写 \`setup\` 和 \`created\`，你会发现 \`setup\` 里的逻辑永远先运行**

## **九、最终对比总结**

| **维度**     | **beforeCreate** | **created**  | **setup** |
| ------------ | ---------------- | ------------ | --------- |
| 本质         | 生命周期回调     | 生命周期回调 | 构造阶段  |
| 控制权       | 框架             | 框架         | 开发者    |
| 响应式       | ❌                | ✅            | ✅         |
| DOM          | ❌                | ❌            | ❌         |
| this         | 有（不完整）     | 有（稳定）   | 无        |
| 逻辑组织     | 差               | 一般         | 极强      |
| 面向复杂工程 | 不适合           | 勉强         | 设计目标  |





   
`,h=`---
id: 'vue-004'
title: '在Vue2和Vue3中，inject和props是否是响应式的'
category: 'vue'
tags: ['provide/inject', 'props']
difficulty: 'medium'
---

## **一、在Vue2和Vue3中，inject和props是否是响应式的**

1. **Props 是响应式的吗？**

   **结论：是的。** 无论是 Vue 2 还是 Vue 3，\`props\` 都是响应式的。

   #### 为什么？

   - **单向数据流：** Vue 的设计核心是“向下传递数据”。父组件更新传入的值时，子组件的 \`props\` 会自动更新。
   - **底层实现：**
     - 在 **Vue 2** 中，Vue 内部对 \`props\` 对象进行了 \`Object.defineProperty\` 的劫持。
     - 在 **Vue 3** 中，\`props\` 本身就是一个被 \`proxy\` 包装的响应式对象。
   - **注意点：** 你不能在子组件里直接修改 \`prop\` 的值（会报错），但如果父组件改了，子组件一定会感知到并触发重新渲染。

2. **Inject 是响应式的吗？**

   **结论：默认不是，但可以实现**。

   在 Vue 2 和 Vue 3 中，\`Provide/Inject\` 默认情况下**不保证**注入值的响应性。

    **为什么默认不响应？**

   Vue 的官方文档明确指出：\`provide\` 和 \`inject\` 绑定并不是可响应的。这是为了防止开发者滥用该功能，导致数据流向变得难以追踪。

   **如何让它变成响应式？**

   这取决于你传递的是“值”还是“响应式引用”：

   | 场景                          | 是否响应式   | 原因                                                         |
   | ----------------------------- | ------------ | ------------------------------------------------------------ |
   | **传递普通字符串/数字**       | **否**       | 传递的是值的快照，父组件修改后，子组件拿到的依然是旧值。     |
   | 传递一个对象                  | 是 (间接)    | 由于 JavaScript 对象的引用特性，子组件访问对象的属性时能拿到更新后的值。 |
   | Vue 3 传递 \`ref\` / \`reactive\` | 是           | **这是 Vue 3 的标准做法。** 你直接提供一个响应式引用，注入方自然能保持响应。 |
   | Vue 2 传递组件实例 (\`this\`)   | 是（不推荐） | 将整个父组件实例 \`provide\` 出去，子组件访问 \`this.xxx\` 是响应式的，但会导致严重耦合。 |

3. **Vue 2 vs Vue 3 的实现差异**

   **Vue 2 中的实现**

   如果你想在 Vue 2 中实现 Inject 的响应式，通常需要传递一个对象：

   \`\`\`javascript
   // 父组件
   provide() {
     return {
       sharedData: this.state // 假设 state 是一个对象 { count: 1 }
     };
   }
   \`\`\`

   **Vue 3 中的实现 (组合式 API)**

   Vue 3 更加直观。你可以直接提供一个 \`ref\`：

   \`\`\`javascript
   // 父组件
   const count = ref(0);
   provide('count', count);
   
   // 子组件
   const count = inject('count'); // 此时 count 依然是 ref，具有响应性
   \`\`\`

4. ### 深度原理剖析：为什么 Prop 和 Inject 待遇不同？

   1. **链路明确性**：\`Props\` 是明确的父子关系，Vue 引擎在渲染每个子组件时，会自动建立 \`prop\` 到渲染函数的依赖追踪。
   2. **依赖追踪的缺失**：\`Inject\` 是跨级查找。在 Vue 2 的设计中，\`inject\` 只是在初始化时简单的执行了一次“向上查找并赋值”。它没有像 \`computed\` 或 \`watch\` 那样在查找链条上建立一套自动更新的机制。
   3. **引用机制**：在 Vue 3 中，由于 \`ref\` 和 \`reactive\` 的本质是对象（Proxy 或具有 \`.value\` 的对象），当 \`inject\` 拿到这个对象引用时，后续的读写依然会触发 Proxy 的拦截，从而实现了“看起来”是 Inject 响应式的效果。

5. ### 总结建议

   - **Props**：放心使用，它是天然响应式的。
   - **Inject**：如果你需要它响应，请在父组件 \`provide\` 时传入一个 **\`reactive\` 对象**或 **\`ref\`**。`,V=`\`\`\`javascript
------------------ 首次渲染 ------------------
组件实例化
   ↓
beforeCreate   ← 数据还没初始化，ref/props 不可用
   ↓
created       ← 数据初始化完成，响应式系统就绪
   ↓
setup() / data() / props 初始化
   ↓
beforeMount   ← DOM 还没创建，不能访问 this.$el
   ↓
render()      ← 渲染管线启动，生成初始 VNode
   ↓
patch(null, vnode, container)  ← 首次挂载 DOM
   ├─ 创建 DOM 元素
   ├─ 设置属性/样式/class
   ├─ 绑定事件
   ├─ 处理子节点
   ├─ ref 绑定
   └─ directive bind
   ↓
mounted      ← DOM 已挂载，ref 可用
------------------------------------------------

----------------- 数据更新触发 flush -----------------
响应式数据变化（proxy/Reactive）
   ↓
effect watcher 被触发
   ↓
Scheduler.queueJob(watcher)  ← watcher 加入更新队列
   ↓ (异步)
一次 flush 队列执行：
   ┌───────────────────────────────────────────┐
   │ 1. 去重 queue（同一 watcher 多次触发只保留一次）
   │ 2. 排序 queue（父组件 id 小 → 先执行，子组件后）
   │ 3. 循环执行 queue: watcher.run()
   │       ├─ render() → 生成新 VNode
   │       ├─ patch(oldVNode, newVNode)
   │       │     ├─ 最小化 DOM 更新
   │       │     ├─ 文本节点 / 属性 / style / class / event
   │       │     ├─ 子节点递归更新
   │       │     └─ ref 更新
   │       └─ updated 生命周期 & postFlush callbacks
   │ 4. 清空 queue
   └───────────────────────────────────────────┘
   ↓
DOM 更新完成
   ├─ beforeUpdate（DOM 仍是旧的）
   ├─ patch 执行（DOM 更新）
   ├─ updated（DOM 更新完成，可访问最新 DOM）
   └─ nextTick 回调（flush 完全完成后的微任务）
\`\`\`

`;export{V as _,h as a,g as b,_ as c,v as d,m as e,f,l as g,d as h,p as i,u as j,i as k,c as l,a as m,s as n,r as o,o as p,t as q,e as r,n as s};
