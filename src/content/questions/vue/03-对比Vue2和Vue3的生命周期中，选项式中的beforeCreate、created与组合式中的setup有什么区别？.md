---
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

```javascript
new Vue()
  ↓
beforeCreate      ← 框架调用你
  ↓
initState
  ↓
created           ← 框架通知你
  ↓
beforeMount
```

### **特点**

- 生命周期是**插入点**
- 你永远是**被动的**
- this 是一个“逐步补全”的对象

## **Vue3（Composition API）**

```javascript
createComponentInstance
  ↓
initProps / initSlots
  ↓
setup()            ← 你参与实例构造
  ↓
finishComponentSetup
  ↓
beforeMount
```

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

   ```javascript
   export default {
     beforeCreate() {
       console.log(this.data) // undefined
     }
   }
   ```

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

   ```javascript
   export default {
     data() {
       return { list: [] }
     },
     async created() {
       const res = await fetch('/api/list')
       this.list = await res.json()
     }
   }
   ```

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

```javascript
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
```

**问题**：逻辑分散、强依赖 this、难复用

### **Vue3（setup）**

```javascript
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
</script>
```

**优势**：

- 状态 + 行为 + 派生高度内聚
- 可直接抽成 composable
- 无 this、不存在“半成品实例”

## **七、为什么还要强调：setup 执行时实例未完全构造好？**

虽然在执行 `setup` 时，Vue 已经在内存里创建了一个内部实例对象（Internal Instance），但这个实例处于**“毛坯房”**状态：

- **没有 `this` 绑定：** Vue 故意没有将 `this` 指向该实例。这是为了避免开发者在初始化阶段去依赖那些尚未挂载的属性（如 `$refs` 或 `$el`），同时也是为了更好的 TypeScript 支持。
- **选项未合并：** 此时组件还没开始处理 `data`、`computed` 或 `methods`。如果你在同一个组件里混合使用了选项式 API，`setup` 运行的时候，这些选项里的东西还是一片空白。
- **渲染函数未生成：** 此时组件还没有开始编译模板，更没有生成虚拟 DOM 树。

## **八、如何理解 `setup` 涵盖了它们？**

说 `setup` 涵盖了 `beforeCreate` 和 `created`，是指在**功能逻辑**上，你不再需要这两个钩子了：

- **替代 `beforeCreate`：** 在 `beforeCreate` 阶段，你通常做一些不依赖响应式数据的初始化（如设置常量）。在 `setup` 中，你直接声明变量即可。
- **替代 `created`：** 在 `created` 阶段，你会进行 API 请求、初始化响应式状态。在 `setup` 中，你通过 `ref` 定义数据并直接调用异步函数，效果完全一致。

**逻辑执行顺序图示：**

1. **初始化**：Vue 内部创建实例。

2. **`setup()` 执行**（你的代码在这里运行）：

   - 定义 `ref`、`reactive`。
   - 绑定 `onMounted` 等生命周期回调。
   - 发送网络请求。

3. **解析选项式**：处理 `data`、`computed`（为了兼容 Vue 2 语法）。

4. **实例就绪**：此时才触发选项式的 `created` 钩子。

**同时写 `setup` 和 `created`，你会发现 `setup` 里的逻辑永远先运行**

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





   
