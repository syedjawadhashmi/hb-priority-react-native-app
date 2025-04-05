import {Image, ScrollView, Text, View} from 'react-native';
import styles from './style';
import TextInputs from '../../../common/TextInputs';
import {COLOR} from '../../../../themes/StyleGuides';
import Buttons from '../../../common/Buttons';
import {Images} from '../../../../assest';
import {inboxProp} from '../../../../data/Types';

const MobileNumber = (props: inboxProp) => {
  const {onpress} = props;

  return (
    <View style={styles.container}>
      <ScrollView >
        <Text style={styles.Title}>Enter your mobile number</Text>

        <TextInputs
          placeholder={'Enter mobile number'}
          placeholderColor={COLOR.gray_6}
          style={styles.btnStyle}
          keyboardType="number-pad"
        />
        <Buttons
          title={'Continue'}
          container={styles.button}
          onpress={onpress}
        />
        <Text style={styles.discription}>
          By continuing, you authorize HubSpark to send text messages to the
          mobile number provided. Message/data rates may apply.
        </Text>
        <Image source={Images.HubSparkLogo} style={styles.logo} />
      </ScrollView>
    </View>
  );
};
export default MobileNumber;
