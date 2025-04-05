import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import {useState} from 'react';
import {Icon} from '../../../../assest';
import Slider from '@react-native-community/slider';

interface propType {
  AnimationData?: () => void;
}

export const AnimationReputation = (props: propType) => {
  const {AnimationData} = props;
  const [rotate, setRotate] = useState(0);
  const [transition, setTransition] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [slideArrow, setSliderArrow] = useState(0);
  const [sliderDots, setSliderDots] = useState(0);
  const [selectData, setSelectData] = useState({});

  const handalDataColtroler = (key: string, value: any) => {
    const trimmedKey = key.replace(/\s+/g, '');
    const updatedData = {...selectData, [trimmedKey]: value};
    setSelectData(updatedData);
    if (AnimationData) AnimationData(updatedData);
  };

  const handleRotateChange = (value: number) => {
    setRotate(value);
    handalDataColtroler('rotate', value);
  };

  const handleTransitionChange = (value: number) => {
    setTransition(value);
    handalDataColtroler('transition', value);
  };

  const handleSliderValueChange = (value: number) => {
    setSliderValue(value);
    handalDataColtroler('sliderValue', value);
  };

  const handleSliderArrowChange = (value: number) => {
    setSliderArrow(value);
    handalDataColtroler('slideArrow', value);
  };

  const handleSliderDotsChange = (value: number) => {
    setSliderDots(value);
    handalDataColtroler('sliderDots', value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Auto rotats slides:</Text>
      <View style={{...commonStyles.horizontalView}}>
        <View style={styles.ListCOntainer}>
          <TouchableOpacity onPress={() => handleRotateChange(1)}>
            <Image
              source={rotate === 1 ? Icon.radio_Button : Icon.radio_buttonof}
              style={styles.checkBox}
            />
          </TouchableOpacity>
          <Text style={styles.titleCheck}>Yes</Text>
        </View>
        <View style={styles.ListCOntainer}>
          <TouchableOpacity onPress={() => handleRotateChange(2)}>
            <Image
              source={rotate === 2 ? Icon.radio_Button : Icon.radio_buttonof}
              style={styles.checkBox}
            />
          </TouchableOpacity>
          <Text style={styles.titleCheck}>No</Text>
        </View>
      </View>

      <Text style={styles.title}>Transition style:</Text>
      <View style={{...commonStyles.horizontalView}}>
        <View style={styles.ListCOntainer}>
          <TouchableOpacity onPress={() => handleTransitionChange(1)}>
            <Image
              source={transition === 1 ? Icon.radio_Button : Icon.radio_buttonof}
              style={styles.checkBox}
            />
          </TouchableOpacity>
          <Text style={styles.titleCheck}>Fade</Text>
        </View>
        <View style={styles.ListCOntainer}>
          <TouchableOpacity onPress={() => handleTransitionChange(2)}>
            <Image
              source={transition === 2 ? Icon.radio_Button : Icon.radio_buttonof}
              style={styles.checkBox}
            />
          </TouchableOpacity>
          <Text style={styles.titleCheck}>Slide</Text>
        </View>
      </View>

      <Text style={styles.title}>Transition Animation Speed (Seconds):</Text>
      <Slider
        style={{width: 300, height: 40, marginLeft: "4%"}}
        maximumValue={100}
        step={1}
        value={sliderValue}
        onValueChange={handleSliderValueChange}
        minimumTrackTintColor={COLOR.primary}
        maximumTrackTintColor={COLOR.gray_5}
      />

      <Text style={styles.title}>Show slides arrows:</Text>
      <View style={{...commonStyles.horizontalView}}>
        <View style={styles.ListCOntainer}>
          <TouchableOpacity onPress={() => handleSliderArrowChange(1)}>
            <Image
              source={slideArrow === 1 ? Icon.radio_Button : Icon.radio_buttonof}
              style={styles.checkBox}
            />
          </TouchableOpacity>
          <Text style={styles.titleCheck}>yes</Text>
        </View>
        <View style={styles.ListCOntainer}>
          <TouchableOpacity onPress={() => handleSliderArrowChange(2)}>
            <Image
              source={slideArrow === 2 ? Icon.radio_Button : Icon.radio_buttonof}
              style={styles.checkBox}
            />
          </TouchableOpacity>
          <Text style={styles.titleCheck}>No</Text>
        </View>
      </View>

      <Text style={styles.title}>Show slides dots:</Text>
      <View style={{...commonStyles.horizontalView}}>
        <View style={styles.ListCOntainer}>
          <TouchableOpacity onPress={() => handleSliderDotsChange(1)}>
            <Image
              source={sliderDots === 1 ? Icon.radio_Button : Icon.radio_buttonof}
              style={styles.checkBox}
            />
          </TouchableOpacity>
          <Text style={styles.titleCheck}>yes</Text>
        </View>
        <View style={styles.ListCOntainer}>
          <TouchableOpacity onPress={() => handleSliderDotsChange(2)}>
            <Image
              source={sliderDots === 2 ? Icon.radio_Button : Icon.radio_buttonof}
              style={styles.checkBox}
            />
          </TouchableOpacity>
          <Text style={styles.titleCheck}>No</Text>
        </View>
      </View>
    </View>
  );
};

export default AnimationReputation;

const styles = StyleSheet.create({
  container: {marginBottom: "20%"},
  title: {
    fontSize: 12,
    fontWeight: '800',
    color: COLOR.gray_5,
    marginLeft: '7%',
    marginRight: '5%',
    marginTop: "2%",
  },
  ListCOntainer: {
    ...commonStyles.horizontalView,
    marginLeft: '7%',
    marginTop: '2%',
  },
  checkBox: {width: 19, height: 19, resizeMode: 'contain'},
  titleCheck: {
    fontSize: 13,
    fontWeight: '400',
    color: COLOR.gray_5,
    marginLeft: '2%',
  },
});
