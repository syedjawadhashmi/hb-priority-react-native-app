import {Image, ScrollView, Text, View} from 'react-native';
import styles from './style';
import TextInputs from '../../../common/TextInputs';
import {COLOR} from '../../../../themes/StyleGuides';
import Buttons from '../../../common/Buttons';
import {Images} from '../../../../assest';
import {inboxProp} from '../../../../data/Types';

const YourCustomers = (props: inboxProp) => {
  const {onpress} = props;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.Title}>
          Who else talks to {'\n'} your customers?
        </Text>
        <Text style={{...styles.discription}}>
          Make customer communication a breeze by adding your team. They will be
          invited as Team Leaders with the ability to invite others. You can
          always{' '}
        </Text>
        <Text style={styles.TeamStyle}>Your team</Text>
        <TextInputs
          placeholder={'Employee #1’s mobile phone or email'}
          placeholderColor={COLOR.gray_6}
          style={styles.btnStyle}
          keyboardType="email-address"
        />
        <TextInputs
          placeholder={'Employee #2’s mobile phone or email'}
          placeholderColor={COLOR.gray_6}
          style={styles.btnStyle}
          keyboardType="email-address"
        />
        <TextInputs
          placeholder={'Employee #3’s mobile phone or email'}
          placeholderColor={COLOR.gray_6}
          style={styles.btnStyle}
          keyboardType="email-address"
        />
        <TextInputs
          placeholder={'Employee #4’s mobile phone or email'}
          placeholderColor={COLOR.gray_6}
          style={styles.btnStyle}
          keyboardType="email-address"
        />

        <View style={styles.buttonContainer}>
          <Buttons
            title={'Skip'}
            container={styles.SkipBtn}
            onpress={onpress}
          />
          <Buttons
            title={'Continue'}
            container={styles.ContinueBtn}
            onpress={onpress}
          />
        </View>
        <Image source={Images.HubSparkLogo} style={styles.logo} />
      </ScrollView>
    </View>
  );
};
export default YourCustomers;
