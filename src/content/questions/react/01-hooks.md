---
id: 'react-001'
title: 'React Hooks 基础'
category: 'react'
tags: ['hooks', 'useState', 'useEffect']
difficulty: 'easy'
---

## ❓ 问题描述

说明 `useState` 与 `useEffect` 的基本用法并举例。

## 💡 参考答案

示例：

```javascript
import { useState, useEffect } from 'react'
function Counter() {
  const [n, setN] = useState(0)
  useEffect(() => {
    console.log(n)
  }, [n])
  return <button onClick={() => setN(n + 1)}>{n}</button>
}
```
