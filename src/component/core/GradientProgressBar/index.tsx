import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';

interface propType {
  progress?: any;
  colors?: any;
  colors1?: any;
  colors2?: any;
  colors3?: any;
  backColor?:any,
  container?:any,
  containers2?:any
}
const GradientProgressBar = (props: propType) => {
  const {progress, colors1, colors2, colors3,backColor,container,containers2} = props;
  const progressPercentage = `${progress}%`;
  return (
    <View
      style={[container,{
        alignItems: 'center',
        // marginTop: '3%',
        marginVertical:'1.5%',
        ...commonStyles.horizontalView,
        
      }]}>
      <View style={[styles.progressBarBackground,containers2,{backgroundColor:backColor?backColor:COLOR.gray_9}]}>
        <LinearGradient
          colors={[colors1, colors2, colors3]} // Customize gradient colors here
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={[styles.progressBarFill, {width: progressPercentage}]}
        />
        <Text style={styles.progressNumber}>{progress}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarBackground: {
    width: '80%',
    height: 8,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
    ...commonStyles.horizontalView,
    
  },
  progressBarFill: {
    height: '100%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  progressText: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  progressNumber: {
    fontSize: 6,
    fontWeight: '400',
    color: COLOR.gray_5,
    marginLeft: '5%',
  },
});

export default GradientProgressBar;
