import {
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './style';
import {Icon, Images} from '../../../../assest';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import Buttons from '../../../common/Buttons';
import {countryCodes} from '../../../../data/DummayData';
import {useState} from 'react';

interface LetschatFormProps {
  chatIcon?: any;
  chatIconBackground?: any;
  chatIconColor?: any;
  buttonTextColor?:any,
  buttonColor?:any,
  primaryColor?:any,
  HeaderColor?:any
}

const LetschatForm = (props: LetschatFormProps) => {
  const {chatIcon, chatIconBackground, chatIconColor,HeaderColor,primaryColor,buttonColor,buttonTextColor} = props;
  const [openCountry, setOpenCountry] = useState(false);
  const [codeCountry, setCodeCountry] = useState('');
  const [shortName, setShortNameCountry] = useState('');

  const handalPicker = (code: any, shortName: any) => {
    setCodeCountry(code);
    setShortNameCountry(shortName);
    setOpenCountry(false);
  };
  const ModalNumber = () => {
    return (
      <Modal transparent visible={openCountry}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <ScrollView>
              <Text
                style={{
                  ...styles.CountryCode,
                  alignSelf: 'center',
                  marginVertical: '5%',
                }}>
                Country Code
              </Text>
              {countryCodes.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={{paddingVertical: '2%'}}
                  onPress={() => handalPicker(item.code, item.shortName)}>
                  <Text style={{...styles.CountryCode, marginLeft: '5%'}}>
                    {item.name}
                    {item.code}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainCOntainer}>
          <View style={styles.card}>
            <View style={{...styles.LetChatContainer,backgroundColor:HeaderColor?HeaderColor:"#F8F8F8"}}>
              <Text style={{...styles.letsCat,color:primaryColor?primaryColor:COLOR.black}}>Let’s chat</Text>
              <Text style={{...styles.discription,color:primaryColor?primaryColor:COLOR.gray_5}}>
                Have a question? Ask us, we are here to help!
              </Text>
              <Image source={Images.PhoneNumberImage} style={styles.images} />
            </View>

            <TextInput
              style={styles.TextInput}
              placeholder="Name"
              placeholderTextColor={COLOR.gray_14}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor={COLOR.gray_14}
            />

            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: COLOR.gray_13,
                width: '85%',
                height: 40,
                alignSelf: 'center',
                ...commonStyles.verticleView,
              }}>
              <TouchableOpacity
                style={{...commonStyles.horizontalView}}
                onPress={() => setOpenCountry(true)}>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: '400',
                    color: COLOR.gray_5,
                    marginRight: '2%',
                  }}>
                  {codeCountry ? shortName + codeCountry : 'US + 1'}
                </Text>
                <Image
                  source={Icon.dropDown2}
                  style={{width: 10, height: 10, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
              <TextInput
                style={{flex: 1, fontSize: 10, color: COLOR.gray_13}}
                placeholder="Mobile Phone"
                placeholderTextColor={COLOR.gray_14}
                keyboardType="number-pad"
              />
            </View>

            <TextInput
              style={styles.TextInput}
              placeholder="Message"
              placeholderTextColor={COLOR.gray_14}
            />
            <Buttons
              title={'Send'}
              container={{...styles.btnContainer,backgroundColor:buttonColor?buttonColor:COLOR.SkyBlue_1}}
              titleStyle={{fontSize: 12,color:buttonTextColor?buttonTextColor:COLOR.whites}}
            />

            <Text style={styles.terms}>
              By sending this message, you expressly consent to receive
              communications from us. You may opt out at any time.{' '}
            </Text>
          </View>

          <TouchableOpacity
            style={{
              ...styles.ChatIcon,
              backgroundColor: chatIconBackground
                ? chatIconBackground
                : COLOR.whites,
            }}>
            <Image
              source={
                chatIcon == 1
                  ? Icon.chat_1
                  : chatIcon == 2
                  ? Icon.chat_2
                  : chatIcon == 3
                  ? Icon.chat_3
                  : Icon.chat_4
              }
              style={{
                ...styles.chat,
                tintColor: chatIconColor ? chatIconColor : COLOR.gray_5,
              }}
            />
          </TouchableOpacity>
        </View>
        <ModalNumber />
      </ScrollView>
    </View>
  );
};
export default LetschatForm;
