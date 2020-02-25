/**
 * Sample Ctrip React Native App
 * http://crn.site.ctripcorp.com/
 * @flow
 */

'use strict';

import React, { Component } from 'react';

import {
	App,
	CRNDev 
} from '@ctrip/crn';

import page2 from './src/Animated/Page2'

if(__DEV__){
	CRNDev.registryIconFont(
	  {
		fontList: ["http://127.0.0.1:5389/fonts/crn_font_ibudiytour.ttf?20190830"]
	  },
	  result => {
		console.log("ttf文件安装" + (result ? "成功" : "失败"));
	  }
	);
  }

const pages = [
	{
	    component:page2,
		name:'page2',
		isInitialPage:true
	}
];

//全局导航栏配置
const navigationBarConfig = {
	hide:true, // 默认为 false
	backgroundColor:'rgb(9, 159, 222)', // 导航栏背景色,默认为携程标准蓝 rgb(9, 159, 222)
};

class RNanimate extends App {
	constructor(props) {
		super(props);
		this.init({pages, navigationBarConfig});// navigationBarConfig 可不传
	}
}

module.exports = RNanimate