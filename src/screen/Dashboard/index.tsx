import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
import {COLOR, commonStyles} from '../../themes/StyleGuides';
import SCREEN from '../../data/ScrName';

const data = [
  {
    title: 'Live Chat',
    icons: Icon.MicroPhone,
  },
  {
    title: 'Live Video',
    icons: Icon.livecall,
  },
  {
    title: 'Phone Call',
    icons: Icon.PhoneCallsecond,
  },
  {
    title: 'Email',
    icons: Icon.Emailsecond,
  },

  {
    title: 'Create Ticket',
    icons: Icon.CreateTicket,
  },
];
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
            onpress={() => navigation.navigate(SCREEN.DrawerNavigations)}
          />
          <Marketing />
          <Reviews />
        </View>
        <View style={styles.CompView}>
          <Seo />
          <Calendar />
          <Payments
            onpress={() =>
              navigation.navigate(SCREEN.DashBoardDrawer, {
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
          <CRMDashBoard />
        </View>
        <View style={styles.CompView}>
          <Invoices
          
          />
          <Estimates />
          <Documents />
        </View>

        <Buttons
          title={'Support'}
          container={styles.BtnCOnatiner}
          onpress={() => setOpenModal(true)}
        />
      </ScrollView>
      <View style={styles.bottomBar}></View>
      <Modal visible={openModal} transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: COLOR.lightBlack,
            justifyContent: 'center',
          }}>
          <View style={styles.modelStyle}>
            <TouchableOpacity
              style={styles.crossBtn}
              onPress={() => setOpenModal(false)}>
              <Image source={Icon.crose} style={styles.cross} />
            </TouchableOpacity>

            <View>
              {data.map((item, index: any) => (
                <View
                  key={index}
                  style={{
                    ...commonStyles.horizontalView,
                    marginBottom: '4%',
                    marginLeft: '5%',
                  }}>
                  <TouchableOpacity
                    onPress={() => setSelector(index)}
                    style={styles.selctor}>
                    {selector === index && <View style={styles.selectorS} />}
                  </TouchableOpacity>
                  <View style={styles.titleContainer}>
                    <Image style={styles.icon} source={item.icons} />
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default Dashboard;
