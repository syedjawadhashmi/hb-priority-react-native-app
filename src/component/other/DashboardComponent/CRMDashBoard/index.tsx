import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLOR, commonStyles, normalize} from '../../../../themes/StyleGuides';
import {Icon} from '../../../../assest';
import { inboxProp } from '../../../../data/Types';
const {width, height} = Dimensions.get('window');

const CRMDashBoard = (propes:inboxProp) => {
  const{onpress}=propes

  const data = [{value: 50}, {value: 80}, {value: 90}, {value: 70}];

  return (
    <TouchableOpacity style={styles.container} onPress={onpress} >
      <View style={styles.ArrowCOntainer}>
        <Text style={styles.Title}>CRM</Text>
        <TouchableOpacity>
          <Image source={Icon.RightlongArrow} style={styles.Arrow} />
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.DotContiner}>
          <View style={{...styles.RateDot, backgroundColor: COLOR.black_4}} />
          <Text style={styles.DotTitle}>New Customers Per Month</Text>
        </View>
        <View style={styles.DotContiner}>
          <View style={{...styles.RateDot, backgroundColor: COLOR.gray_6}} />
          <Text style={styles.DotTitle}>Total Active Customers</Text>
        </View>
      </View>
      <Image source={Icon.DashBoardMiter} style={styles.DashBoardMeter} />
    </TouchableOpacity>
  );
};
export default CRMDashBoard;

const styles = StyleSheet.create({
  container: {
    width: width * 0.3,
    height: 107,
    borderWidth: 1.5,
    borderRadius: 25,
    backgroundColor: COLOR.primary,
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
    fontSize: 8,
    fontWeight: '400',
    color: COLOR.gray_5,
    marginLeft: '10%',
  },
  persentage: {fontSize: normalize(12), fontWeight: '700', color: COLOR.gray_5},
  Amount: {
    fontSize: normalize(10),
    fontWeight: '700',
    color: COLOR.primary,
    marginLeft: '10%',
  },
  RateDot: {
    width: 8,
    height: 8,
    borderRadius: 15,
    marginRight: '6%',
  },
  DotTitle: {fontSize: normalize(6), fontWeight: '400', color: COLOR.black1},
  DotContiner: {
    ...commonStyles.horizontalView,
    marginLeft: '10%',
    marginTop: '2%',
  },
  DashBoardMeter: {
    width: 90,
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '5%',
  },
});
