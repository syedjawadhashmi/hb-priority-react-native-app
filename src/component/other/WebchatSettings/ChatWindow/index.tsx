import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';
import BackgroundColorPicker from '../BackgroundColorPicker';
import {useState} from 'react';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import ToggleSwitch from 'toggle-switch-react-native';
import {Icon} from '../../../../assest';

interface ChatBubbleProps {
  buttonColor?: (color: number) => void;
  buttonTextColor?: (color: string) => void;
  primaryColor?: (color: string) => void;
  HeaderColor?: (color: string) => void;

}

const ChatWindow = (props:ChatBubbleProps) => {
  const {
    primaryColor = () => {},
    buttonColor = () => {},
    buttonTextColor = () => {},
    HeaderColor = () => {},

  } = props;
  const [windowSelector, setWindowSelector] = useState(false);
  const [state, setState] = useState({
    showHeaderPicker: false,
    showPrimaryPicker: false,
    showButtonColor: false,
    showButtonTextColor: false,
    HeaderColor: '',
    primaryColor: '',
    buttonColor: '',
    buttonTextColor: '',
    Webchat: false,
  });

  const handleStateUpdate = (key, value) => {
    setState(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Window Size</Text>
      <View style={styles.WindowSIzeContainer}>
        <View>
          <TouchableOpacity
            style={{
              ...styles.WindowSIze,
              marginLeft: '5%',
              borderColor:
                windowSelector == false ? COLOR.perpal_3 : COLOR.black,
              borderWidth: windowSelector == false ? 1 : 0,
            }}
            onPress={() => setWindowSelector(false)}>
            <View style={styles.WindowsHeader}>
              <View style={styles.WindowsCircle} />
              <View style={styles.WindowsCircle} />
              <View style={styles.WindowsCircle} />
            </View>
            <View
              style={{
                width: 30,
                height: 50,
                backgroundColor: COLOR.gray_5,
                borderRadius: 5,
                alignSelf: 'flex-end',
                marginRight: '10%',
                marginTop: '7%',
              }}
            />
          </TouchableOpacity>
          <Text style={styles.SizeText}>Small</Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              ...styles.WindowSIze,
              marginLeft: '5%',
              borderColor: windowSelector ? COLOR.perpal_3 : COLOR.black,
              borderWidth: windowSelector ? 1 : 0,
            }}
            onPress={() => setWindowSelector(true)}>
            <View style={styles.WindowsHeader}>
              <View style={styles.WindowsCircle} />
              <View style={styles.WindowsCircle} />
              <View style={styles.WindowsCircle} />
            </View>
            <View
              style={{
                width: 30,
                height: 69,
                backgroundColor: COLOR.gray_5,
                borderRadius: 5,
                alignSelf: 'flex-end',
              }}
            />
          </TouchableOpacity>
          <Text style={styles.SizeText}>Large</Text>
        </View>
      </View>

      <View>
        <Text style={{...styles.tittle, marginTop: '3%', marginBottom: '2%'}}>
          Header Color
        </Text>
        <BackgroundColorPicker
          onpres={() => handleStateUpdate('showHeaderPicker', true)}
          color={state.HeaderColor}
          isoPen={state.showHeaderPicker}
          selectColor={({hex}) => {
            handleStateUpdate('HeaderColor', hex);
            HeaderColor(hex)
            
          }}
          close={()=>handleStateUpdate('showHeaderPicker', false)}
        />
      </View>

      <View>
        <Text style={{...styles.tittle, marginTop: '3%', marginBottom: '2%'}}>
          Header Text Color
        </Text>
        <BackgroundColorPicker
          onpres={() => handleStateUpdate('showPrimaryPicker', true)}
          color={state.primaryColor}
          isoPen={state.showPrimaryPicker}
          selectColor={({hex}) => {
            handleStateUpdate('primaryColor', hex);
            primaryColor(hex)
          }}
          close={()=>handleStateUpdate('showPrimaryPicker', false)}

        />
      </View>

      <View>
        <Text style={{...styles.tittle, marginTop: '3%', marginBottom: '2%'}}>
          Button Color
        </Text>
        <BackgroundColorPicker
          onpres={() => handleStateUpdate('showButtonColor', true)}
          color={state.buttonColor}
          isoPen={state.showButtonColor}
          selectColor={({hex}) => {
            handleStateUpdate('buttonColor', hex);
            buttonColor(hex)
          }}
          close={()=>handleStateUpdate('showButtonColor', false)}

        />
      </View>

      <View>
        <Text style={{...styles.tittle, marginTop: '3%', marginBottom: '2%'}}>
          Button Text Color
        </Text>
        <BackgroundColorPicker
          onpres={() => handleStateUpdate('showButtonTextColor', true)}
          color={state.buttonTextColor}
          isoPen={state.showButtonTextColor}
          selectColor={({hex}) => {
            handleStateUpdate('buttonTextColor', hex);
            buttonTextColor(hex)
          }}
          close={()=>handleStateUpdate('showButtonTextColor', false)}

        />
      </View>
      <Text
        style={{
          ...styles.tittle,
          marginTop: '3%',
          marginBottom: '2%',
          color: COLOR.gray_5,
        }}>
        GENERAL
      </Text>
      <View style={{...commonStyles.horizontalView}}>
        <Text
          style={{
            ...styles.tittle,
            marginTop: '3%',
            marginBottom: '2%',
            fontSize: 13,
          }}>
          Locations
        </Text>
        <Image source={Icon.Error} style={styles.ErrorStyle} />
      </View>

      <View style={{...commonStyles.horizontalView}}>
        <Text style={{...styles.tittle, marginRight: '4%'}}>
          Show Webchat Bubble
        </Text>
        <ToggleSwitch
          isOn={state.Webchat}
          onColor={COLOR.primary}
          offColor={COLOR.gray_5}
          size="small"
          onToggle={isOn => {
            handleStateUpdate('Webchat', isOn);
          }}
        />
      </View>
      <Text style={styles.location}>2 Locations</Text>
      <View style={{...commonStyles.horizontalView}}>
        <Text
          style={{
            ...styles.tittle,
            marginTop: '3%',
            marginBottom: '2%',
            fontSize: 13,
          }}>
          Enabled Teams
        </Text>
        <Image source={Icon.Error} style={styles.ErrorStyle} />
      </View>
      <Text
        style={{
          ...styles.tittle,
          marginTop: '3%',
          marginBottom: '2%',
          fontSize: 13,
        }}>
        Click here
        <Text style={{color: COLOR.gray_5}}> to create your first team</Text>
      </Text>
      <View style={{...commonStyles.horizontalView}}>
        <Text
          style={{
            ...styles.tittle,
            marginTop: '3%',
            marginBottom: '2%',
            fontSize: 13,
          }}>
          Disclaimer
        </Text>
        <Image source={Icon.Error} style={styles.ErrorStyle} />
      </View>

      <TextInput
        style={styles.comment}
        multiline
        placeholder="By sending this message, you expressly consent to receive communications from us. You may opt out at any time."
        placeholderTextColor={COLOR.gray_5}
      />
    </View>
  );
};

export default ChatWindow;
