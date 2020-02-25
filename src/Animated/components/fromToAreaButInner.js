import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    Easing,
    Image
} from 'react-native'
import {FontIcon} from '../../../fonts/front'
const FromToAreaButInner = () => {
    const [animatedValue] = useState(new Animated.Value(0))
    const [isDisable,setisDisable] = useState(false)
    const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)
    exchangeDestination = () => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 200
        }).start((event) => {
            if (event.finished) {
                console.log(event.finished)
                animatedValue.setValue(0)
                setisDisable(false)
            } else {
                setisDisable(true)
            }
        })
    }
    return (
        <AnimatedTouchableOpacity
            activeOpacity={1}
            onPress={exchangeDestination}
            disabled={isDisable}
            style={[
                {
                    transform: [
                        {
                            rotate: animatedValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0deg', '180deg']
                            })
                        }
                    ]
                }
            ]}
        >
        <FontIcon fontType={'chaxun_kuang'}/>
            
        </AnimatedTouchableOpacity>
    )
}
export default FromToAreaButInner

