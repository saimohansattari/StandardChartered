import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import Creditcard from '../../assets/Creditcard.png';
import { styles } from '../../Stylings/Stylesheet';

function Service() {
  
  return (
    <ScrollView>
     <View style={styles.MainSection}>
        <Image source={banner1} style={{ width: '100%',   }} />
        <Image source={banner2} style={{ width: '100%', }} />  
        <View  style={styles.tertiaryCard}>
          <Text style={styles.largeBlueSpan} >Protect the things you cherish</Text>
          <View style={{display:'flex', flexDirection:'row', flexWrap:"wrap", gap:20}}>
            <TouchableOpacity >
              <View style={styles.navCard }>
                <Icon name='plane' style={styles.serviceCardIcons} />
                <Text style={{ fontSize:12,color:'gray'}} >Travel</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity >
              <View style={styles.navCard}>
                <Icon name='home' style={styles.serviceCardIcons} />
                <Text style={{ fontSize:12,color:'gray'}} >Home</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity >
              <View style={styles.navCard}>
                <Icon name='heart' style={styles.serviceCardIcons} />
                <Text style={{ fontSize:12,color:'gray'}} >Health</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity >
              <View style={styles.navCard}>
                <Icon name='paw' style={styles.serviceCardIcons} />
                <Text style={{ fontSize:12,color:'gray'}} >Pets</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity >
              <View style={styles.navCard}>
                <Icon name='user' style={styles.serviceCardIcons} />
                <Text style={{ fontSize:12,color:'gray'}} >Helper</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity >
              <View style={styles.navCard}>
                <Icon name='file' style={styles.serviceCardIcons} />
                <Text style={{ fontSize:12,color:'gray', textAlign:'center'}} > Policies</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Image source={Creditcard} style={{ width: '100%',height:180,  objectFit:'contain' }}  />
          <TouchableOpacity style={styles.button} >
            <Text style={styles.blueSpan}>Apply For Card</Text>
          </TouchableOpacity>
        </View>
      
      </View>
    </ScrollView>
  
  );
}

export default Service;
