import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from '../../../../assest';
import {COLOR, commonStyles, normalize} from '../../../../themes/StyleGuides';
const {width, height} = Dimensions.get('window');
import MapView from 'react-native-maps';
import { RankingShowList } from '../../../../data/DummayData';
import { inboxProp } from '../../../../data/Types';

const Seo = (propes:inboxProp) => {
  const{onpress}=propes

  return (
    <TouchableOpacity style={styles.container} onPress={onpress} >
      <View style={styles.ArrowCOntainer}>
        <Text style={styles.Title}>SEO</Text>
        <TouchableOpacity>
        <Image source={Icon.RightlongArrow} style={styles.Arrow} />
        </TouchableOpacity>
      </View>
      <Text style={styles.TotalMessages}>Ranking Report</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Target Keyword</Text>
      </TouchableOpacity>
      <View>
      <MapView
        style={{width: width * 0.2, height: 50,alignSelf:"center",marginTop:"2%"}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
       <View
              style={{
                position: 'absolute',
                alignSelf: 'center',
                marginTop: '5%',
                marginLeft:10
              }}>
              <FlatList
                numColumns={5}
                data={RankingShowList}
                renderItem={item => (
                  <TouchableOpacity
                    style={{
                      ...styles.RangingShow,
                      backgroundColor:
                        item.item < 5
                          ? '#00914C'
                          : item.item < 10
                          ? '#FAAC18'
                          : '#CF232A',
                    }}>
                    <Text style={styles.RangingShowText}>{item.item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
      </View>
    </TouchableOpacity>
  );
};
export default Seo;

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
  btn: {
    paddingHorizontal: '5%',
    paddingVertical: '3%',
    backgroundColor: COLOR.perpal_3,
    alignSelf: 'center',
    borderRadius: 4,
    marginTop: '5%',
  },
  btnText: {fontSize: normalize(6), fontWeight: '700', color: COLOR.whites},
  RangingShow: {
    width: 8,
    height: 8,
    borderRadius: 15,
    ...commonStyles.center,
    margin: '1.5%',
  },
  RangingShowText: {fontSize: normalize(6), fontWeight: '700', color: COLOR.whites},
});
