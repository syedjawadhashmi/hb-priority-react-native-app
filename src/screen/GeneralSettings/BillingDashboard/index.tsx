import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import styles from './style';
import {COLOR} from '../../../themes/StyleGuides';
import {useState} from 'react';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';
import PaymentsGeneralSetting from '../../../component/other/GeneralSettings/PaymentsGeneralSetting';
import WalletTransactions from '../WalletTransactions';
import UpdatePaymentMethod from '../../../component/other/GeneralSettings/UpdatePaymentMethod';
import TaxInformation from '../../../component/other/GeneralSettings/TaxInformation';
import BillingInformationModal from '../../../component/other/GeneralSettings/BillingInformationModal';

const BillingDashboard = (prop: any) => {
  const {navigation} = prop;
  const [select, setSelect] = useState(0);
  const [paymentModal, setPaymentModal] = useState(false);
  const [TaxInformationModal, setTaxInformationModal] = useState(false);
  const [IsBillingInformationModal, setIsBillingInformationModal] = useState(false);

  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="General Settings"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView>
        <View style={styles.AmmountContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Billing Dashboard</Text>
          </View>
          <View style={styles.selectContainer}>
            <TouchableOpacity
              onPress={() => setSelect(0)}
              style={{
                ...styles.selectBtn,
                backgroundColor: select == 0 ? COLOR.primary : COLOR.whites,
              }}>
              <Text style={styles.selectdText}>Payments</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelect(1)}
              style={{
                ...styles.selectBtn,
                backgroundColor: select == 1 ? COLOR.primary : COLOR.whites,
              }}>
              <Text style={styles.selectdText}>Wallet & Transactions</Text>
            </TouchableOpacity>
          </View>

          <View>
            {select == 0 ? (
              <PaymentsGeneralSetting
                navigation={navigation}
                onpress={() => setPaymentModal(true)}
              />
            ) : (
              <WalletTransactions />
            )}
          </View>
        </View>
      </ScrollView>
      <UpdatePaymentMethod
        visible={paymentModal}
        close={() => setPaymentModal(false)}
        save={() => {
          setTaxInformationModal(true), setPaymentModal(false);
        }}
      />
      <TaxInformation
        visible={TaxInformationModal}
        close={() => setTaxInformationModal(false)}
        save={() => {setIsBillingInformationModal(true),setTaxInformationModal(false)}}
      />
      <BillingInformationModal
        visible={IsBillingInformationModal}
        close={() => setIsBillingInformationModal(false)}
        save={() => {}}
      />
      <View style={styles.bottomBar}></View>
    </View>
  );
};
export default BillingDashboard;
