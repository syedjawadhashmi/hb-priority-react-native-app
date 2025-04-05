import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from '../../../../assest';
import {COLOR, commonStyles, normalize} from '../../../../themes/StyleGuides';
import {CircularProgressBase} from 'react-native-circular-progress-indicator';
import { inboxProp } from '../../../../data/Types';
const {width, height} = Dimensions.get('window');
const Calendar = (propes:inboxProp) => {
  const{onpress}=propes

  const props = {
    activeStrokeWidth: 25,
    inActiveStrokeWidth: 25,
    inActiveStrokeOpacity: 0.2,
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onpress} >
      <View style={styles.ArrowCOntainer}>
        <Text style={styles.Title}>Calendar</Text>
        <TouchableOpacity>
          <Image source={Icon.RightlongArrow} style={styles.Arrow} />
        </TouchableOpacity>
      </View>
      <Text style={styles.TotalMessages}>Appointments</Text>

      <Text style={styles.RatingAdd}>6</Text>
      <View style={styles.IndecatorCOntainer}>
        <CircularProgressBase
          {...props}
          value={80}
          radius={15}
          activeStrokeColor={'#3D3D3D'}
          inActiveStrokeColor={'#e84118'}
          activeStrokeWidth={5}
          inActiveStrokeWidth={0}>
          <Text style={styles.persentage}>4</Text>
        </CircularProgressBase>
        <CircularProgressBase
          {...props}
          value={70}
          radius={15}
          activeStrokeColor={'#3D3D3D'}
          inActiveStrokeColor={'#18dcff'}
          activeStrokeWidth={5}
          inActiveStrokeWidth={0}>
          <Text style={styles.persentage}>2</Text>
        </CircularProgressBase>
      </View>
      <View style={{...commonStyles.verticleView, paddingHorizontal: '13%'}}>
        <Text style={styles.ratingName}>Today</Text>

        <Text style={styles.ratingName}>Tomorrow</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Calendar;

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
    fontSize: 8,
    fontWeight: '400',
    color: COLOR.gray_5,
    marginLeft: '10%',
  },
  persentage: {fontSize: normalize(12), fontWeight: '700', color: COLOR.whites},
  IndecatorCOntainer: {
    marginTop: '3%',
    ...commonStyles.verticleView,
    paddingHorizontal: '10%',
  },

  RatingAdd: {
    fontSize: normalize(18),
    fontWeight: '700',
    color: COLOR.perpal_3,
    alignSelf: 'center',
  },
  ratingName: {fontSize: normalize(6), fontWeight: '600', color: COLOR.black},
});
