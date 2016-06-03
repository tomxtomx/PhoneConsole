window.onload = function(){
 
	var phonedebug = function(){

		function togglepanel(){
			if(panelshowed){
				panelshowed = false;
				panel.style.display = 'none';
			}else{
				panelshowed = true;
				panel.style.display = 'block';
			}
		}

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

		function add(o){
			var li = document.createElement('LI');
			var checkres = checktype(li, o);
			li.style['word-break'] = 'break-all';
			li.style['margin-bottom'] = '5px';
			li.style['padding-bottom'] = '5px';
			li.style['border-bottom'] = '1px solid darkslategrey';
			li.style.color = checkres.color;
			if(checkres.type === 'string')
				li.textContent += o + '\n';
			else
				li.textContent += JSON.stringify(o) + '\n';
			panel.appendChild(li);
		}

		var body = document.getElementsByTagName('body')[0];
		var panel = document.createElement('UL');
		var btn = document.createElement('A');
		var panelshowed = false;
		//
		panel.style.margin = '0';
		panel.style.border = '0';
		panel.style['overflow-y'] = 'scroll';
		panel.style['font-size'] = '14px';
		panel.style.position = 'fixed';
		panel.style.padding = '10px';
	    panel.style.top = '0';
	    panel.style.left = '0';
	    panel.style.right = '0';
	    panel.style.bottom = '0';
	    panel.style.background = 'rgba(0,0,0,0.8)';
	    panel.style.color = '#ccc';
	    panel.style.display = 'none';
	    panel.style.zoom = (Number.MAX_VALUE-1).toString();
		// 
		btn.style['font-size'] = '14px';
		btn.style.border = '1px solid #ccc';
		btn.style.background = 'white';
		btn.style.color = 'black';
		btn.style.padding = '5px';
		btn.style.position = 'fixed';
	    btn.style.bottom = '10px';
	    btn.style.right = '10px';
		btn.textContent = 'debug';
		panel.style.zoom = (Number.MAX_VALUE).toString();
		//
		body.appendChild(btn);
		body.appendChild(panel);
		body.appendChild(btn);
		btn.addEventListener('click', togglepanel);
		// 
		return add;
	}
	// 全局单例调用
	console.phone = new phonedebug();
}