import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
	layout,
	tagName: 'div',
    classNames: ['code-view'],
    id: 'kcodeview',
    lang: 'js', // 哪种语言(js, css, html)

	init() {
		this._super(...arguments);
	    let str = this.randomString(5);
        let newId = this.get('id') + str;
        this.set('id', newId);
	},

    didInsertElement() { 
        var codeView = document.getElementById(this.get('id'));
        var langMap = {
            'js': KcodeviewJs(codeView),
            'css': KcodeviewCss(codeView),
            'html': KcodeviewHtml(codeView)
        };
        var myCodeView = langMap[this.get('lang')];
        myCodeView.init({
            'font-size': '18px',
            'line-height': '28px'
        });
    },

    // 生成随机字符串
	randomString(len) {　　
		len = len || 32;　　
        /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
		var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
		var maxPos = $chars.length;　　
		var pwd = '';　　
		for (var i = 0; i < len; i++) {　　　　
			pwd += $chars.charAt(Math.floor(Math.random() * maxPos));　　
		}　　
		return pwd;
	}
});
