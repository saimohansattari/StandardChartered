import React from 'react'
import { Alert, Image, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { styles } from '../Stylings/Stylesheet'
import Standard_Chartered_Logo from '../assets/Standard_Chartered_Logo.png'


function Header() {
  return (
    <View style={styles.MainHeader}>
        < Image style={styles.Logo} source={Standard_Chartered_Logo} />
        <Icon name="bell" size={25} color='gray' onPress={() => {Alert.alert('No Notifications')}} />
    </View>
  )
}

export default Header