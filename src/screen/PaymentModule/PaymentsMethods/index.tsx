import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';
import {useState} from 'react';
import {COLOR} from '../../../themes/StyleGuides';
import * as component from '../../../component';

const PaymentsMethods = (props: any) => {
  const {navigation} = props;
  const [select, setSelect] = useState(0);

  return (
    <View style={styles.container}>
      <Header
        title="Payments"
        firstIcon={Icon.bars}
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView scrollEnabled={true}>
        <View style={styles.selectContainer}>
          <TouchableOpacity
            onPress={() => setSelect(0)}
            style={{
              ...styles.selectBtn,
              backgroundColor: select == 0 ? COLOR.primary : COLOR.whites,
            }}>
            <Text style={styles.selectdText}>Quick{'\n'}Invoice</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelect(1)}
            style={{
              ...styles.selectBtn,
              backgroundColor: select == 1 ? COLOR.primary : COLOR.whites,
            }}>
            <Text style={styles.selectdText}>Virtual Terminal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelect(2)}
            style={{
              ...styles.selectBtn,
              backgroundColor: select == 2 ? COLOR.primary : COLOR.whites,
            }}>
            <Text style={styles.selectdText}>
              Keyed{'\n'}
              Credit Card
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {select == 0 ? (
            <component.QuickInvoice />
          ) : select == 1 ? (
            <component.VirtualTerminal />
          ) : (
            <component.KeyedCreditCard />
          )}
        </ScrollView>
      </ScrollView>
      <View style={styles.bottomBar}></View>
    </View>
  );
};
export default PaymentsMethods;
