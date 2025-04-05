import {Image, ScrollView, Text, View} from 'react-native';
import styles from './style';
import Buttons from '../../../common/Buttons';
import {Images} from '../../../../assest';
import {inboxProp} from '../../../../data/Types';

const CompanySlogen = (props: inboxProp) => {
  const {onpress} = props;

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={{...styles.Title, marginTop: '12%'}}>
        We are already working on{'\n'}provisioning
      </Text>
      <Text style={styles.Title}>
        a business phone number to{'\n'}separate your work-life and{'\n'}
        personal-life.
      </Text>
      <Buttons
        title={'Continue'}
        container={styles.ContinueBtn}
        onpress={onpress}
      />
      <Image source={Images.HubSparkLogo} style={styles.logo} />
      </ScrollView>
    </View>
  );
};
export default CompanySlogen;
