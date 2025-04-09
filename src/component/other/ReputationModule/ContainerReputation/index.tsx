import {
  Button,
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
import {useState} from 'react';
import {Icon} from '../../../../assest';
import InvoiceTitle from '../../../core/InvoiceTitle';
const Customize = [
  {title: 'Customize Border', id: 1},
  {title: 'Customize Shadow', id: 2},
  {title: 'Customize Widget Title', id: 3},
];
import {runOnJS} from 'react-native-reanimated';

interface propType {
  BackgroundColor?: () => void;
}

const ContainerReputation = (props: propType) => {
  const {BackgroundColor} = props;
  const [showModal, setShowModal] = useState(false);
  const [color, setColor] = useState('');
  const [display, setDisplay] = useState(false);
  const [titleText, setTitleText] = useState('');
  const [selector, setSelector] = useState([]);
  const [selectData, setSelectData] = useState({});

  console.log(selector);

  const handleToggleSelect = index => {
    const selectedTitle = Customize[index].title;

    setSelector(prevSelector => {
      let updatedSelector;
      if (prevSelector.includes(index)) {
        updatedSelector = prevSelector.filter(i => i !== index);
        handalDataColtroler(selectedTitle.trim(), false); // Pass false when unselected
      } else {
        updatedSelector = [...prevSelector, index];
        handalDataColtroler(selectedTitle.trim(), true); // Pass true when selected
      }
      return updatedSelector;
    });
  };
  const handalDataColtroler = (key: any, value: any) => {
    const trimmedKey = key.replace(/\s+/g, '');

    const updatedData = {...selectData, [trimmedKey]: value};
    setSelectData(updatedData);
    if (BackgroundColor) BackgroundColor(updatedData);
  };
  const onSelectColor = (hex: any) => {
    'worklet';
    runOnJS(handleColorSelection)(hex);
  };
  
  const handleColorSelection = (hex: any) => {
    handalDataColtroler('BackgroundColor', hex);
    setColor(hex);
  };
  
  
  return (
    <View style={styles.container}>
      <View style={styles.containerColor}>
        <View>
          <Text style={styles.title}>Background:</Text>
          <TextInput
            style={styles.textinputColor}
            value={color}
            onChangeText={e => handalDataColtroler('BackgroundColor', e)}
          />
        </View>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            borderRadius: 10,
            backgroundColor: color ? color : COLOR.whites,
            marginTop: '5%',
          }}
          onPress={() => setShowModal(true)}
        />
        <View>
          <Text style={styles.title}>Corner Radius:</Text>
          <TextInput
            style={styles.textinputColor}
            onChangeText={e => handalDataColtroler('CornerRadius', e)}
          />
        </View>
        <Text style={styles.title}>px</Text>
      </View>
      <View>
        {Customize.map((item, index) => (
          <View key={item.id} style={styles.ListCOntainer}>
            <TouchableOpacity onPress={() => handleToggleSelect(index)}>
              <Image
                source={selector.includes(index) ? Icon.check : Icon.uncheck}
                style={styles.checkBox}
              />
            </TouchableOpacity>
            <Text style={styles.titleCheck}>{item.title}</Text>
          </View>
        ))}
        <InvoiceTitle
          title="Title Text"
          onChange={(e: any) =>
            handalDataColtroler('CustomizeWidgetTitleWrite', e)
          }
        />
        <View style={styles.ListCOntainer}>
          <TouchableOpacity
            onPress={() => {
              const newDisplayValue = !display;
              setDisplay(newDisplayValue);
              handalDataColtroler('display', newDisplayValue); // Add display value to handalDataColtroler
            }}>
            <Image
              source={!display ? Icon.check : Icon.uncheck}
              style={styles.checkBox}
            />
          </TouchableOpacity>
          <Text style={styles.titleCheck}>
            Display overall rating and review count{' '}
          </Text>
        </View>
      </View>
      <Modal visible={showModal} animationType="slide" transparent>
        <ColorPicker
          style={{width: '70%', alignSelf: 'center'}}
          value="red"
          onComplete={(e)=>onSelectColor(e)}>
          <Preview />
          <Panel1 />
          <HueSlider />
        </ColorPicker>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setShowModal(false)}>
          <Text style={styles.btnText}>Select</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
export default ContainerReputation;

const styles = StyleSheet.create({
  container: {paddingVertical: '5%'},
  containerColor: {...commonStyles.verticleView, paddingHorizontal: '7%'},
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
  btnText: {fontSize: 16, fontWeight: '700', color: COLOR.whites},
  checkBox: {width: 19, height: 19, resizeMode: 'contain'},
  titleCheck: {
    fontSize: 13,
    fontWeight: '400',
    color: COLOR.gray_5,
    marginLeft: '2%',
  },
  ListCOntainer: {
    ...commonStyles.horizontalView,
    marginLeft: '7%',
    marginTop: '2%',
  },
});
