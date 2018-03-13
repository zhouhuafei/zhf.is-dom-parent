const isDomParent = require('../dist/index.min');

test(`是否是指定节点的父级`, () => {
    // document是否是body元素的父级
    expect(isDomParent(document, 'body')).toEqual(true);
    expect(isDomParent(document, document.querySelector('body'))).toEqual(true);
});
