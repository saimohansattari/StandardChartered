import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../Stylings/Stylesheet';
import DoughnutChart from '../charts/DoughnutChart';


function Home() {

  const handleTextClick = () => {
    console.log("working")
  }

  const transactionData = [
    {
      key: 1,
      date: "Thu, 01/08/2024",
      label: "IKEA",
      description: "Secure your home contents with Standard Chartered's insurance for Furniture and Appliances.",
      amount: "-4,000",
      url:"Furniture Insurance specially selected for you."
    },
    {
      key: 2,
      date: "Fri, 02/08/2024",
      label: "Amazon",
      description: "Protect your trip with Standard Chartered's ",
      amount: "-2,500",
      url:"Travel Insurance specially selected for you."
    },
    {
      key: 3,
      date: "Sat, 03/08/2024",
      label: "Starbucks",
      description: "Coffee and snacks for the morning.",
      amount: "-150",
      url:""
    },
    {
      key: 4,
      date: "Sun, 04/08/2024",
      label: "Walmart",
      description: "Secure your home contents with Standard Chartered's insurance for Furniture and Appliances. Furniture Insurance specially selected for you.",
      amount: "-800",
      url:"know more...."
    },
    {
      key: 5,
      date: "Mon, 05/08/2024",
      label: "Apple Store",
      description: "New iPhone purchase.",
      amount: "-1,200",
      url:""
    },
    {
      key: 6,
      date: "Tue, 06/08/2024",
      label: "Uber",
      description: "Ride to the office.",
      amount: "-50",
      url:""

    },
    {
      key: 7,
      date: "Wed, 07/08/2024",
      label: "Nike",
      description: "Purchase of new running shoes.",
      amount: "-120",
      url:"knowmore...."

    },
    {
      key: 8,
      date: "Thu, 08/08/2024",
      label: "Netflix",
      description: "Monthly subscription for streaming services.",
      amount: "-15",
      url:""

    },
    {
      key: 9,
      date: "Fri, 09/08/2024",
      label: "Best Buy",
      description: "Purchase of a new television set.",
      amount: "-500",
      url:""

    },
    {
      key: 10,
      date: "Sat, 10/08/2024",
      label: "Home Depot",
      description: "Tools and supplies for home improvement.",
      amount: "-300"
    }
  ];

  return (
    <View style={styles.MainSection2}>
      <ScrollView>
      <View style={styles.primaryCard}>
        <Text>Consolidated Investment Summary</Text>
        <DoughnutChart />
      </View>

      <View style={styles.secondaryCard}>
        <View style={styles.grayCard}>
          <Text style={styles.largeText}>Transactions This Month {'\n'}
          01/08/2024 - 31/08/2024</Text>
        </View>

        
      
        <View style={{gap:5, paddingTop:20}} >
         {transactionData.map((content) => (
           <View key={content.key} style={styles.contentCard}>
           <Text style={{ fontSize:12,color:'gray'}}>{content.date}</Text>
           <Text style={{fontSize:19, fontWeight:'bold'}}>{content.label}</Text>
           <Text style={{fontSize:12, color:'#555', }}>{content.description}  {content.url ? (

                    <TouchableOpacity onPress={() => console.log("working hey.....")}>
                      <Text style={{ color: 'blue', fontSize:12, }}>
                        {content.url}
                      </Text>
                    </TouchableOpacity>
                  ) : null}
           </Text>
           <Text style={{ fontSize:14, fontWeight:'bold', textAlign:'right', marginTop:10,}}>HK$ <Text style={styles.redSpan}>{content.amount}</Text> </Text>
         </View>
         ))}

        </View>
        

      </View>
      </ScrollView>
     
    </View>
  )
}

export default Home