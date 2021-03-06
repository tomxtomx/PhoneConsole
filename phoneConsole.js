﻿(function(){

	function init(){

		var phoneConsole = function(){
			// 元素外观修饰
			function decorator(type, element, elementype){
				switch(type){
					case 'li':
						element.style['word-break'] = 'break-all';
						element.style['margin-bottom'] = '5px';
						element.style['padding-bottom'] = '5px';
						element.style['border-bottom'] = '1px solid darkslategrey';
						element.style.color = getcolor(elementype);
					break;
					case 'panel':
						element.style.margin = '0';
						element.style.border = '0';
						element.style['overflow-y'] = 'scroll';
						element.style['font-size'] = '14px';
						element.style.position = 'fixed';
						element.style.padding = '10px';
					    element.style.top = '0';
					    element.style.left = '0';
					    element.style.right = '0';
					    element.style.bottom = '0';
					    element.style.background = 'rgba(0,0,0,0.8)';
					    element.style.color = '#ccc';
					    element.style.display = 'none';
					    element.style['z-index'] = '9999999999';
					break;
					case 'btn':
						element.style['font-size'] = '14px';
						element.style.border = '1px solid #ccc';
						element.style.background = 'white';
						element.style.color = 'black';
						element.style.padding = '5px';
						element.style.position = 'fixed';
					    element.style.bottom = '10px';
					    element.style.right = '10px';
					    element.style['z-index'] = '9999999999';
						element.textContent = 'debug';
					break;
				}
			}
			// 
			function togglepanel(){
				if(panelshowed){
					panelshowed = false;
					panel.style.display = 'none';
				}else{
					panelshowed = true;
					panel.style.display = 'block';
				}
			}
			// 
			function getcolor(type){
				switch(type){
					case 'object':
						return '#FFCC00';
					break;
					case 'array':
						return '#66CCFF';
					break;
					case 'number':
						return '#FFFF99';
					break;
					case 'function':
						return '#00FFFF';
					break;
					case 'string':
						return '#ffffff';
					break;
					case 'date':
						return '#CC33CC';
					break;
					case 'undefined':
						return '#FF0000';
					break;
					default:
						return '#ffffff';
					break;
				}
			}
			// 
			function checktype(o){
				// 数组类型
				if(Object.prototype.toString.call(o) === "[object Array]"){
					return 'array';
				}else{
					// 其他类型
					return (typeof o).toLowerCase();
				}
			}
			// 
			function add(o){
				var li = document.createElement('DIV');
				var type = checktype(o);
				// 
				decorator('li', li, type);
				// 
				if(type === 'string')
					li.textContent += o + '\n';
				else
					li.textContent += JSON.stringify(o) + '\n';
				// 
				panel.appendChild(li);
			}
			// 
			var body = document.getElementsByTagName('body')[0];
			var panel = document.createElement('DIV');
			var btn = document.createElement('A');
			var panelshowed = false;
			//
			decorator('panel', panel);
			decorator('btn', btn);
			//
			body.appendChild(btn);
			body.appendChild(panel);
			body.appendChild(btn);
			btn.addEventListener('click', togglepanel);
			// 
			return add;
		}
		// 单例调用
		var phoneConsole = new phoneConsole();
		// 重新封装console方法
		console.log = function(value){ phoneConsole(value); }
		console.warn = function(value){ phoneConsole(value); }
		console.info = function(value){ phoneConsole(value); }
		console.error = function(value){ phoneConsole(value); }
	}

	// 自动初始化
	if(window.onload){
		var oldonload = window.onload;
		window.onload = function(){ oldonload(); init(); }
	}else{
		window.onload = init;
	}
})();