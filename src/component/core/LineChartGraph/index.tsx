import {Dimensions, StyleSheet, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {COLOR} from '../../../themes/StyleGuides';

const LineChartGraph = () => {
  const chartsData = {
    labels: [
      'Jan 2024',
      'Feb 2024',
      'Mar 2024',
      'Apr 2024',
      'May 2024',
      'Jun 2024',
    ],
    datasets: [
      {
        data: [2000, 5000, 2000, 4000, 5000, 2000],
        strokeWidth: 7,
      },
    ],
  };

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <LineChart
        data={chartsData}
        width={screenWidth * 0.7}
        height={160} // Fixed height
        yAxisSuffix=""
        // yAxisInterval={100}
        chartConfig={{
          height: 160,
          
          barPercentage: 5,
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffff',
          decimalPlaces: 0,
          color: () => '#1A1A1A99',
          labelColor: () => COLOR.black,
          propsForDots: {
            r: '0', // Remove dots
          },
          propsForBackgroundLines: {
            strokeDasharray: '0',
            stroke: '#444444', // Custom color for background lines
            strokeWidth: 1, // Remove dashed background lines
          },
          propsForLabels: {
            fontSize: 7,
            rotation: -30,
            
          },
        }}
        style={styles.chart}
        bezier
        verticalLabelRotation={-30}
        fromZero
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 10,
  },
  chart: {
    borderRadius: 16,
    // width:100,
    right: 20,
  },
});

export default LineChartGraph;
