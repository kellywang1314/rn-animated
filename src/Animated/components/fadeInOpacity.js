import React, { useEffect,useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    Easing,
    Image 
} from 'react-native'
import { LinearGradient } from "@ctrip/crn"
const FadeInOpacity = (props) => {
    const { handleVisible } = props
    const [fadeInOpacity] = useState(new Animated.Value(0))
    let timer1, timer2
    const startAnima = () => {
        Animated.timing(fadeInOpacity, {
            toValue:1,
            duration:2000,
            easing:Easing.linear
        }).start()
    }
    const endAnima = () => {
        Animated.timing(fadeInOpacity, {
            toValue:0,
            duration:2000,
            easing:Easing.linear
        }).start()
     }
    useEffect(() => {
        startAnima() 
        // 注意消失动画开始时间+动画持续时间=开始执行设置isVisible为false的时机
        timer1 = setTimeout(() => {
            endAnima()
        },3000)
        timer2 = setTimeout(() => {
            clearTimeout(timer1)
            handleVisible()
            clearTimeout(timer2)
        },5000)
        
    })
    return (
        <Animated.View style={[styles.cancelContainer,{opacity: fadeInOpacity}]}>
            <LinearGradient
                style={styles.cancelBox}
                start={{x:0.0, y:0.0}}
                end={{x:1.0,y:1.0}}
                colors={['#F9D9C4','#FCE9DA','#F9D9C4']}
                locations={[0,0.5,1.0]}    
            >
                <TouchableOpacity
                    style={styles.cancelTouch}
                >
                    <Image 
                        style={styles.canlcelimg} 
                        source={{uri:'https://pic.c-ctrip.com/VacationH5Pic/taocan/dp2/vip_diytour_s.png'}} 
                    />
                    <View style={{flex:1}}>
                        <Text style={styles.cancelVip}>
                            超级会员
                        </Text>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Text style={styles.cancelHas}>部分行程享有
                                <Text style={{color:'#ff6600',fontWeight:'700'}}>
                                    免费取消订单权益
                                </Text>
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View>
                    <Text>
                        5S后关闭
                    </Text>
                </View>
            </LinearGradient>
        </Animated.View>
    )
}

export default FadeInOpacity
const styles = StyleSheet.create({
    cancelContainer:{
        position:'absolute',
        bottom:60,
        left:0,
        right:0
    },
    cancelBox:{
        paddingVertical:10,
        paddingHorizontal:12,
        borderRadius:6,
        flexDirection:'row',
        alignItems:'center',
        minHeight:56,
        margin:12
    },
    cancelTouch:{
        flexDirection:'row',
        alignItems:'center',
        flex:1
    },
    canlcelimg:{
        height:28, 
        width:28, 
        marginRight:6
    },
    cancelVip:{
        fontWeight:'700',
        fontSize:15,
        color:'#5F3006',
        lineHeight:19,
    },
    cancelHas:{
        fontWeight:'400',
        fontSize:12,
        color:'#5F3006',
        lineHeight:15,
        marginTop:2
    },
    IconThinEnter:{
        color:'#5F3006',
        fontSize:12,
        width:12,
        height:12,
        lineHeight:15
    },
    IconClose:{
        color:'#5F3006',
        fontSize:14,
        width:14,
        height:14,
        marginLeft:4
    },

    cancelClose:{
        fontWeight:'200',
        fontSize:11,
        color:'#5F3006',
        lineHeight:12
    }

    
})





