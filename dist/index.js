'use strict';

var getDomArray = require('zhf.get-dom-array');
var typeOf = require('zhf.type-of');

function isDomParent(parentElement, childElement) {
    var parentDom = getDomArray(parentElement)[0];
    var childDom = getDomArray(childElement)[0];
    if (!(parentDom && childDom)) {
        console.log('参数错误');
        return false;
    }
    if (typeOf(childElement) === 'string') {
        return parentDom.querySelector(childElement) !== null;
    } else {
        var nowDom = childDom;
        if (nowDom === parentDom) {
            return false;
        }
        while (nowDom !== parentDom && nowDom !== null) {
            // nowDom等于null或者等于parentDom就走不进来了。所以nowDom的最终结果要么是等于null要么是等于parentDom。
            nowDom = nowDom.parentNode;
        }
        return nowDom === parentDom;
    }
}

module.exports = isDomParent;