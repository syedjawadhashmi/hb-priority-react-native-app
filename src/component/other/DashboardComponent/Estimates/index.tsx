import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {COLOR, commonStyles, normalize, wp} from '../../../../themes/StyleGuides';
import Slider from '@react-native-community/slider';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

const Estimates = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Estimates</Text>
      <View style={styles.amountCintainer}>
        <Text style={styles.amountTitle}>Number Of Estimates</Text>
        <Text style={{...styles.amountTitle, fontWeight: '700'}}>96</Text>
      </View>
      <LinearGradient
        colors={['#A8ABB2', '#A8ABB2', '#D5DDEF']}
        style={styles.slitedContainer}>
        <Slider
                thumbTintColor={COLOR.primary}
          style={{width:  wp(32)}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={COLOR.primary}
          maximumTrackTintColor="#000000"
        />
      </LinearGradient>
      <View style={styles.amountCintainer}>
        <Text style={styles.amountTitle}>Dollar Value</Text>
        <Text style={{...styles.amountTitle, fontWeight: '700'}}>$199.696</Text>
      </View>
      <LinearGradient
        colors={['#A8ABB2', '#A8ABB2', '#D5DDEF']}
        style={styles.slitedContainer}>
        <Slider
        thumbTintColor={COLOR.primary}
          style={{width: wp(32)}}
          minimumValue={7.3}
          maximumValue={10}
          minimumTrackTintColor={COLOR.primary}
          maximumTrackTintColor="#000000"
        />
      </LinearGradient>
    </View>
  );
};
export default Estimates;

const styles = StyleSheet.create({
  container: {
    width: width * 0.3,
    height: 107,
    borderWidth: 1.5,
    borderRadius: 25,
    backgroundColor: COLOR.gray_9,
    borderColor: COLOR.perpal_3,
  },
  Title: {
    fontSize: normalize(10),
    fontWeight: '700',
    color: COLOR.black,
    marginTop: '5%',
    marginLeft: '10%',
  },
  slitedContainer: {
    width: '90%',
    alignSelf: 'center',
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  amountTitle: {fontSize: normalize(7), fontWeight: '700', color: COLOR.gray_5},
  amountCintainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
    marginVertical: '5%',
  },
});
