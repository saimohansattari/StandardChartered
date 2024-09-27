import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { styles } from '../../Stylings/Stylesheet';


function Payment() {
  const[data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakerestapi.azurewebsites.net/api/v1/Activities").then((res) => {
      
      console.log(res)
      setData(res.data)
     
    }).catch((err) => {
      console.log(err)
    })
    return () => {
      
    };
  }, []);
  return (
    <View style={styles.MainSection3}>
      <ScrollView >
        {data.length > 0 ? (
        data.map((activity) => (
          <View key={activity.id}>
            <Text>{activity.title}</Text>
            <Text>{activity.dueDate}</Text>
            <Text>{activity.completed ? 'Completed' : 'Pending'}</Text>
          </View>
        ))
      ) : (
        <View style={styles.MainSection3}>
          <ActivityIndicator color='#218eff' size={44} />
        </View>
      )} 
      </ScrollView>
    </View>
  )
}

export default Payment