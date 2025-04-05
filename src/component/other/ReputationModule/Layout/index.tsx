import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Slider from '@react-native-community/slider';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import {useState} from 'react';
import InvoiceTitle from '../../../core/InvoiceTitle';
import { Icon } from '../../../../assest';

interface Layout {
  layoutShow?: () => void;
}

const Layout = (props: Layout) => {
  const {layoutShow} = props;
  const [sliderValue, setSliderValue] = useState(235);
  const [wedgit, setwedgit] = useState("");
  const [selectData, setSelectData] = useState({});
  const [LayoutSelector, setLayoutSelector] = useState(0);
  const handalData=(key:any,value:any,)=>{

    const trimmedKey = key.replace(/\s+/g, '');

    const updatedData = {...selectData, [trimmedKey]: value};
    setSelectData(updatedData);
    if (layoutShow) layoutShow(updatedData);
  }

  return (
    <View style={styles.container}>
      <Text style={{...styles.title, marginBottom: '3%'}}>
        Widget Max Height{' '}
      </Text>
      <View style={{...commonStyles.horizontalView}}>
        <InvoiceTitle container={{width: '80%'}} onChange={(e:any)=>handalData("Widget",e)}  />
        <Text style={styles.title}>px</Text>
      </View>
      <View style={{...commonStyles.horizontalView,marginTop:'5%'}} >
        <Text style={{...styles.title, }}>
        Desktop Layout Display
      </Text>
      <Image source={Icon.Error} style={{width:20,height:20,resizeMode:"contain",marginLeft:'3%'}}  />
        </View>
      <View
        style={{
          ...commonStyles.verticleView,
          paddingHorizontal: '8%',
          marginTop: '2%',
          marginBottom:"3%"
        }}>
        <TouchableOpacity
          style={{
            ...styles.SelectorLayout,
            backgroundColor:
              LayoutSelector == 1 ? COLOR.perpal_3 : COLOR.white1,
          }}
          onPress={() =>{ setLayoutSelector(1),handalData("Display",1)}}>
          <View style={styles.layouts} />
          <View style={styles.layouts} />
          <View style={styles.layouts} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.SelectorLayout,
            backgroundColor:
              LayoutSelector == 2 ? COLOR.perpal_3 : COLOR.white1,
          }}
          onPress={() =>{ setLayoutSelector(2),handalData("Display",2)}}>
          <View style={{...commonStyles.verticleView, paddingHorizontal: '7%'}}>
            <View
              style={{...styles.layouts, width: 35, paddingHorizontal: '7%'}}
            />
            <View style={{...styles.layouts, width: 35}} />
          </View>
          <View style={{...commonStyles.verticleView, paddingHorizontal: '7%'}}>
            <View style={{...styles.layouts, width: 35}} />
            <View style={{...styles.layouts, width: 35}} />
          </View>
          <View style={{...commonStyles.verticleView, paddingHorizontal: '7%'}}>
            <View style={{...styles.layouts, width: 35}} />
            <View style={{...styles.layouts, width: 35}} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.SelectorLayout,
            backgroundColor:
              LayoutSelector == 3 ? COLOR.perpal_3 : COLOR.white1,
          }}
          onPress={() =>{ setLayoutSelector(3),handalData("Display",3)}}>
          <View style={{...commonStyles.verticleView, paddingHorizontal: '7%'}}>
            <View style={{...styles.layouts, width: 20}} />
            <View style={{...styles.layouts, width: 20}} />
            <View style={{...styles.layouts, width: 20}} />
          </View>
          <View style={{...commonStyles.verticleView, paddingHorizontal: '7%'}}>
            <View style={{...styles.layouts, width: 20}} />
            <View style={{...styles.layouts, width: 20}} />
            <View style={{...styles.layouts, width: 20}} />
          </View>
          <View style={{...commonStyles.verticleView, paddingHorizontal: '7%'}}>
            <View style={{...styles.layouts, width: 20}} />
            <View style={{...styles.layouts, width: 20}} />
            <View style={{...styles.layouts, width: 20}} />
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>No of reviews to show </Text>
      <View style={{...commonStyles.verticleView, paddingHorizontal: '8%'}}>
        <Slider
          style={{width: 300, height: 40}}
          maximumValue={235}
          step={1}
          value={sliderValue}
          onValueChange={value => {
            handalData("Size",value == 0 ? sliderValue : value), setSliderValue(value);
          }}
          minimumTrackTintColor={COLOR.primary}
          maximumTrackTintColor={COLOR.gray_5}
        />
        <Text style={styles.number}>{sliderValue}</Text>
      </View>
    </View>
  );
};
export default Layout;

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 13,
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '7%',
  },
  number: {fontSize: 10, fontWeight: '800', color: COLOR.gray_5},
  SelectorLayout: {
    width: 90,
    height: 65,
    borderColor: COLOR.perpal_3,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'space-between',
    paddingVertical: '3%',
  },
  layouts: {
    width: 80,
    height: 13,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOR.perpal_3,
    alignSelf: 'center',
    backgroundColor: COLOR.white1,
  },
});
