#插件说明
 * 引用插件到页面后，JS脚本会自动在当前页面右下角插入一个"debug"按钮
 * 点击按钮可以切换显示/隐藏打印面板
 * 支持undefined、字符、数组、对象、数值、布尔、日期类型。
 * 自动覆盖console调试方法：log、info、error、warn，并输出到UI调试面板。

#打印各种调试信息示例：
 * console.log('asdasd');
 * console.info({aa:'adsasdasd'});
 * console.error([{aa:'adsasdasd'}, {bb:'bbbbb'}, {bb:'bbbbb'}, {bb:'bbbbb'}, {bb:'bbbbb'}, {bb:'bbbbb'}]);
 * console.warn('warning!');
