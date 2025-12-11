---
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

```javascript
const ThemeContext = React.createContext('light')
function App() {
  return <ThemeContext.Provider value="dark">...</ThemeContext.Provider>
}
```
