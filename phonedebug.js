window.onload = function(){
 	// 
	var phonedebug = function(){
		// 元素外观修饰
		function decorator(type, element){
			switch(type){
				case 'li':
					element.style['word-break'] = 'break-all';
					element.style['margin-bottom'] = '5px';
					element.style['padding-bottom'] = '5px';
					element.style['border-bottom'] = '1px solid darkslategrey';
					element.style.color = checkres.color;
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
				    element.style.zoom = (Number.MAX_VALUE-1).toString();
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
					element.textContent = 'debug';
					element.style.zoom = (Number.MAX_VALUE).toString();
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
		function checktype(li, o){
			var color = 'white';
			var type = '';
			// 判断是否数组
			if(Object.prototype.toString.call(o) === "[object Array]"){
					color = '#66CCFF';
					type = 'array';
				}else{
					// 判断是否其他类型
					type = (typeof o).toLowerCase();
				switch(type){
					case 'object':
						color = '#FFCC00';
					break;
					case 'number':
						color = '#FFFF99';
					break;
					case 'function':
						color = '#00FFFF';
					break;
					case 'string':
						color = '#ffffff';
					break;
					case 'date':
						color = '#CC33CC';
					break;
					case 'undefined':
						color = '#FF0000';
					break;
				}
			}
			return {type: type, color: color};
		}
		// 
		function add(o){
			var li = document.createElement('LI');
			var checkres = checktype(li, o);
			// 
			decorator('li', li);
			// 
			if(checkres.type === 'string')
				li.textContent += o + '\n';
			else
				li.textContent += JSON.stringify(o) + '\n';
			panel.appendChild(li);
		}
		// 
		var body = document.getElementsByTagName('body')[0];
		var panel = document.createElement('UL');
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
	// 全局单例调用
	console.log = new phonedebug();
}