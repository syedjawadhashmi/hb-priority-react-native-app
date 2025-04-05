import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from '../../../../assest';
import {COLOR, commonStyles, normalize} from '../../../../themes/StyleGuides';
import {CircularProgressBase} from 'react-native-circular-progress-indicator';
import { inboxProp } from '../../../../data/Types';
const {width, height} = Dimensions.get('window');
const Inbox = (propes:inboxProp) => {
  const{onpress}=propes
  const props = {
    activeStrokeWidth: 25,
    inActiveStrokeWidth: 25,
    inActiveStrokeOpacity: 0.2,
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onpress} >
      <View style={styles.ArrowCOntainer}>
        <Text style={styles.Title}>Inbox</Text>
        <TouchableOpacity>
        <Image source={Icon.RightlongArrow} style={styles.Arrow} />
        </TouchableOpacity>
      </View>
      <Text style={styles.TotalMessages}>Total Messages</Text>
      <View style={styles.IndecatorCOntainer}>
        <CircularProgressBase
          {...props}
          value={80}
          radius={15}
          activeStrokeColor={'#3D3D3D'}
          inActiveStrokeColor={'#e84118'}
          activeStrokeWidth={5}
          inActiveStrokeWidth={0}>
          <CircularProgressBase
            {...props}
            value={10}
            radius={15}
            activeStrokeColor={'#8C8C8C'}
            inActiveStrokeColor={'#18dcff'}
            activeStrokeWidth={5}
            inActiveStrokeWidth={0}>
            <Text style={styles.persentage}>57</Text>
          </CircularProgressBase>
        </CircularProgressBase>
      </View>
      <View
        style={{
          ...commonStyles.verticleView,
          width: '85%',
          borderBottomWidth: 1,
          alignSelf: 'center',
          paddingHorizontal:"6%"

        }}>
        <View style={{...commonStyles.horizontalView}}>
          <View style={{...styles.RateDot, backgroundColor: '#3D3D3D'}} />
          <Text style={styles.Rete}>Read</Text>
        </View>
        <Text style={styles.Rete}>50</Text>
      </View>
      <View
        style={{
          ...commonStyles.verticleView,
          width: '85%',
          alignSelf: 'center',
          paddingHorizontal:"6%"
        }}>
        <View style={{...commonStyles.horizontalView}}>
          <View style={{...styles.RateDot, backgroundColor: COLOR.gray_6}} />
          <Text style={styles.Rete}>Unread</Text>
        </View>
        <Text style={styles.Rete}>7</Text>
      </View>
      
    </TouchableOpacity>
  );
};
export default Inbox;

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
    fontSize: normalize(8),
    fontWeight: '400',
    color: COLOR.gray_5,
    marginLeft: '10%',
  },
  persentage: {fontSize: normalize(12), fontWeight: '700', color: COLOR.gray_5},
  IndecatorCOntainer: {alignSelf: 'center', marginTop: '7%'},
  Rete: {fontSize: normalize(6), fontWeight: '700', color: COLOR.black_1,marginLeft:"3%"},
  RateDot: {
    width: 8,
    height: 8,
    borderRadius: 15,
    marginRight: '6%',
    marginVertical: '8%',
  },
});
