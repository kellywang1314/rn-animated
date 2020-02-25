 (function (root, factory) {
	if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root['crnwebconfig'] = factory();
	}
}(this, function () {
	//请配置如下相关的配置文件
	return {
		//Demo:
		//routers  	[Need] ------BU需要打包的页面组件,key为页面组件名称："page1" ;value为生产需要发布的地址 :"page1.html"
		// routers:{
		// 	"page1":"page1.html",
		// },
		version:"",
        routers:{},

		//rootDir  	[Need] -----指定资源发布的路径与routers中的资源路径需一致，如/webapp/
		rootDir:"/webapp/",


		//bodyStyle:"background:red;",   				//bodyStyle [Option]----- BU可自行添加body节点的样式   

		//fontSizeBase:20,								//fontSizeBase [Option]-----指定浏览器fontSize如果不指定则使用框架默认的100 

		//TDK:{											//TDK 		[Option]-----BU在Head头部自行添加一些标签和SEO所需的TDK信息 
		// 	"metaA":'<meta name="screen-orientation" content="portrait">',
		// 	"metaB":'<meta name="x5-orientation" content="portrait">'
		// },

		//penddingTitle：'CRNWEB Demo',					//penddingTitle	 [Option] -----设置htmlTitle信息，默认为空 			

		//injectPluginsAtHeadEnd 'CRNWEB Demo',			//penddingTitle [Option]-----设置htmlTitle信息，默认为空 

		//injectPluginsAtHeadEnd: function () {       //injectPluginsAtHeadEnd [Option]------- 在head的最后执行这个片段的代码 
		// 	(function (doc, win) {
		// 			//设置viewport --解决fontSize浏览器默认最小值12px的问题
		//           var scale=.5;
		//			 var viewport = document.querySelector('meta[name="viewport"]');
		//			 var viewport_content = 'width=device-width,initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no';
		//			 viewport && viewport.setAttribute('content', viewport_content);
		// 	})(document, window);
		//},


		//injectPluginsAtBodyEnd:function(){       		//injectPluginsAtBodyEnd [Option] ------- 在body的最后执行这个片段的代码 
		// 	(function() {})()
		//},


		//injectPluginsAtNoSupport:function(rootElement,shouldStopReactScript){		//injectPluginsAtNoSupport  [Option] -------当浏览器不支持flex相关布局时则会执行这个回调，如果不设置则出框架默认的不支持的提示框 
		// 	//在cw不支持渲染时 跳转到老版首页											// 参数 rootElement <Object> ---为适配页的根节点 ,shouldStopReactScript <Function> ---停止页面其他脚本执行
		// 	location.href = 'https://m.ctrip.com/webapp/flightactivity/assets/preciseLowprice/preciseLowprice.html'
		//}
	};
}))

