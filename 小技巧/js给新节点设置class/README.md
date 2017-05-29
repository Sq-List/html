1.el.setAttribute('class','abc');
IE6/7 : div背景色不是红色
IE8/9/10/Firefox/Safari/Chrome/Opera : div背景色为红色
结果：IE6/7不支持setAttribute('class',xxx)方式设置元素的class。

2.el.setAttribute('className', 'abc');
IE6/7 : div背景色为红色
IE8/9/10/Firefox/Safari/Chrome/Opera : div背景色不是红色
结果：IE8/9/10/Firefox/Safari/Chrome/Opera不支持setAttribute('className',xxx)方式设置元素的class。

3.el.className = 'abc';
结果：所有浏览器都支持
