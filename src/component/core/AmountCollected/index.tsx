import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import {COLOR} from '../../../themes/StyleGuides';

const {width, height} = Dimensions.get('window');

const AmountCollected = () => {
  const data = [
    {value: 5, label: 'Jan', frontColor: COLOR.perpal},
    {value: 20, label: 'Feb', frontColor: COLOR.perpal},
    {value: 30, label: 'Mar', frontColor: COLOR.perpal},
    {value: 10, label: 'Apr', frontColor: COLOR.perpal},
    {value: 20, label: 'May', frontColor: COLOR.perpal},
    {value: 20, label: 'Jun', frontColor: COLOR.perpal},
  ];

  return (
    <View style={styles.container}>
      <BarChart
        data={data}
        xAxisLabelsVerticalShift={10}
        barBorderTopLeftRadius={20}
        barBorderTopRightRadius={20}
        barWidth={width * 0.06} // Adjust bar width dynamically
        yAxisTextStyle={{color: COLOR.gray_5, fontSize: width * 0.03}}
        xAxisLabelTextStyle={{color: COLOR.gray_5, fontSize: width * 0.03}}
        showXAxisIndices={true}
        yAxisColor={COLOR.gray_7}
        rulesColor={COLOR.gray_5}
        rulesType="solid"
        height={height * 0.2} // Adjust chart height dynamically
        stepHeight={height * 0.02}
        stepValue={4}
        yAxisTextNumberOfLines={5}
        labelWidth={width * 0.1}
        frontColor={'red'}
        showLine={false}
      />
    </View>
  );
};

export default AmountCollected;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    padding: width * 0.0, // Add padding dynamically
  },
});
