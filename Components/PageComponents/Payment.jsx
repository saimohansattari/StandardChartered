import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { styles } from '../../Stylings/Stylesheet';


function Payment() {
  const[data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakerestapi.azurewebsites.net/api/v1/Activities").then((res) => {
      
      setData(res.data)
     
    }).catch((err) => {
      console.log(err)
    })
    return () => {
      
    };
  }, []);
  return (
    <View style={styles.MainSection3}>
      
      <ScrollView  showsVerticalScrollIndicator={false} >
      <View style={{gap:5, paddingTop:20}}>
        {data.length > 0 ? (
          data.map((activity) => (
            <View style={styles.contentCard} key={activity.id}>
              <Text style={{fontSize:14, fontWeight:'bold'}} >{activity.title}</Text>
              <Text style={{fontSize:12, color:'#555', }}>{activity.dueDate}</Text>
              <Text style={{ fontSize:14, fontWeight:'bold', textAlign:'right', marginTop:10, color: activity.completed ? "#38d200" : "tomato"}} >{activity.completed ? ' Completed' : 'Pending'}</Text>
            </View>
          ))
        ) : (
          <View style={styles.MainSection3}>
            <ActivityIndicator color='#218eff' size={44} />
          </View>
        )} 
      </View>
        
        
      </ScrollView>
    </View>
  )
}

export default Payment