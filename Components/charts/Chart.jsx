import React from 'react';
import { Dimensions, View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const Chart = () => {
  const screenWidth = Dimensions.get('window').width;

  const data = [
    { name: 'January', population: 2150000, color: '#f00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'February', population: 2800000, color: '#0f0', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'March', population: 527612, color: '#00f', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'April', population: 8538000, color: '#ff0', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'May', population: 11920000, color: '#0ff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];

  return (
    <View>
      <PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={{
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        absolute
      />
    </View>
  );
};

export default Chart;
