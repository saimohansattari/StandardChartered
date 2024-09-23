import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
// import { PieChart } from 'react-native-chart-kit';
// import { PieChartPro } from 'react-native-gifted-charts';

const DoughnutChart = () => {
  const data = [
    {
      key: 1,
      amount: 50,
      svg: { fill: '#4d9aed' },
      label: 'Bank Balance',
    },
    {
      key: 2,
      amount: 30,
      svg: { fill: '#6badf3' },
      label: 'Deposits',
    },
    {
      key: 3,
      amount: 20,
      svg: { fill: '#99c4f3' },
      label: 'Investments',
    },
    {
      key: 4,
      amount: 40,
      svg: { fill: '#d6d6d6' },
      label: 'Alternative Investments',
    },
  ];

  const Labels = ({ slices }) => {
    return slices.map((slice, index) => {
      const { pieCentroid, data } = slice;
      const labelX = pieCentroid[0] * 1.5; 
      const labelY = pieCentroid[1] * 1.5; 
      return (
        <Text
          key={index}
          x={labelX}
          y={labelY}
          fill="black"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize={12}
        >
          {data.label}
        </Text>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <PieChart
          style={styles.chart}
          valueAccessor={({ item }) => item.amount}
          data={data}
          spacing={0}
          outerRadius="100%"
          innerRadius="75%"
        >
        </PieChart>
        <View style={styles.centerTextContainer}>
          <Text style={styles.centerText}>
            Asserts{'\n'}Allocation
          </Text>
        </View>
      </View>
      <View style={styles.legendContainer}>
        {data.map((item) => (
          <View key={item.key} style={styles.label}>
            <View style={[styles.colorBox, { backgroundColor: item.svg.fill }]} />
            <Text style={styles.labelText}>{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8eef2',
    padding: 10,
  },
  chartContainer: {
    position: 'relative',
  },
  chart: {
    backgroundColor:'white',
    borderRadius:160,
    height: 150,
    width: 150,
  },
  centerTextContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
    backgroundColor: 'transparent', 
  },
  legendContainer: {
    marginLeft: 20,
  },
  label: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  colorBox: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  labelText: {
    fontSize: 12,
    color: 'black',
  },
});

export default DoughnutChart;
