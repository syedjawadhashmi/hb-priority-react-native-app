import {ScrollView, Text, View} from 'react-native';
import styles from './style';
import Header from '../../component/common/Header';
import {Icon} from '../../assest';
import Inbox from '../../component/other/DashboardComponent/Inbox';
import Marketing from '../../component/other/DashboardComponent/Marketing';
import Reviews from '../../component/other/DashboardComponent/Reviews';
import Seo from '../../component/other/DashboardComponent/Seo';
import Calendar from '../../component/other/DashboardComponent/Calendar';
import Payments from '../../component/other/DashboardComponent/Payments';
import Reports from '../../component/other/DashboardComponent/Reports';
import InternalMessages from '../../component/other/DashboardComponent/InternalMessages';
import CRMDashBoard from '../../component/other/DashboardComponent/CRMDashBoard';
import Invoices from '../../component/other/DashboardComponent/Invoices';
import Estimates from '../../component/other/DashboardComponent/Estimates';
import Documents from '../../component/other/DashboardComponent/Documents';
import DashBoardModal from '../../component/other/DashboardComponent/DashBoardModal';
import {useState} from 'react';
import Input from '../../component/common/Input';
import Buttons from '../../component/common/Buttons';
import {COLOR} from '../../themes/StyleGuides';
import SCREEN from '../../data/ScrName';

const Dashboard = (props: any) => {
  const {navigation} = props;
  const [openModal, setOpenModal] = useState(false);
  const [selector, setSelector] = useState(null);


  return (
    <View style={styles.container}>

      <Header
        firstIcon={Icon.bars}
        title="Dashboard"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView scrollEnabled={true}>
        <Input placeholder={'Search'} IconStyle={{tintColor: COLOR.gray}} />

        <View style={styles.CompView}>
          <Inbox
            onpress={() => navigation.navigate(SCREEN.BottomBarNavigation)}
          />
          <Marketing
            onpress={() =>
              navigation.navigate(SCREEN.DrawerNavigations, {
                screen: SCREEN.DrawerStack,
                params: {
                  screen: SCREEN.MarketingModule,
                },
              })
            }
          />
          <Reviews
            onpress={() =>
              navigation.navigate(SCREEN.DrawerNavigations, {
                screen: SCREEN.DrawerStack,
                params: {
                  screen: SCREEN.Reputation,
                },
              })
            }
          />
        </View>
        <View style={styles.CompView}>
          <Seo
            onpress={() =>
              navigation.navigate(SCREEN.DrawerNavigations, {
                screen: SCREEN.DrawerStack,
                params: {
                  screen: SCREEN.Check_Ins,
                },
              })
            }
          />
          <Calendar
            onpress={() =>
              navigation.navigate(SCREEN.DrawerNavigations, {
                screen: SCREEN.DrawerStack,
                params: {
                  screen: SCREEN.CalendarSearch,
                },
              })
            }
          />
          <Payments
            onpress={() =>
              navigation.navigate(SCREEN.DrawerNavigations, {
                screen: SCREEN.DrawerStack,
                params: {
                  screen: SCREEN.Payments,
                },
              })
            }
          />
        </View>
        <View style={styles.CompView}>
          <Reports />
          <InternalMessages />
          <CRMDashBoard
            onpress={() =>
              navigation.navigate(SCREEN.DrawerNavigations, {
                screen: SCREEN.DrawerStack,
                params: {
                  screen: SCREEN.CRM,
                },
              })
            }
          />
        </View>
        <View style={styles.CompView}>
          <Invoices
            onpress={() =>
              navigation.navigate(SCREEN.DrawerNavigations, {
                screen: SCREEN.DrawerStack,
                params: {
                  screen: SCREEN.PaymentsMethods,
                },
              })
            }
          />
          <Estimates />
          <Documents
            onpress={() =>
              navigation.navigate(SCREEN.DrawerNavigations, {
                screen: SCREEN.DrawerStack,
                params: {
                  screen: SCREEN.DocumentsModule,
                },
              })
            }
          />
        </View>

        <Buttons
          title={'Support'}
          container={styles.BtnCOnatiner}
          onpress={() => setOpenModal(true)}
        />
      </ScrollView>
      <View style={styles.bottomBar}></View>
      <DashBoardModal visible={false} onpress={() => setOpenModal(false)} selector={selector} getData={()=>setSelector} />

    </View>
  );
};
export default Dashboard;
