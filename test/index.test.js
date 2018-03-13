const isDomParent = require('../dist/index.min');

test(`是否是指定节点的父级`, () => {
    expect(isDomParent(document, 'body')).toEqual(true);
});
