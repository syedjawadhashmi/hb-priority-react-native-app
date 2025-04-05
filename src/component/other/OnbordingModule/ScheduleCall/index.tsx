import {Image, ScrollView, Text, View} from 'react-native';
import styles from './style';
import Buttons from '../../../common/Buttons';
import {Images} from '../../../../assest';
import {inboxProp} from '../../../../data/Types';

const ScheduleCall = (props: inboxProp) => {
  const {onpress} = props;

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.Title}>Schedule a call </Text>

      <Buttons
        title={'I’ll Explore On My Own'}
        container={styles.ContinueBtn}
        onpress={onpress}
      />
         <Buttons
        title={'Schedule A Call'}
        container={styles.ScheduleBtn}
        onpress={onpress}
      />
      <Image source={Images.HubSparkLogo} style={styles.logo} />
      </ScrollView>
    </View>
  );
};
export default ScheduleCall;
