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
       <View style={styles.navbarContent0}>
        <TouchableOpacity onPress={() =>  {navigation.navigate('Home')}}>
                <View style={styles.navbarContent1} >
                    <Icon name='home' style={styles.navbarIcons} size={24} />
                    <Text style={styles.smallText}>Home</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => {navigation.navigate('Payment')}}>
                <View style={styles.navbarContent1}>
                    <Icon name='exchange' style={styles.navbarIcons}  size={24} />
                    <Text style={styles.smallText}>Pay</Text>
                </View >
            </TouchableOpacity>
       </View>

      <TouchableOpacity onPress={() => {navigation.navigate('Invest')}}>
        <View style={styles.navbarContent1} >
                <Icon name='camera' style={styles.navbarIcons}  size={48}  />
                {/* <Text>Camera</Text> */}
            </View>
      </TouchableOpacity>

       <View style={styles.navbarContent0}>
            <TouchableOpacity onPress={() => {navigation.navigate('Discovery')}}>
                    <View style={styles.navbarContent1}>
                        <Icon name='shopping-cart' style={styles.navbarIcons}  size={24} />
                        <Text style={styles.smallText}>Discover</Text>
                    </View>
                </TouchableOpacity>

            <TouchableOpacity onPress={() => {navigation.navigate('Service')}}>
                    <View style={styles.navbarContent1}>
                        <Icon name='gear' style={styles.navbarIcons}  size={24} />
                        <Text style={styles.smallText}>Services</Text>
                    </View>
            </TouchableOpacity>
       </View>


      
        
    </View>
  )
}

export default NavBar