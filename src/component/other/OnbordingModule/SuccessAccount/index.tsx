import {Image, ScrollView, Text, View} from 'react-native';
import styles from './style';
import Buttons from '../../../common/Buttons';
import {Images} from '../../../../assest';
import {inboxProp} from '../../../../data/Types';

const SuccessAccount = (props: inboxProp) => {
  const {onpress} = props;

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text  style={styles.Title}>
        Congrats! In two minutes, you will be able to accept payments from your
        customers!
      </Text>
      <Buttons
        title={'Finish HubSpark Payments Setup'}
        container={styles.ContinueBtn}
        onpress={onpress}
      />
      <Buttons
        title={'Skip This For Now'}
        container={styles.ScheduleBtn}
        onpress={onpress}
      />
      <Image source={Images.HubSparkLogo} style={styles.logo} />
      </ScrollView>
    </View>
  );
};
export default SuccessAccount;
