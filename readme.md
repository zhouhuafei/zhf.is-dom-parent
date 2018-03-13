# 是否是指定节点的父级
```
const isDomParent = require('zhf.is-dom-parent');
// document是否是body元素的父级
isDomParent(document, 'body'); // true
isDomParent(document, document.querySelector('body')); // true
// body是否是html元素的父级
isDomParent('body', 'html'); // false
isDomParent('body', document.querySelector('html')); // false
isDomParent(document.querySelector('body'), 'html'); // false
isDomParent(document.querySelector('body'), document.querySelector('html')); // false
```
