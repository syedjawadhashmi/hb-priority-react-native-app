import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLOR, commonStyles, normalize, wp} from '../../../../themes/StyleGuides';
import {Icon} from '../../../../assest';
import {CircularProgressBase} from 'react-native-circular-progress-indicator';
import { inboxProp } from '../../../../data/Types';
const {width, height} = Dimensions.get('window');

const Marketing = (propes:inboxProp) => {
  const{onpress}=propes
 
  const props = {
    activeStrokeWidth: 25,
    inActiveStrokeWidth: 25,
    inActiveStrokeOpacity: 0.2,
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onpress} >
      <View style={styles.ArrowCOntainer}>
        <Text style={styles.Title}>Marketing</Text>
        <TouchableOpacity>
          <Image source={Icon.RightlongArrow} style={styles.Arrow} />
        </TouchableOpacity>
      </View>

      <View style={styles.pointContiner}>
        <Text style={styles.pointTitle}>New Opportunities</Text>
        <Text style={styles.pointTitle}>Active Campaigns</Text>
      </View>
      <View
        style={{
          ...styles.pointContiner,
          paddingHorizontal: '20%',
          marginTop: '2%',
        }}>
        <Text style={{...styles.Title, color: COLOR.perpal_3}}>456</Text>
        <Text style={{...styles.Title, color: COLOR.perpal_3}}>2</Text>
      </View>
      <View
        style={{
          ...commonStyles.verticleView,
          paddingHorizontal: '5%',
          marginTop: '4%',
        }}>
        <CircularProgressBase
          {...props}
          value={70}
          radius={wp(6)}
          activeStrokeColor={COLOR.perpal_3}
          inActiveStrokeColor={'#e84118'}
          activeStrokeWidth={5}
          inActiveStrokeWidth={0}>
          <CircularProgressBase
            {...props}
            value={80}
            radius={10}
            activeStrokeColor={COLOR.primary}
            inActiveStrokeColor={'#18dcff'}
            activeStrokeWidth={5}
            inActiveStrokeWidth={0}>
            <Text style={styles.persentage}>75%</Text>
          </CircularProgressBase>
        </CircularProgressBase>

        <View>
          <View style={{...commonStyles.horizontalView}}>
            <View
              style={{...styles.RateDot, backgroundColor: COLOR.perpal_3}}
            />
            <Text style={styles.Rete}>Open Rate</Text>
          </View>
          <View style={{...commonStyles.horizontalView}}>
            <View style={{...styles.RateDot, backgroundColor: COLOR.primary}} />
            <Text style={styles.Rete}>Replies</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Marketing;

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
  pointContiner: {
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
    marginTop: '5%',
  },
  pointTitle: {
    fontSize: normalize(6),
    fontWeight: '400',
    color: COLOR.gray_5,
    width: '40%',
    textAlign: 'center',
  },
  persentage: {fontSize: 5, fontWeight: '400', color: COLOR.gray_5},
  Rete: {fontSize: normalize(6), fontWeight: '700', color: COLOR.black_1,marginLeft:"5%"},
  RateDot: {
    width: 8,
    height: 8,
    borderRadius: 15,
    marginRight: '2%',
    marginVertical: '8%',
  },
});
