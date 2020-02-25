import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text
} from 'react-native';
const icon = {
    'downtown' : <Text>&#xee91;</Text> ,
    'h-internet' : <Text>&#xee92;</Text> ,
    'h-home-line' : <Text>&#xee93;</Text> ,
    'h-currency' : <Text>&#xee94;</Text> ,
    'h-adult' : <Text>&#xee95;</Text> ,
    'h-write' : <Text>&#xee96;</Text> ,
    'ibu-banner' : <Text>&#xee97;</Text> ,
    'ibu-api' : <Text>&#xee98;</Text> ,
    'lightning' : <Text>&#xee99;</Text> ,
    'ift_entertainment' : <Text>&#xee9a;</Text> ,
    'ift_meals' : <Text>&#xee9b;</Text> ,
    'ift_wifi' : <Text>&#xee9c;</Text> ,
    'paying' : <Text>&#xee9d;</Text> , //支付中
    'star3': <Text>&#xee9e;</Text> , //星标
    'tax':<Text>&#xee9f;</Text>,//印花税
    'exchange':<Text>&#xed6b;</Text>,
    'clear':<Text>&#xed75;</Text>,
    'back':<Text>&#xed6c;</Text>,


    'bus' : <Text>&#xee42;</Text> ,
    'flight-train' : <Text>&#xee41;</Text> ,
    'hotel' : <Text>&#xedaa;</Text> ,
    'calendar-o' : <Text>&#xee50;</Text> ,
    'cangwei' : <Text>&#xee51;</Text> ,

    'i-warn' : <Text>&#xed78;</Text>,
    'i-close' : <Text>&#xed72;</Text>,
    'region' : <Text>&#xee44;</Text> ,
    'h-some-rooms' : <Text>&#xee3e;</Text> ,
    'chaxun_kuang' : <Text>&#xee3d;</Text> ,
    'rightcircle' : <Text>&#xee3f;</Text> , //勾带圆圈
    'global':<Text>&#xee43;</Text>,//国家
    'surrounding':<Text>&#xee46;</Text>,//周边
    'exclamation' : <Text>&#xee0c;</Text> , //带底色信息
    'selected' : <Text>&#xee06;</Text> ,

    'reflightticket' : <Text>&#xee2e;</Text> , //重选机票
    'Information': <Text>&#xed78;</Text> , //边框信息
    'infomation' : <Text>&#xee16;</Text> , //带底色信息2
    'inroomsafe':<Text>&#xee2a;</Text>,//inroom safe
    'jijiu':<Text>&#xee30;</Text>,//有机场城市
    'airportcity':<Text>&#xee30;</Text>,//有机场城市
    'noairportcity':<Text>&#xedaa;</Text>,//无机场城市
    'group-company':<Text>&#xedaa;</Text>,//无机场城市
    'business' : <Text>&#xedf4;</Text> ,
    'plt_edit' : <Text>&#xee0b;</Text> , //带笔的编辑
    'warn' : <Text>&#xee14;</Text> , //对号带圆圈
    'meetingroom':<Text>&#xee29;</Text>,//meeting room
    'arrow_left':<Text>&#xee38;</Text>,//arrow_left
    'call':<Text>&#xee1e;</Text>,//电话
    'logo':<Text>&#xeb9e;</Text>,//完成页 已确认
    'sub-arrow':<Text>&#xee37;</Text> , //联想下一级
    'closed' : <Text>&#xed75;</Text> , //关闭带圆圈
    'closed-line' : <Text>&#xed75;</Text> , //关闭带圆圈
    'zuanji_half' : <Text>&#xed83;</Text> ,
    'xingji_half' : <Text>&#xed8a;</Text> ,
    'times' : <Text>&#xee05;</Text> , //时间
    'time':<Text>&#xed7f;</Text> , //时间
    'hotel-diam' : <Text>&#xed84;</Text> ,
    'h-star' : <Text>&#xed8b;</Text> ,
    'district' : <Text>&#xedb3;</Text> ,
    'adult' : <Text>&#xe487;</Text> ,
    'child' : <Text>&#xe488;</Text> ,
    'infant' : <Text>&#xe489;</Text> ,
    'flight' : <Text>&#xed88;</Text> ,
    'flight2' : <Text>&#xee15;</Text> ,
    'shopping-bag' : <Text>&#xedaf;</Text> ,
    'crown-remarkable' : <Text>&#xeda7;</Text> ,
    'metro' : <Text>&#xedb0;</Text> ,
    'scenic-spot' : <Text>&#xedae;</Text> ,
    'train' : <Text>&#xedb2;</Text> ,
    'city' : <Text>&#xeda8;</Text> ,
    'landmark' : <Text>&#xedab;</Text> ,
    'metro-line' : <Text>&#xedac;</Text> ,
    'province' : <Text>&#xedad;</Text> ,
    'h-acreage' : <Text>&#xedbc;</Text> ,
    'h-bar' : <Text>&#xedbd;</Text> ,
    'h-breakfast' : <Text>&#xed85;</Text> ,
    'h-children' : <Text>&#xedd7;</Text> ,
    'h-floor' : <Text>&#xedbe;</Text> ,
    'h-no-smoking' : <Text>&#xedbf;</Text> ,
    'h-occupant' : <Text>&#xedc0;</Text> ,
    'h-wifi' : <Text>&#xedc1;</Text> ,
    'h-window' : <Text>&#xedc2;</Text> ,
    'h-beach' : <Text>&#xedc3;</Text> ,
    'h-hot-spring' : <Text>&#xedc4;</Text> ,
    'h-scenery' : <Text>&#xedd9;</Text> ,
    'h-shower' : <Text>&#xedc5;</Text> ,
    'h-swimming' : <Text>&#xedc6;</Text> ,
    'h-air-conditioning' : <Text>&#xedc7;</Text> ,
    'h-kitchen' : <Text>&#xedc8;</Text> ,
    'h-bowling' : <Text>&#xedc9;</Text> ,
    'h-fishing' : <Text>&#xedca;</Text> ,
    'h-football' : <Text>&#xedcb;</Text> ,
    'h-game' : <Text>&#xedcc;</Text> ,
    'h-beauty' : <Text>&#xedda;</Text> ,
    'h-library' : <Text>&#xedcd;</Text> ,
    'h-nightclub' : <Text>&#xedce;</Text> ,
    'h-pingpang' : <Text>&#xedcf;</Text> ,
    'h-multi-lang' : <Text>&#xeddb;</Text> ,
    'h-smoking' : <Text>&#xedd0;</Text> ,
    'h-tea' : <Text>&#xedd1;</Text> ,
    'h-tennis' : <Text>&#xedd2;</Text> ,
    'h-awaken' : <Text>&#xedd3;</Text> ,
    'h-golf' : <Text>&#xedd4;</Text> ,
    'h-water-sports' : <Text>&#xedd5;</Text> ,
    'h-squash' : <Text>&#xede0;</Text> ,
    'h-luggage' : <Text>&#xedd6;</Text> ,
    'h-ballroom' : <Text>&#xeddc;</Text> ,
    'h-basketball' : <Text>&#xeddd;</Text> ,
    'h-beach-volleyball' : <Text>&#xedde;</Text> ,
    'h-billiards' : <Text>&#xeddf;</Text> ,
    'h-atm' : <Text>&#xede1;</Text> ,
    'h-function-room' : <Text>&#xede2;</Text> ,
    'h-other' : <Text>&#xede3;</Text> ,
    'h-park' : <Text>&#xede4;</Text> ,
    'h-pickup' : <Text>&#xede5;</Text> ,
    'h-sauna' : <Text>&#xede6;</Text> ,
    'h-service' : <Text>&#xede7;</Text> ,
    'h-mall' : <Text>&#xede8;</Text> ,
    'h-shuttle-bus' : <Text>&#xede9;</Text> ,
    'h-ski' : <Text>&#xedea;</Text> ,
    'h-snorkeling' : <Text>&#xedeb;</Text> ,
    'h-spa' : <Text>&#xedec;</Text> ,
    'h-sunbathing' : <Text>&#xeded;</Text> ,
    'h-ktv' : <Text>&#xedee;</Text> ,
    'h-fa-hot' : <Text>&#xedef;</Text> ,
    'h-gym' : <Text>&#xedf0;</Text> ,
    'h-diving' : <Text>&#xedf1;</Text> ,
    'h-coffee' : <Text>&#xedf2;</Text> ,
    'h-casino' : <Text>&#xedf3;</Text> ,
    'h-business' : <Text>&#xedf4;</Text> ,
    'h-rental' : <Text>&#xedf5;</Text> ,
    'h-24h' : <Text>&#xedf6;</Text> ,
    'h-laundry' : <Text>&#xedf7;</Text> ,
    'h-massage' : <Text>&#xedf8;</Text> ,
    'h-ironning' : <Text>&#xedf9;</Text> ,
    'h-position' : <Text>&#xedfa;</Text> ,
    'h-receptionist' : <Text>&#xedfb;</Text> ,
    'h-room-facility' : <Text>&#xedfc;</Text> ,
    'h-creditcard' : <Text>&#xedfd;</Text> ,
    'h-multi-bed' : <Text>&#xed89;</Text> ,
    'h-bed' : <Text>&#xed82;</Text> ,
    'h-double-bed' : <Text>&#xed86;</Text> ,
    'h-clean' : <Text>&#xedfe;</Text> ,
    'h-general' : <Text>&#xedff;</Text> ,
    'h-media' : <Text>&#xee00;</Text> ,
    'ic_fa_wheelchair' : <Text>&#xee01;</Text> ,
    'h-pet' : <Text>&#xee03;</Text> ,
    'arrow-one-way' : <Text>&#xed81;</Text> ,
    'lianxiren' : <Text>&#xee04;</Text> ,
    'unselected' : <Text>&#xed74;</Text> ,
    'search_hotel' : <Text>&#xeda9;</Text> ,
    'fridge' : <Text>&#xee07;</Text> ,
    'duoyuyan' : <Text>&#xee08;</Text> ,
    'youxianwanluo' : <Text>&#xedd8;</Text> ,
    'search' : <Text>&#xed7e;</Text> , //搜索放大镜
    'drop_down':<Text>&#xee21;</Text> , //实心下箭头
    'drop_up':<Text>&#xee22;</Text> , //实心上箭头
    'top':<Text>&#xee23;</Text>,//top
    'ic_wow_gift':<Text>&#xee02;</Text> , //礼
    'jiudiantese':<Text>&#xedb1;</Text> , //酒店特色
    'h-location' : <Text>&#xed7d;</Text> ,
    'tips':<Text>&#xed80;</Text> ,
    'h-diamonds' : <Text>&#xed81;</Text> ,
    'details': <Text>&#xed77;</Text> ,
    'filter':<Text>&#xee24;</Text>,
    'sort':<Text>&#xee25;</Text>,
    'area':<Text>&#xee26;</Text>,
    'flightclass_down':<Text>&#xee27;</Text>,
    'flightclass_up':<Text>&#xee28;</Text>,
    'text':<Text>&#xef06;</Text>,
    'plus_line':<Text>&#xed7b;</Text>,

    'e-ticket':<Text>&#xf031;</Text>,
    'checkbox':<Text>&#xee20;</Text>,
    'changeflight':<Text>&#xf032;</Text>,
    'fightpolicy':<Text>&#xf033;</Text>,
    'true':<Text>&#xf0a1;</Text>,
    'checkbox_cur':<Text>&#xee1f;</Text>,

}

