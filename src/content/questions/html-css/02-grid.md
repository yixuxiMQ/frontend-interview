---
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

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 16px;
}
```
