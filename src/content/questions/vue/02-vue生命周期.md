---
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

         ```javascript
         createComponentInstance
           ↓
         initProps
           ↓
         initSlots
           ↓
         setupComponent
           ↓
         setup() 执行（你写的代码）
         ```

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

      1. ```javascript
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
               </script>
         ```

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

      ```javascript
      import { onBeforeMount } from 'vue'
      
      onBeforeMount(() => {
        // 此时修改状态，会影响首次渲染结果
        console.log('组件即将挂载')
      
        // ❌ 不能访问 DOM
        // console.log(document.getElementById('app')) // null
      })
      ```

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

      ```react
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
      </script>
      ```

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

      ```javascript
      import { onBeforeUpdate } from 'vue'
      
      onBeforeUpdate(() => {
        console.log('DOM 即将更新，此时还是旧状态')
      })
      ```

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

      ```javascript
      import { onUpdated } from 'vue'
      
      onUpdated(() => {
        // 只读 DOM，不改状态
        console.log('DOM 已更新完成')
      })
      ```

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

      ```javascript
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
      ```

7. ## **onUnmounted**

   ### **Vue 在干什么？**

   - DOM 已移除
   - 响应式依赖解除
   - 实例不可再用

   ### **能干什么？**

   - 打日志
   - 埋点

   ```javascript
   import { onUnmounted } from 'vue'
   
   onUnmounted(() => {
     console.log('组件已彻底销毁')
   })
   ```

   