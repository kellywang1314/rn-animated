/**
 * Sample Ctrip React Native App
 * http://crn.site.ctripcorp.com/
 * @flow
 */

'use strict';

import React, { Component } from 'react';

import {
	Text,
	TouchableOpacity,
	View,
	StyleSheet
} from 'react-native';

import {
	Page,
	ViewPort,
	Button,
	HeaderView	
} from '@ctrip/crn';
import { defaultColors } from './constants/index'
import FadeInOpacity from './components/fadeInOpacity'
import FromToAreaButInner from './components/fromToAreaButInner'
export default class Page2 extends Page {
	constructor(props){
		super(props)
		this.state={
			type:'',
			isVisible:false
		}
	}

	handleVisible = () => {
		this.setState({
			isVisible:false
		})
	}
	render() {
		const list = [
			'FadeInOpacity',
			'FromToAreaButInner'
		]
		const {isVisible,type} = this.state
		return (
			<ViewPort>
				<HeaderView title="Page2"  page={this}/>
					<View style={styles.container}>
						{list.map((item,index) => (
							<TouchableOpacity
								key={index}
								style={styles.button}
								onPress={()=> {
									this.setState({
										type:item,
										isVisible:true
									})
								}}
							>
								<Text style={styles.text}>{item}</Text>
							</TouchableOpacity>
						))}
						{isVisible && type==='FadeInOpacity' && <FadeInOpacity handleVisible={this.handleVisible}/>}
						{isVisible && type==='FromToAreaButInner' && <FromToAreaButInner handleVisible={this.handleVisible}/>}
					</View>	
			</ViewPort>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	button: {
		backgroundColor: defaultColors.blue01,
		padding:10,
		marginVertical:5,
		borderRadius:5
	},
	text:{
		color:defaultColors.white,
		fontSize: 12,
	}
});