const iconCommon = {
    'clear' : <Text>&#xe63b;</Text> , //清除&#xed75;
    'close' : <Text>&#xe782;</Text> , //关闭
    'delete' : <Text>&#xe657;</Text> , //删除
    'info' : <Text>&#xe648;</Text> , //信息
    'right' : <Text>&#xe618;</Text> , //单选勾
    'arrow-right' : <Text>&#xe62a;</Text> , //箭头-右
    'arrow-down' : <Text>&#xe61f;</Text> , //箭头-下
    'arrow-top' : <Text>&#xe629;</Text>,  //箭头-上
    'arrow-left' : <Text>&#xe61a;</Text>,  //箭头-左
    'arrow-left-android' : <Text>&#xe77e;</Text>,  //箭头-左安卓
    'plus-add' : <Text>&#xe64e;</Text>,  //带底色的加
    'plus-minus' : <Text>&#xe64a;</Text>,  //带底色的减
    'plus-add-line' : <Text>&#xe64b;</Text>,  //不带底色的加
    'plus-minus-line' : <Text>&#xe649;</Text>,  //不带底色的减
    'check-square-line' : <Text>&#xe641;</Text>,  //复选框 未选中
    'check-square' : <Text>&#xe631;</Text>,  //复选框 选中
    'search' : <Text>&#xe6f3;</Text>,  //搜索放大镜
    'ic_order_time':<Text>&#xe65f;</Text>,//完成页 三点时钟
    'ic_order_absolute':<Text>&#xe65e;</Text>,//完成页 已确认
  }

  export class FontIcon extends Component {
    static propTypes = {
        fontType : PropTypes.oneOf(Object.keys(icon))
    }
    render(){
        const propsStyle = this.props.style,
            fontType = this.props.fontType || 'flight'
        return(
            <Text style={[styles.crn_font,propsStyle]}>{icon[fontType]}</Text>
        );
    }
}

const styles = StyleSheet.create({
    crn_font: {
        fontFamily: 'crn_font_ibudiytour',
        color: '#333',
        fontWeight: 'normal',
    },
})
