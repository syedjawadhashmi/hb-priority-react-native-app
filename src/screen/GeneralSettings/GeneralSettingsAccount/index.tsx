import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './style';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';
import SCREEN from '../../../data/ScrName';
import {COLOR, commonStyles, hp} from '../../../themes/StyleGuides';

const GeneralSettingsAccount = (prop: any) => {
  const {navigation} = prop;

  const data = [
    {
      title: 'General Information',
      icons: Icon.Information,
    },
    {
      title: 'Users',
      icons: Icon.user,
    },
    {
      title: 'Teams',
      icons: Icon.Groupuser,
    },
    {
      title: 'Billing',
      icons: Icon.Wallet,
    },
  ];

  const handalNav = (id: any) => {
    if (id == 0) {
      navigation.navigate(SCREEN.GeneralSettingsForms);
    } else if (id == 1) {
      navigation.navigate(SCREEN.GeneralSettingUsers);
    } else if (id == 2) {
      navigation.navigate(SCREEN.TeamGeneralSetting);
    } else if (id == 3) {
      navigation.navigate(SCREEN.BillingDashboard);
    }
  };
  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="General Settings"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView scrollEnabled={true}>
        <Text style={styles.titleStyle}>Account</Text>
        <Text style={styles.discription}>
          Manage your account including users, employees, support{'\n'}and more!
        </Text>

        <View style={{}}>
          <FlatList
            scrollEnabled={false}
            contentContainerStyle={{}}
            data={data}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={styles.listItems}
                onPress={() => handalNav(index)}>
                <View style={styles.circle}>
                  <Image source={item.icons} style={styles.iconStyle} />
                </View>
                <Text style={styles.itemTitle}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <TouchableOpacity
           onPress={() =>
            navigation.navigate(SCREEN.DrawerNavigations, {
              screen: SCREEN.DrawerStack,
              params: {
                screen: SCREEN.Dashboard,
              },
            })
          }
          style={styles.ArrowContainer}>
          <Image
            source={Icon.right_arrowFull}
            style={styles.arowICon}
          />
        </TouchableOpacity>

        <View style={{height: hp('10%')}} />
      </ScrollView>
      <View style={styles.bottomBar}></View>
    </View>
  );
};
export default GeneralSettingsAccount;
