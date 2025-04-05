import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './style';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import {Icon} from '../../../../assest';
import {useState} from 'react';
import ChargeGeneralSetting from '../ChargeGeneralSetting';
import InvoiceGenerallSatting from '../InvoiceGenerallSatting';
import {PaymentsGeneralSettingProp} from '../../../../data/Types';
import SCREEN from '../../../../data/ScrName';

const PaymentsGeneralSetting = (props: PaymentsGeneralSettingProp) => {
  const [selector, setSelector] = useState(1);
  const {navigation, onpress} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        // onPress={()=>navigation.navigate(SCREEN.TeamGeneralSetting)}
        onPress={onpress}
        style={{
          ...styles.GenerateKeyBtn,
        }}>
        <Text style={{...styles.GenerateKeyText}}>+ Add Payment Method</Text>
      </TouchableOpacity>

      <Text style={styles.paymentText}>Payment Method</Text>
      <View style={styles.VisaCard}>
        <View
          style={{
            ...commonStyles.verticleView,
            paddingHorizontal: '5%',
            marginTop: '2%',
          }}>
          <Image source={Icon.Vise} style={styles.VisaIcon} />
          <TouchableOpacity
            onPress={() => navigation.navigate(SCREEN.TeamGeneralSetting)}>
            <Image
              source={Icon.pan_1}
              tintColor={COLOR.gray_5}
              style={styles.iconstyle}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.VisaStyle}>Visa ************1234</Text>
        <Text style={styles.Date}>Expires 7/2027</Text>
      </View>
      <Text style={styles.paymentText}>Tax Information</Text>

      <View style={styles.VisaCard}>
        <View
          style={{
            ...commonStyles.verticleView,
            paddingHorizontal: '5%',
            marginTop: '2%',
            marginBottom: '2%',
          }}>
          <View />
          <Image
            source={Icon.pan_1}
            tintColor={COLOR.gray_5}
            style={styles.iconstyle}
          />
        </View>
        <Text style={styles.VisaStyle}>John Doe</Text>
        <Text style={styles.Date}>
          1234 Elmwood Avenue, Apt 56B, Springfield, CA 90210
        </Text>
      </View>
      <Text style={styles.paymentText}>Billing Information</Text>
      <View style={styles.VisaCard}>
        <View
          style={{
            ...commonStyles.verticleView,
            paddingHorizontal: '5%',
            marginTop: '2%',
            marginBottom: '2%',
          }}>
          <Image source={Icon.user_1} style={styles.VisaIcon} />
          <Image
            source={Icon.pan_1}
            tintColor={COLOR.gray_5}
            style={styles.iconstyle}
          />
        </View>
        <Text style={styles.VisaStyle}>John Doe</Text>
        <Text style={styles.Date}>
          1234 Elmwood Avenue, Apt 56B, Springfield, CA 90210
        </Text>
      </View>
      <Text style={styles.VisaStyle}>Payments History</Text>
      <Text style={styles.Date}>Keep track of your payments</Text>
      <View style={styles.TitileContainer}>
        <View style={styles.SelectorBtn}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: selector == 1 ? COLOR.perpal_3 : COLOR.gray_7,
              ...commonStyles.center,
              height: 30,
            }}
            onPress={() => setSelector(1)}>
            <Text
              style={{
                ...styles.DropDate,
                color: selector == 1 ? COLOR.gray_7 : COLOR.perpal_3,
              }}>
              Charge
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: selector == 2 ? COLOR.perpal_3 : COLOR.gray_7,
              ...commonStyles.center,
              height: 30,
            }}
            onPress={() => setSelector(2)}>
            <Text
              style={{
                ...styles.DropDate,
                color: selector == 1 ? COLOR.perpal_3 : COLOR.gray_7,
              }}>
              Invoice
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {selector == 1 ? <ChargeGeneralSetting /> : <InvoiceGenerallSatting />}
    </View>
  );
};
export default PaymentsGeneralSetting;
