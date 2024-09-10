import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
// import { styles } from '../Stylings/Stylesheet'
import { styles } from '../Stylings/Stylesheet'

function NavBar() {
    const navigation = useNavigation();
  return (
    <View style={styles.Navbar}>
        <TouchableOpacity onPress={() =>  {navigation.navigate('Home')}}>
            <View style={styles.navbarContent} >
                <Icon name='home' style={styles.navbarIcons} size={22} />
                <Text>Home</Text>
            </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => {navigation.navigate('Payment')}}>
            <View style={styles.navbarContent}>
                <Icon name='exchange' style={styles.navbarIcons}  size={22} />
                <Text>Pay</Text>
            </View >
        </TouchableOpacity>

      <TouchableOpacity onPress={() => {navigation.navigate('Invest')}}>
        <View style={styles.navbarContent} >
                <Icon name='signal' style={styles.navbarIcons}  size={22}  />
                <Text>Invest</Text>
            </View>
      </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate('Discovery')}}>
            <View style={styles.navbarContent}>
                <Icon name='shopping-cart' style={styles.navbarIcons}  size={22} />
                <Text>Discover</Text>
            </View>
        </TouchableOpacity>

       <TouchableOpacity onPress={() => {navigation.navigate('Service')}}>
            <View style={styles.navbarContent}>
                <Icon name='gear' style={styles.navbarIcons}  size={22} />
                <Text>Services</Text>
            </View>
       </TouchableOpacity>


      
        
    </View>
  )
}

export default NavBar