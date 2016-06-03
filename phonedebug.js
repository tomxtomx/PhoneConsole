window.onload = function(){

	(function(){
 
		var phonedebug = function(){

			function init(){
				body.appendChild(btn);
				// 
				body.appendChild(panel);
				body.appendChild(btn);
				// 
				btn.addEventListener('click', togglepanel);
			}

			function togglepanel(){
				if(panelshowed){
					panelshowed = false;
					panel.style.display = 'none';
				}else{
					panelshowed = true;
					panel.style.display = 'block';
				}
			}

			function add(text){
				panel.textContent += JSON.stringify(text) + '\n';
			}

			var body = document.getElementsByTagName('body')[0];
			var panel = document.createElement('TEXTAREA');
			var btn = document.createElement('A');
			var panelshowed = false;
			//
			panel.style['font-size'] = '14px';
			panel.style.position = 'fixed';
			panel.style.padding = '10px';
		    panel.style.top = '0';
		    panel.style.left = '0';
		    panel.style.right = '0';
		    panel.style.bottom = '0';
		    panel.style.width = '100%';
		    panel.style.background = 'rgba(0,0,0,0.8)';
		    panel.style.overflow = 'scroll';
		    panel.style.color = '#ccc';
		    panel.style.display = 'none';
		    panel.style.zoom = Number.MAX_VALUE-1;
		    panel.setAttribute('readOnly', 'readOnly');
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
			panel.style.zoom = Number.MAX_VALUE;
			// 
			this.init = init;
			this.add = add;

			return this;
		}

		// 全局单例调用
		window.PHONEDEBUG = new phonedebug();
	})()

	PHONEDEBUG.init();
	PHONEDEBUG.add('asdasd');
	PHONEDEBUG.add({aa:'adsasdasd'});
	PHONEDEBUG.add([{aa:'adsasdasd'}, {bb:'bbbbb'}]);
}