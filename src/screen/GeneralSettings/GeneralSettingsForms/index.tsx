import {ScrollView, Text, View} from 'react-native';

import styles from './style';
import GeneralInformation from '../../../component/other/GeneralSettings/GeneralInformation';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';
import BusinessPhysicalA from '../../../component/other/GeneralSettings/BusinessPhysicalA';
import AuthorizedRepresentative from '../../../component/other/GeneralSettings/AuthorizedRepresentative';
import ContactSearchPreferences from '../../../component/other/GeneralSettings/ContactSearchPreferences';
import MissedCall from '../../../component/other/GeneralSettings/MissedCall';
import SCREEN from '../../../data/ScrName';
import { hp } from '../../../themes/StyleGuides';

const GeneralSettingsForms = (prop: any) => {
  const {navigation} = prop;

  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="General Settings"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView>
        <GeneralInformation />
        <BusinessPhysicalA />
        <AuthorizedRepresentative />
        <ContactSearchPreferences/>
        <MissedCall onpress={()=>navigation.navigate(SCREEN.GeneralSettingUsers)}/>
          <View style={{height:hp(10)}} />
      </ScrollView>

      <View style={styles.bottomBar}></View>

    </View>
  );
};
export default GeneralSettingsForms;
