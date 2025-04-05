import {ScrollView, Text, useWindowDimensions, View} from 'react-native';
import styles from './style';
import {useState} from 'react';
import {COLOR, wp} from '../../../themes/StyleGuides';
import Login from '../../../component/other/OnbordingModule/Login';
import ProfileName from '../../../component/other/OnbordingModule/ProfileName';
import BusinessName from '../../../component/other/OnbordingModule/BusinessName';
import MobileNumber from '../../../component/other/OnbordingModule/MobileNumber';
import EnterCode from '../../../component/other/OnbordingModule/EnterCode';
import TopGoals from '../../../component/other/OnbordingModule/TopGoals';
import UploadPhoto from '../../../component/other/OnbordingModule/UploadPhoto';
import YourIndustry from '../../../component/other/OnbordingModule/YourIndustry';
import YourCustomers from '../../../component/other/OnbordingModule/YourCustomers';
import CompanySlogen from '../../../component/other/OnbordingModule/CompanySlogen';
import ScheduleCall from '../../../component/other/OnbordingModule/ScheduleCall';
import WebsiteTextable from '../../../component/other/OnbordingModule/WebsiteTextable';
import SuccessAccount from '../../../component/other/OnbordingModule/SuccessAccount';
import SCREEN from '../../../data/ScrName';

const AccountSetUp = (props:any) => {
  const{navigation}=props
  const [currentBox, setCurrentBox] = useState(1); // Set initial box number to 1
  const totalBoxes = 13;
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  return (
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderText}>Account Setup</Text>
      </View>
      <View style={styles.indecatorContainer}>
        {Array.from({length: totalBoxes}, (_, index) => (
          <View
            key={index}
            style={[
              styles.box,

              {
                backgroundColor:
                  currentBox >= 13
                    ? COLOR.primary
                    : currentBox > index
                    ? COLOR.perpal
                    : COLOR.white1,
                    width:isLandscape?wp(14):wp(6.5)
              },
            ]}
          />
        ))}
      </View>

      {currentBox == 1 ? (
        <Login onpress={() => setCurrentBox(currentBox + 1)} onpressLogin={()=>navigation.navigate(SCREEN.Login)} />
      ) : currentBox === 2 ? (
        <ProfileName onpress={() => setCurrentBox(currentBox + 1)} />
      ) : currentBox === 3 ? (
        <BusinessName onpress={() => setCurrentBox(currentBox + 1)} />
      ) : currentBox === 4 ? (
        <MobileNumber onpress={() => setCurrentBox(currentBox + 1)} />
      ) : currentBox === 5 ? (
        <EnterCode onpress={() => setCurrentBox(currentBox + 1)} />
      ) : currentBox === 6 ? (
        <TopGoals onpress={() => setCurrentBox(currentBox + 1)} />
      ) : currentBox === 7 ? (
        <UploadPhoto onpress={() => setCurrentBox(currentBox + 1)} />
      ) : currentBox === 8 ? (
        <YourIndustry onpress={() => setCurrentBox(currentBox + 1)} />
      ) : currentBox === 9 ? (
        <YourCustomers onpress={() => setCurrentBox(currentBox + 1)} />
      ) : currentBox === 10 ? (
        <CompanySlogen onpress={() => setCurrentBox(currentBox + 1)} />
      ) : currentBox === 11 ? (
        <ScheduleCall onpress={() => setCurrentBox(currentBox + 1)} />
      ) : currentBox === 12 ? (
        <WebsiteTextable onpress={() => setCurrentBox(currentBox + 1)} />
      ) : (
        <SuccessAccount onpress={() =>  navigation.navigate(SCREEN.DrawerNavigations, {
          screen: SCREEN.DrawerStack,
          params: {
            screen: SCREEN.GeneralSettingsAccount,
          },
        })} />
      )}

      <View style={styles.bottomBar} />
    </View>
  );
};
export default AccountSetUp;
