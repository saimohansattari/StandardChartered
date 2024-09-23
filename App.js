import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Discovery from './Components/PageComponents/Discovery';
import Home from './Components/PageComponents/Home';
import Invest from './Components/PageComponents/Invest';
import Payment from './Components/PageComponents/Payment';
import Service from './Components/PageComponents/Service';


export default function App() {


  const Stack = createStackNavigator();
  return (
    <NavigationContainer>  
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Header />
      
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="Payment" component={Payment} options={{headerShown: false}} />
          <Stack.Screen name="Invest" component={Invest} options={{headerShown: false}} />
          <Stack.Screen name="Discovery" component={Discovery} />
          <Stack.Screen name="Service" component={Service} />
        </Stack.Navigator>
    

      <NavBar />
    </View>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding:5,
    flex: 1,
    backgroundColor: 'white',
    
  },
});
