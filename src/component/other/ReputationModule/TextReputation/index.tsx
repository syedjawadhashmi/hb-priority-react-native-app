import {useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import ColorPicker, {Panel1, Preview, HueSlider} from 'reanimated-color-picker';
import DropDown from '../../../core/DropDown';
import Slider from '@react-native-community/slider';
import {Icon} from '../../../../assest';
const data = [{title: 'Arimo-SemiBold'}, {title: 'Arimo-SemiBold'}];


interface PropType {
  TextStyleData?: () => void;
}
const TextReputation = (props: PropType) => {
  const {TextStyleData} = props;
  const [showModal, setShowModal] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);
  const [color, setColor] = useState('');
  const [colorOne, setColorOne] = useState('');
  const [sliderValue, setSliderValue] = useState(0);
  const [alignSelector, setAlignSlector] = useState(0);
  const [selectData, setSelectData] = useState({});
  const [dropDown, setDropDown] = useState(false);
  const [selectDropDown, setselectDrop] = useState(false);

  const onSelectColor = ({hex}) => {
    setColor(hex);
    handalDataColtroler('Background', hex);
  };

  const onSelectColorOne = ({hex}) => {
    setColorOne(hex);
    handalDataColtroler('LinkColor', hex);
  };

  const handleFontChange = (font:any) => {
    setselectDrop(font);
    handalDataColtroler('Font', font);
  };

  const handleSizeChange = (size:any) => {
    setSliderValue(size);
    handalDataColtroler('Size', size);
  };

  const handleAlignmentChange = (alignment:any) => {
    setAlignSlector(alignment);
    handalDataColtroler('Alignment', alignment === 1 ? 'Left' : alignment === 2 ? 'Center' : 'Right');
  };

  const handalDataColtroler = (key:any, value:any) => {
    const trimmedKey = key.replace(/\s+/g, '');
    const updatedData = {...selectData, [trimmedKey]: value};
    setSelectData(updatedData);
    if (TextStyleData) TextStyleData(updatedData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerColor}>
        <DropDown
          DropDownContaianer={{width: 70}}
          onSelect={(e:any) => handleFontChange(e)}
          isOpen={dropDown}
          toggleDropdown={() => setDropDown(!dropDown)}
          options={data}
          title={'Fonts'}
          container={styles.dropDownStyle}
          selectedOption={selectDropDown}
        />
        
        {/* Background Color */}
        <View>
          <Text style={styles.title}>Background:</Text>
          <TextInput style={styles.textinputColor} value={color} />
        </View>
        <TouchableOpacity
          style={{
            ...styles.colorPicker,
            backgroundColor: color || COLOR.whites,
          }}
          onPress={() => setShowModal(true)}
        />

        {/* Link Color */}
        <View>
          <Text style={styles.title}>Link color:</Text>
          <TextInput style={styles.textinputColor} value={colorOne} />
        </View>
        <TouchableOpacity
          style={{
            ...styles.colorPicker,
            backgroundColor: colorOne || COLOR.whites,
          }}
          onPress={() => setShowModalTwo(true)}
        />
      </View>
      
      {/* Size */}
      <Text style={styles.titleBar}>Size: </Text>
      <View style={{...commonStyles.verticleView, paddingHorizontal: '8%'}}>
        <Slider
          style={{width: 300, height: 20}}
          maximumValue={100}
          step={1}
          value={sliderValue}
          onValueChange={handleSizeChange}
          minimumTrackTintColor={COLOR.primary}
          maximumTrackTintColor={COLOR.gray_5}
        />
      </View>
      
      {/* Alignment */}
      <Text style={styles.titleBar}>Alignment: </Text>
      <View style={{
          ...commonStyles.horizontalView,
          paddingHorizontal: '6%',
          marginBottom: '4%',
          marginTop: '3%',
        }}>
        {['Left', 'Center', 'Right'].map((align, index) => (
          <TouchableOpacity
            key={align}
            style={{
              ...styles.alighbtn,
              backgroundColor: alignSelector === index + 1 ? COLOR.perpal_3 : COLOR.whites,
              marginLeft:"5%"
            }}
            onPress={() => handleAlignmentChange(index + 1)}>
            <Image
              source={ index==0?Icon.align_left: index==1?Icon.format : Icon.align_right}
              style={{
                ...styles.AlignIcon,
                tintColor: alignSelector === index + 1 ? COLOR.whites : COLOR.perpal,
              }}
            />
            <Text
              style={{
                ...styles.alignText,
                color: alignSelector === index + 1 ? COLOR.whites : COLOR.perpal,
              }}>
              {align}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* First Color Picker Modal */}
      <Modal visible={showModal} animationType="slide" transparent>
        <ColorPicker style={{width: '70%', alignSelf: 'center'}} value="red" onComplete={onSelectColor}>
          <Preview />
          <Panel1 />
          <HueSlider />
        </ColorPicker>
        <TouchableOpacity style={styles.btn} onPress={() => setShowModal(false)}>
          <Text style={styles.btnText}>Select</Text>
        </TouchableOpacity>
      </Modal>

      {/* Second Color Picker Modal */}
      <Modal visible={showModalTwo} animationType="slide" transparent>
        <ColorPicker style={{width: '70%', alignSelf: 'center'}} value="blue" onComplete={onSelectColorOne}>
          <Preview />
          <Panel1 />
          <HueSlider />
        </ColorPicker>
        <TouchableOpacity style={styles.btn} onPress={() => setShowModalTwo(false)}>
          <Text style={styles.btnText}>Select</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default TextReputation;

const styles = StyleSheet.create({
  container: {},
  containerColor: {...commonStyles.verticleView, paddingHorizontal: '7%'},
  number: {fontSize: 10, fontWeight: '800', color: COLOR.gray_5},

  title: {
    fontSize: 12,
    fontWeight: '800',
    color: COLOR.gray_5,
    marginBottom: '4%',
  },
  textinputColor: {
    width: 70,
    height: 30,
    padding: 0,
    backgroundColor: COLOR.whites,
    borderRadius: 10,
    color: COLOR.black,
  },
  colorPicker: {
    width: 30,
    height: 30,
    borderRadius: 10,
    marginTop: '5%',
  },
  btn: {
    width: '70%',
    height: 40,
    backgroundColor: COLOR.primary,
    borderRadius: 10,
    ...commonStyles.center,
    alignSelf: 'center',
  },
  btnText: {fontSize: 16, fontWeight: '700', color: COLOR.whites},
  dropDownStyle: {width: 50},
  titleBar: {
    fontSize: 13,
    fontWeight: '800',
    color: COLOR.gray_5,
    marginLeft: '10%',
    marginTop: '4%',
  },
  alighbtn: {
    paddingHorizontal: '3%',
    height: 35,
    borderRadius: 20,
    backgroundColor: COLOR.perpal,
    ...commonStyles.verticleView,
  },
  alignText: {
    fontWeight: '800',
    color: COLOR.white,
    fontSize: 13,
    marginLeft: '2%',
  },
  AlignIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: COLOR.white,
  },
});
