import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from '../../../../assest';
import {COLOR, commonStyles, normalize} from '../../../../themes/StyleGuides';
import {CircularProgressBase} from 'react-native-circular-progress-indicator';
import { inboxProp } from '../../../../data/Types';
const {width, height} = Dimensions.get('window');
const Invoices = (propes:inboxProp) => {
  const{onpress}=propes

  const props = {
    activeStrokeWidth: 25,
    inActiveStrokeWidth: 25,
    inActiveStrokeOpacity: 0.2,
  };
  return (
    <TouchableOpacity onPress={onpress} style={styles.container}>
      <View style={styles.ArrowCOntainer}>
        <Text style={styles.Title}>Invoices</Text>
        <TouchableOpacity>
        <Image source={Icon.RightlongArrow} style={styles.Arrow} />
        </TouchableOpacity>
      </View>

      <View style={{}}>
        <View style={styles.IndecatorCOntainer}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.ratingName}>Paid</Text>
            <CircularProgressBase
              {...props}
              value={80}
              radius={12}
              activeStrokeColor={COLOR.primary}
              inActiveStrokeColor={COLOR.gray_5}
              activeStrokeWidth={5}
              inActiveStrokeWidth={5}>
              <Text style={styles.persentage}>57</Text>
            </CircularProgressBase>
          </View>
          <Text style={{...styles.amout,color:COLOR.gray_5}}>$1.099.00</Text>
        </View>

        <View style={styles.IndecatorCOntainer}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.ratingName}>Unpaid</Text>

            <CircularProgressBase
              {...props}
              value={70}
              radius={12}
              activeStrokeColor={COLOR.perpal}
              inActiveStrokeColor={COLOR.gray_5}
              activeStrokeWidth={5}
              inActiveStrokeWidth={5}
              >
              <Text style={styles.persentage}>45</Text>
            </CircularProgressBase>
          </View>
          <Text style={styles.amout}>$899.00</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Invoices;

const styles = StyleSheet.create({
  container: {
    width: width * 0.3,
    height: 107,
    borderWidth: 1.5,
    borderRadius: 25,
    backgroundColor: COLOR.gray_7,
    borderColor: COLOR.perpal_3,
  },
  ArrowCOntainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '10%',
    marginTop: '5%',
  },
  Arrow: {width: 15, height: 10, resizeMode: 'contain'},
  Title: {fontSize: normalize(10), fontWeight: '700', color: COLOR.black},
  TotalMessages: {
    fontSize: normalize(8),
    fontWeight: '400',
    color: COLOR.gray_5,
    marginLeft: '10%',
  },
  persentage: {fontSize: normalize(12), fontWeight: '700', color: COLOR.gray_5},
  IndecatorCOntainer: {
    marginTop: '3%',
    ...commonStyles.verticleView,
    paddingHorizontal: '15%',
    
  },

  RatingAdd: {
    fontSize: normalize(18),
    fontWeight: '700',
    color: COLOR.perpal_3,
    alignSelf: 'center',
  },
  ratingName: {fontSize: normalize(6), fontWeight: '600', color: COLOR.black},
  amout:{fontSize:normalize(10),fontWeight:"700",color:COLOR.red}
});
