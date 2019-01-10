# 是否是指定节点的父级
```
const isDomParent = require('zhf.is-dom-parent');

isDomParent('html', 'body')); // true
isDomParent('body', 'html')); // false
isDomParent('body', 'html')); // false
isDomParent('html', 'html')); // false
isDomParent('body', 'body')); // false
isDomParent(document, 'body')); // true
isDomParent('body', document.querySelector('html'))); // false
isDomParent(document.querySelector('body'), 'html')); // false
isDomParent(document, document.querySelector('body'))); // true
isDomParent(document.querySelector('body'), document.querySelector('html'))); // false
isDomParent(document.querySelector('html'), document.querySelector('body'))); // true
isDomParent(document.querySelector('html'), document.querySelector('html'))); // false
isDomParent(document.querySelector('body'), document.querySelector('body'))); // false
```
* 原生js有个```parentDom.contains(childDom)```
    - 如果parentDom和childDom是同一个元素，返回的是true。
* jQuery有个```$.contains(parentDom, childDom)```
    - 如果parentDom和childDom是同一个元素，返回的是false(我借鉴了这点)。
