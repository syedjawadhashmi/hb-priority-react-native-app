import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from '../../../../assest';
import { COLOR, commonStyles } from '../../../../themes/StyleGuides';
import { useState } from 'react';

interface PropType {
  ReviewsData?: () => void
}

const Customize = [
  { title: 'Display Reviewers Name' },
  { title: 'Display Reviewer Site Icon' },
  { title: 'Add Business Details To Schema' },
];

const dates = [{ title: 'MMDDYYYY' }, { title: 'DDMMYYYY' }, { title: 'Hidden' }];
const Fonts = [{ title: '140 Characters' }, { title: '280 Characters' }];
const Deport = [{ title: 'Customize Border' }, { title: 'Customize Shadow' }];

import ColorPicker, { Panel1, Preview, HueSlider } from 'reanimated-color-picker';

const ReviewsReputation = (prop: PropType) => {
  const { ReviewsData } = prop;
  const [selector, setSelector] = useState([]);
  const [radioSelector, setRadioSelector] = useState(null);
  const [fontSize, setFontSize] = useState(null);
  const [border, setBorder] = useState(false);
  const [shadow, setShadow] = useState(false);
  console.log(shadow)
  const [showModal, setShowModal] = useState(false);
  const [color, setColor] = useState('');
  const [cornerRadius, setCornerRadius] = useState('');
  const [selectData, setSelectData] = useState({});

  const handalDataColtroler = (key:any, value:any) => {

    console.log(key, value);
    const trimmedKey = key.replace(/\s+/g, '');

    const updatedData = {...selectData, [trimmedKey]: value};
    // const updatedData = { ...selectData, [key]: value };
    setSelectData(updatedData);
    if (ReviewsData) ReviewsData(updatedData);
  };

  const toggleSelect = (key:any, value:any) => {
    handalDataColtroler(key, value);
  };

  const onSelectColor = ({ hex }) => {
    setColor(hex);
    handalDataColtroler('Background', hex);
  };

  return (
    <View style={styles.container}>

      {/* Name and Site Icon */}
      <View>
        {Customize.map((item, index) => (
          <View key={index} style={styles.ListContainer}>
            <TouchableOpacity onPress={() => {
              toggleSelect(item.title, !selector.includes(index));
              setSelector(prevSelector => prevSelector.includes(index) ? prevSelector.filter(i => i !== index) : [...prevSelector, index]);
            }}>
              <Image
                source={selector.includes(index) ? Icon.check : Icon.uncheck}
                style={styles.checkBox}
              />
            </TouchableOpacity>
            <Text style={styles.titleCheck}>{item.title}</Text>
          </View>
        ))}
      </View>

      {/* Data Format */}
      <Text style={styles.titleBar}>Data Format: </Text>
      <View style={commonStyles.verticleView}>
        {dates.map((item, index) => (
          <View key={index} style={styles.ListContainer}>
            <TouchableOpacity onPress={() => {
              setRadioSelector(index);
              handalDataColtroler('DataFormat', item.title);
            }}>
              <Image
                source={radioSelector === index ? Icon.radio_Button : Icon.radio_buttonof}
                style={styles.checkBox}
              />
            </TouchableOpacity>
            <Text style={styles.titleCheck}>{item.title}</Text>
          </View>
        ))}
      </View>

      {/* Fonts */}
      <Text style={styles.titleBar}>Font: </Text>
      <View style={commonStyles.verticleView}>
        {Fonts.map((item, index) => (
          <View key={index} style={styles.ListContainer}>
            <TouchableOpacity onPress={() => {
              setFontSize(index);
              handalDataColtroler('Fonts', item.title.substring(0, 3));
            }}>
              <Image
                source={fontSize === index ? Icon.radio_Button : Icon.radio_buttonof}
                style={styles.checkBox}
              />
            </TouchableOpacity>
            <Text style={styles.titleCheck}>{item.title}</Text>
          </View>
        ))}
      </View>

      {/* Background Color */}
      <View style={styles.containerColor}>
        <View>
          <Text style={styles.title}>Background:</Text>
          <TextInput style={styles.textinputColor} value={color} />
        </View>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            borderRadius: 10,
            backgroundColor: color || COLOR.whites,
          }}
          onPress={() => setShowModal(true)}
        />
        <View>
          <Text style={styles.title}>Corner Radius:</Text>
          <TextInput
            style={styles.textinputColor}
            value={cornerRadius}
            onChangeText={text => {
              setCornerRadius(text);
              handalDataColtroler('Radius', text);
            }}
          />
        </View>
        <Text style={styles.title}>px</Text>
      </View>

      {/* Border and Shadow */}
      <View>
          <View  style={styles.ListContainer}>
            <TouchableOpacity onPress={() => {
              setBorder(border?false:true);
              handalDataColtroler("border", border?false:true);
            }}>
              <Image
                source={border ? Icon.check : Icon.uncheck}
                style={styles.checkBox}
              />
            </TouchableOpacity>
            <Text style={styles.titleCheck}>Customize Border</Text>
          </View>
          <View  style={styles.ListContainer}>
            <TouchableOpacity onPress={() => {
              setShadow(shadow?false:true);
              handalDataColtroler("shadow", shadow?false:true);
            }}>
              <Image
                source={shadow ? Icon.check : Icon.uncheck}
                style={styles.checkBox}
              />
            </TouchableOpacity>
            <Text style={styles.titleCheck}>Customize Shadow</Text>
          </View>
      </View>

      {/* Color Picker Modal */}
      <Modal visible={showModal} animationType="slide" transparent>
        <ColorPicker
          style={{ width: '70%', alignSelf: 'center' }}
          value="red"
          onComplete={onSelectColor}
        >
          <Preview />
          <Panel1 />
          <HueSlider />
        </ColorPicker>
        <TouchableOpacity style={styles.btn} onPress={() => setShowModal(false)}>
          <Text style={styles.btnText}>Select</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ReviewsReputation;

const styles = StyleSheet.create({
  container: {},
  ListContainer: {
    ...commonStyles.horizontalView,
    marginLeft: '7%',
    marginTop: '2%',
    marginBottom:"5%"
  },
  btnText: { fontSize: 16, fontWeight: '700', color: COLOR.whites },
  checkBox: { width: 19, height: 19, resizeMode: 'contain' },
  titleCheck: {
    fontSize: 13,
    fontWeight: '400',
    color: COLOR.gray_5,
    marginLeft: '2%',
  },
  titleBar: {
    fontSize: 13,
    fontWeight: '800',
    color: COLOR.gray_5,
    marginLeft: '10%',
    marginTop: '4%',
  },
  containerColor: {
    ...commonStyles.verticleView,
    paddingHorizontal: '7%',
    marginTop: '6%',
    marginBottom: '3%',
  },
  title: {
    fontSize: 12,
    fontWeight: '800',
    color: COLOR.gray_5,
    marginBottom: '4%',
  },
  textinputColor: {
    width: 80,
    height: 30,
    padding: 0,
    backgroundColor: COLOR.whites,
    borderRadius: 10,
    color: COLOR.black,
    fontSize: 13,
    paddingHorizontal: 4,
  },
  btn: {
    width: '70%',
    height: 40,
    backgroundColor: COLOR.primary,
    borderRadius: 10,
    ...commonStyles.center,
    alignSelf: 'center',
  },
});
