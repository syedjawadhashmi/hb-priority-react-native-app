import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';

import styles from './style';
import {Icon} from '../../../../assest';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import DropDown from '../../../core/DropDown';
import {useState} from 'react';
import {
  Dropdata,
  WebchatSettingsWindowOpens,
} from '../../../../data/DummayData';

const ChatHeader = () => {
  const [company, setcompany] = useState(null);
  const [opencompany, setOpencompany] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{...commonStyles.verticleView}}>
        <Text
          style={{
            ...styles.tittle,
            marginBottom: '2%',
          }}>
          Team Avatar
        </Text>
        <View>
          <TouchableOpacity
            style={{
              ...styles.iconContainer,
              alignSelf: 'center',
              marginBottom: '1%',
            }}>
            <Image source={Icon.chat_4} style={styles.chatIcon} />
          </TouchableOpacity>
          <Text style={styles.UploadText}>Upload Image</Text>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          placeholderTextColor={COLOR.gray_5}
        />
      </View>
      <Text
        style={{
          ...styles.tittle,
          marginBottom: '2%',
        }}>
        Window Opens
      </Text>
      <DropDown
        DropDownContaianer={{top: 28}}
        isOpen={opencompany}
        toggleDropdown={() => setOpencompany(opencompany ? false : true)}
        options={WebchatSettingsWindowOpens}
        onSelect={(e: any) => setcompany(e)}
        selectedOption={company}
        placeHolder={'Automatically after 5 seconds'}
      />
      <Text
        style={{
          ...styles.tittle,
          marginBottom: '2%',
        }}>
        Header
      </Text>
      <TextInput
        style={styles.comment}
        multiline
        placeholder="Let’s chat"
        placeholderTextColor={COLOR.gray_5}
      />
      <Text
        style={{
          ...styles.tittle,
          marginBottom: '2%',
        }}>
        Message
      </Text>
      <TextInput
        style={styles.comment}
        multiline
        placeholder="Have a question? Ask us, we are here to help!"
        placeholderTextColor={COLOR.gray_5}
      />
    </View>
  );
};
export default ChatHeader;
