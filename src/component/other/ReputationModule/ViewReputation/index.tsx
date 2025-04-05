import {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from '../../../../assest';
import {COLOR, commonStyles, FONT} from '../../../../themes/StyleGuides';
import LaptopView from '../LaptopView';
import MobileView from '../MobileView';

interface Viewprops {
  designmode?: any;
  layoutShow?: any;
  BackgroundColor?: any;
  TextStyleData?:any;
  ReviewsData?:any;
  AnimationData?:any
}

const ViewReputation = (props: Viewprops) => {
  const {designmode, layoutShow, BackgroundColor,TextStyleData,ReviewsData,AnimationData} = props;
  const [select, setSelect] = useState(0);  

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.selectContainer}>
          <TouchableOpacity
            onPress={() => setSelect(0)}
            style={{
              ...styles.selectBtn,
              backgroundColor: select == 0 ? COLOR.perpal_3 : COLOR.whites,
            }}>
            <Image
              source={Icon.laptop}
              style={{
                ...styles.IconStyle,
                tintColor: select == 0 ? COLOR.whites : COLOR.perpal_3,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelect(1)}
            style={{
              ...styles.selectBtn,
              backgroundColor: select == 1 ? COLOR.perpal_3 : COLOR.whites,
            }}>
            <Image
              source={Icon.smartphone}
              style={{
                ...styles.IconStyle,
                tintColor: select == 1 ? COLOR.whites : COLOR.perpal_3,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{}}>
          {select == 0 ? (
            <LaptopView
              designmode={designmode}
              layoutShow={layoutShow}
              BackgroundColor={BackgroundColor}
              TextStyleData={TextStyleData}
              ReviewsData={ReviewsData}
              AnimationData={AnimationData}
            />
          ) : (
            <MobileView  designmode={designmode}
            layoutShow={layoutShow}
            BackgroundColor={BackgroundColor}
            TextStyleData={TextStyleData}
            ReviewsData={ReviewsData}
            AnimationData={AnimationData} />
          )}
        </View>
        <View style={{marginBottom: '100%'}} />
      </ScrollView>
    </View>
  );
};
export default ViewReputation;

const styles = StyleSheet.create({
  container: {},
  selectContainer: {
    width: '45%',
    height: 40,
    backgroundColor: COLOR.white1,
    borderRadius: 16,
    ...commonStyles.verticleView,
    alignSelf: 'center',
    overflow: 'hidden',
    marginBottom: '4%',
    marginTop: '5%',
  },
  selectBtn: {
    ...commonStyles.center,
    height: 40,
    width: '49%',
    ...commonStyles.verticleView,
    paddingHorizontal: '15%',
  },
  selectdText: {
    fontSize: 16,
    fontFamily: FONT.Geist_Medium,
    color: COLOR.black_2,
  },
  IconStyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: COLOR.black,
  },
  Customer: {
    width: '90%',
    height: '67%',
    backgroundColor: COLOR.whites,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: '5%',
  },
  title: {fontSize: 18, fontWeight: '800', color: COLOR.gray_5},
  ReviewsStyle: {fontSize: 18, fontWeight: '600', color: COLOR.gray_5},
});
