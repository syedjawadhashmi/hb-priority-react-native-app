import {StyleSheet, Text, View} from 'react-native';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
import * as Progress from 'react-native-progress';

interface ProgressBarsType{
colors?:any,
rating?:any,
title?:any,
container?:any

}

const ProgressBars = (props:ProgressBarsType) => {
    const{colors,rating,title,container}=props
  return (
    <View style={[container]} >
      <View style={[styles.container]}>
        <Text style={styles.titel}>{title}</Text>
        <Text style={{...styles.number,color:colors?colors:"red"}}>{rating}</Text>
      </View>
      <Progress.Bar
        color={colors?colors:"red"}
        progress={rating}
        width={320}
        height={17}
        style={{
          alignSelf: 'center',
          borderRadius: 20,
          backgroundColor: COLOR.white1,
        }}
      />
    </View>
  );
};
export default ProgressBars;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.verticleView,
    paddingHorizontal: '7%',
    marginBottom:'1%'
  },
  titel: {
    fontSize: 10,
    fontWeight: '700',
    color: COLOR.gray_5,
  },
  number: {fontSize: 10, fontWeight: '700'},
});
