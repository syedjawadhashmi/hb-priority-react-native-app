import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';
import {COLOR} from '../../../themes/StyleGuides';

const SendEmail = (prop: any) => {
  const {navigation} = prop;

  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="Inbox"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <View style={styles.IconConainer}>
        <TouchableOpacity>
          <Image style={styles.IconStyle} source={Icon.attechment} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.IconStyle} source={Icon.send} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputTextContainer}>
        <Text style={styles.titleinputText}>Form</Text>
        <TextInput
          style={styles.textinput}
          placeholder="@gmail.com"
          placeholderTextColor={COLOR.gray_5}
        />
      </View>
      <View style={styles.inputTextContainer}>
        <Text style={styles.titleinputText}>To</Text>
        <TextInput
          style={styles.textinput}
          placeholder="@gmail.com"
          placeholderTextColor={COLOR.gray_5}
        />
      </View>
      <View style={styles.inputTextContainer}>
        <Text style={{...styles.titleinputText, marginRight: '3%'}}>
          Subject
        </Text>
        <TextInput
          placeholder="Here is your estimate."
          style={styles.textinput}
          placeholderTextColor={COLOR.gray_5}
        />
      </View>

      <TextInput
        style={styles.smsText}
        multiline
        placeholderTextColor={COLOR.gray}
        placeholder="Jan, Heres the estimate you requested. We would love to work with you!"
      />
    </View>
  );
};
export default SendEmail;
