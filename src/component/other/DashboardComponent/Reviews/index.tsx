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
// import PieChart from 'react-native-pie-chart';

const Reviews = (propes:inboxProp) => {
  const{onpress}=propes

  const widthAndHeight = 35;
  const series = [521, 521, 323, 189, 137];
  const sliceColor = ['#27272D', '#3D3D3D', '#40F440', '#631363', '#fff'];
  const seriesArray = [
    {num: 1, color: '#fff'},
    {num: 2, color: '#631363'},
    {num: 3, color: '#40F440'},
    {num: 4, color: '#3D3D3D'},
    {num: 5, color: '#27272D'},
  ];
  return (
    <TouchableOpacity onPress={onpress} style={styles.container}>
      <View style={styles.ArrowCOntainer}>
        <Text style={styles.Title}>Reviews</Text>
        <TouchableOpacity>
          <Image source={Icon.RightlongArrow} style={styles.Arrow} />
        </TouchableOpacity>
      </View>
      <Text style={styles.TotalMessages}>Total Reviews</Text>
      <View style={styles.IndecatorCOntainer}>
        {/* <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.6}
          coverFill={COLOR.gray_9}
        /> */}
        <Text style={styles.RatingText}>89</Text>
      </View>
      <View
        style={{
          ...commonStyles.verticleView,
          paddingHorizontal: '5%',
          alignSelf: 'center',
          marginTop: '5%',
        }}>
        {seriesArray.map(item => (
          <View>
            <View style={{...styles.RateDot, backgroundColor: item.color}} />
            <Text style={styles.Star}>{item.num}</Text>
            <Text style={styles.Star}>Star</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
};
export default Reviews;

const styles = StyleSheet.create({
  container: {
    width: width * 0.3,
    height: 107,
    borderWidth: 1.5,
    borderRadius: 25,
    backgroundColor: COLOR.gray_9,
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
  IndecatorCOntainer: {alignSelf: 'center', marginTop: '3%'},
  Rete: {fontSize: normalize(6), fontWeight: '700', color: COLOR.black_1},
  RateDot: {
    width: 8,
    height: 8,
    borderRadius: 15,
    marginRight: '6%',
    marginVertical: '8%',
    alignSelf: 'center',
  },
  num: {},
  Star: {fontSize: normalize(6), color: COLOR.black1, textAlign: 'center'},
  RatingText: {
    fontSize: normalize(12),
    fontWeight: '700',
    color: COLOR.gray_5,
    position: 'absolute',
    left: 11,
    top: 9,
  },
});
