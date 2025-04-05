import {Image, Text, View,ScrollView} from 'react-native';
import styles from './style';
import InvoiceTitle from '../../../core/InvoiceTitle';
import Buttons from '../../../common/Buttons';
import {inboxProp} from '../../../../data/Types';
import {Images} from '../../../../assest';
import { useState } from 'react';

const ProfileName = (props: inboxProp) => {
  const {onpress} = props;
  const [selectData, setSelectData] = useState({});
  const handalData = (key: any, value: any) => {
    const trimmedKey = key.replace(/\s+/g, '');

    const updatedData = {...selectData, [trimmedKey]: value};
    setSelectData(updatedData);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.title}>Let’s start by setting up your profile.</Text>
      <Text style={styles.profile}>Set up your profile.</Text>
      <InvoiceTitle
        title="First Name"
        container={{width: '80%'}}
        titleStyle={styles.titleStyle}
        onChange={(e: any) => handalData('FirstName', e)}

      />
      <InvoiceTitle
        title="Last Name"
        container={{width: '80%'}}
        titleStyle={styles.titleStyle}
        onChange={(e: any) => handalData('LastName', e)}

      />

      
      <Buttons
        title={'Continue with Email'}
        container={styles.btnStyle}
        onpress={onpress}
      />
      <Image source={Images.HubSparkLogo} style={styles.logo} />
      </ScrollView>
    </View>
  );
};
export default ProfileName;
