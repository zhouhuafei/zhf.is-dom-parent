const isDomParent = require('../dist/index.min');

test(`是否是指定节点的父级`, () => {
    expect(isDomParent('html', 'body')).toEqual(true);
    expect(isDomParent('body', 'html')).toEqual(false);
    expect(isDomParent('body', 'html')).toEqual(false);
    expect(isDomParent('html', 'html')).toEqual(false);
    expect(isDomParent('body', 'body')).toEqual(false);
    expect(isDomParent(document, 'body')).toEqual(true);
    expect(isDomParent('body', document.querySelector('html'))).toEqual(false);
    expect(isDomParent(document.querySelector('body'), 'html')).toEqual(false);
    expect(isDomParent(document, document.querySelector('body'))).toEqual(true);
    expect(isDomParent(document.querySelector('body'), document.querySelector('html'))).toEqual(false);
    expect(isDomParent(document.querySelector('html'), document.querySelector('body'))).toEqual(true);
    expect(isDomParent(document.querySelector('html'), document.querySelector('html'))).toEqual(false);
    expect(isDomParent(document.querySelector('body'), document.querySelector('body'))).toEqual(false);
});
