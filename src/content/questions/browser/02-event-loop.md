---
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
