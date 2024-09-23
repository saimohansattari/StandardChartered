import React from 'react'
import { View } from 'react-native'
import { styles } from '../../Stylings/Stylesheet'
import Camera from '../CameraComponent/Camera'
function Invest() {
  return (
    <View  style={styles.MainSection3}>
        {/* <Text>Invest Page!</Text> */}
        <Camera />
    </View>
  )
}

export default Invest