const isDomParent = require('../dist/index.min');

test(`是否是指定节点的父级`, () => {
    // document是否是body元素的父级
    expect(isDomParent(document, 'body')).toEqual(true);
    expect(isDomParent(document, document.querySelector('body'))).toEqual(true);
    // body是否是html元素的父级
    expect(isDomParent('body', 'html')).toEqual(false);
    expect(isDomParent('body', document.querySelector('html'))).toEqual(false);
    expect(isDomParent(document.querySelector('body'), 'html')).toEqual(false);
    expect(isDomParent(document.querySelector('body'), document.querySelector('html'))).toEqual(false);
    expect(isDomParent(document.querySelector('html'), document.querySelector('body'))).toEqual(true);
    expect(isDomParent(document.querySelector('html'), document.querySelector('html'))).toEqual(true);
    expect(isDomParent(document.querySelector('body'), document.querySelector('body'))).toEqual(true);
});
