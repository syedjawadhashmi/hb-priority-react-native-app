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
const {width, height} = Dimensions.get('window');
import {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { inboxProp } from '../../../../data/Types';

const Payments = (propes:inboxProp) => {
  const [value, setValue] = useState(0);
  const{onpress}=propes


  const data = [
    {
      title: 'Apr',
      value: 40,
    },
    {
      title: 'May',
      value: 70,
    },
    {
      title: 'Jun',
      value: 87,
    },
    {
      title: 'Jul',
      value: 0,
    },
    {
      title: 'Aug',
      value: 0,
    },
  ];
  const progress = 70;
  const progressHeight = `${progress}%`;
  return (
    <TouchableOpacity style={styles.container} onPress={onpress} >
      <View style={styles.ArrowCOntainer}>
        <Text style={styles.Title}>Payments</Text>
        <TouchableOpacity>
          <Image source={Icon.RightlongArrow} style={styles.Arrow} />
        </TouchableOpacity>
      </View>
      <Text style={styles.TotalMessages}>Total Per Month</Text>
      <Text style={styles.Amount}>$1,200/June</Text>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        {data.map(item => (
          <View style={{marginHorizontal: '3%', alignItems: 'center'}}>
            <Text style={styles.monthsName}>{item.value}</Text>
            <View style={{}}>
              <View style={styles.progressBarBackground}>
                <LinearGradient
                  colors={
                    item.value > 85
                      ? ['#40F440', '#40F440', '#40F440']
                      : ['#8C8C8C', '#8C8C8C', '#8C8C8C']
                  }
                  start={{x: 0, y: 1}}
                  end={{x: 0, y: 0}}
                  style={[styles.progressBarFill, {height: `${ item.value }%`}]}
                />
              </View>
            </View>
            <Text style={styles.monthsName}>{item.title}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
};
export default Payments;

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
  Amount: {
    fontSize: normalize(10),
    fontWeight: '700',
    color: COLOR.primary,
    marginLeft: '10%',
  },
  monthsName: {fontSize: normalize(6), fontWeight: '400', color: COLOR.gray_5},
  progressBarBackground: {
    width: 5,
    height: 40,
    backgroundColor: COLOR.black1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBarFill: {
    width: '100%',
    borderRadius: 10,
    position: 'absolute',
    bottom: 0,
  },
  progressText: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});
