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
isDomParent(document.querySelector('html'), document.querySelector('body')); // true
isDomParent(document.querySelector('html'), document.querySelector('html')); // true
isDomParent(document.querySelector('body'), document.querySelector('body')); // true
```
* 原生js有个```dom1.contains(dom2)```
    - 如果dom1和dom2是同一个元素，返回的是true(我借鉴了这点)。
* jQuery有个```$.contains(dom1, dom2)```
    - 如果dom1和dom2是同一个元素，返回的是false(我应该借鉴这点，但是我没有，惭愧啊)。
