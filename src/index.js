const getDomArray = require('zhf.get-dom-array');
const typeOf = require('zhf.type-of');

function isDomParent(parentElement, childElement) {
    const parentDom = getDomArray(parentElement)[0];
    const childDom = getDomArray(childElement)[0];
    if (!(parentDom && childDom)) {
        console.log('参数错误');
        return false;
    }
    if (typeOf(childElement) === 'string') {
        return parentDom.querySelector(childElement) !== null;
    } else {
        let nowDom = childDom;
        while (nowDom !== parentDom && nowDom !== null) {
            nowDom = nowDom.parentNode;
        }
        return nowDom === parentDom;
    }
}

module.exports = isDomParent;
