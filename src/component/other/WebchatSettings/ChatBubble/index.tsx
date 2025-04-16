import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';

import styles from './style';
import {Icon} from '../../../../assest';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import {useState} from 'react';
import BackgroundColorPicker from '../BackgroundColorPicker';
import ToggleSwitch from 'toggle-switch-react-native';
interface ChatBubbleProps {
  chatIcon?: (color: number) => void;
  chatIconBackground?: (color: string) => void;
  chatIconColor?: (color: string) => void;
}
const ChatBubble = (props: ChatBubbleProps) => {
  const {
    chatIcon = () => {},
    chatIconColor = () => {},
    chatIconBackground = () => {},
  } = props;
  const [showPrimaryPicker, setShowPrimaryPicker] = useState(false);
  const [primaryColor, setPrimaryColor] = useState('');
  const [showWebchat, setShowWebchat] = useState(false);
  const [OpenWebchat, setOpenWebchat] = useState(false);
  const [showIconColor, setShowIconColor] = useState(false);
  const [IconColor, setIconColor] = useState('');
  const [IconSelect, setIconSelect] = useState(1);

  const handleSelectPrimaryColor = ({hex}) => {
    setPrimaryColor(hex); // Update primary color
    chatIconBackground(hex);
  };

  const handleSelectIconColor = ({hex}) => {
    setIconColor(hex); // Update primary color
    chatIconColor(hex);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Chat Icon (60 X 60 px ) </Text>
      <View
        style={{
          ...commonStyles.verticleView,
          paddingHorizontal: '5%',
          marginTop: '3%',
          marginBottom: '4%',
        }}>
        <TouchableOpacity
          onPress={() => {setIconSelect(1),chatIcon(1)}}
          style={{
            ...styles.iconContainer,
            backgroundColor:IconSelect==1? primaryColor ? primaryColor : COLOR.mhroon_1:COLOR.whites,
          }}>
          <Image
            source={Icon.chat_1}
            style={{
              ...styles.chatIcon,
              tintColor:IconSelect==1?  IconColor ? IconColor : COLOR.white:COLOR.gray_5,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {setIconSelect(2),chatIcon(2)}}
          style={{
            ...styles.iconContainer,
            backgroundColor:IconSelect==2? primaryColor ? primaryColor : COLOR.mhroon_1:COLOR.whites,
          }}>
          <Image
            source={Icon.chat_2}
            style={{
              ...styles.chatIcon,
              tintColor:IconSelect==2?  IconColor ? IconColor : COLOR.white:COLOR.gray_5,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {setIconSelect(3),chatIcon(3)}}
          style={{
            ...styles.iconContainer,
            backgroundColor:IconSelect==3? primaryColor ? primaryColor : COLOR.mhroon_1:COLOR.whites,
          }}>
          <Image
            source={Icon.chat_3}
            style={{
              ...styles.chatIcon,
              tintColor:IconSelect==3?  IconColor ? IconColor : COLOR.white:COLOR.gray_5,
            }}
          />
        </TouchableOpacity>
        <View>
          <TouchableOpacity
          onPress={() => {setIconSelect(4),chatIcon(4)}}
          style={{
              ...styles.iconContainer,
              alignSelf: 'center',
              marginBottom: '1%',
              backgroundColor:IconSelect==4? primaryColor ? primaryColor : COLOR.mhroon_1:COLOR.whites,
            }}>
            <Image
              source={Icon.chat_4}
              style={{
                ...styles.chatIcon,
                tintColor:IconSelect==4?  IconColor ? IconColor : COLOR.white:COLOR.gray_5,
              }}
            />
          </TouchableOpacity>
          <Text style={styles.UploadText}>Upload Icon</Text>
        </View>
      </View>
      <Text style={styles.tittle}>Background Color</Text>
      <BackgroundColorPicker
        onpres={() => setShowPrimaryPicker(true)}
        color={primaryColor}
        isoPen={showPrimaryPicker}
        selectColor={handleSelectPrimaryColor}
        close={() => setShowPrimaryPicker(false)}
      />
      <Text style={{...styles.tittle, marginTop: '4%'}}>Icon Color</Text>
      <BackgroundColorPicker
        onpres={() => setShowIconColor(true)}
        close={() => setShowIconColor(false)}
        color={IconColor}
        isoPen={showIconColor}
        selectColor={handleSelectIconColor}
      />

      <View style={{...commonStyles.horizontalView, marginTop: '5%'}}>
        <Text style={{...styles.tittle, marginRight: '4%'}}>
          Show Webchat Bubble
        </Text>
        <ToggleSwitch
          isOn={OpenWebchat}
          onColor={COLOR.primary}
          offColor={COLOR.gray_5}
          size="small"
          onToggle={isOn => {
            setOpenWebchat(isOn);
          }}
        />
      </View>

      <View style={{...commonStyles.horizontalView, marginTop: '5%'}}>
        <Text style={{...styles.tittle, marginRight: '4%'}}>
          Open Webchat Bubble With Sound
        </Text>
        <ToggleSwitch
          isOn={showWebchat}
          onColor={COLOR.primary}
          offColor={COLOR.gray_5}
          size="small"
          onToggle={isOn => {
            setShowWebchat(isOn);
          }}
        />
      </View>

      <View style={{...commonStyles.horizontalView, marginTop: '5%'}}>
        <Text style={styles.tittle}>Webchat Bubble With Message</Text>
      </View>
      <TextInput
        multiline
        style={styles.commentStyle}
        placeholder="Have a question? Ask us, we are here to help!"
        placeholderTextColor={COLOR.gray_5}
      />
    </View>
  );
};
export default ChatBubble;
