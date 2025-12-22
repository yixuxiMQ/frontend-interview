```javascript
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
```

