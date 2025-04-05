import {
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './style';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import {Icon} from '../../../../assest';
import InvoiceTitle from '../../../core/InvoiceTitle';
import {useState} from 'react';
import DropDown from '../../../core/DropDown';
import {Dropdata} from '../../../../data/DummayData';
import {UpdatePaymentModal} from '../../../../data/Types';

const UpdatePaymentMethod = (props: UpdatePaymentModal) => {
  const {close, visible, save} = props;
  const [preference, setPreference] = useState(false);
  const [selectData, setSelectData] = useState({});
  const handalData = (key: any, value: any) => {
    const trimmedKey = key.replace(/\s+/g, '');

    const updatedData = {...selectData, [trimmedKey]: value};
    setSelectData(updatedData);
  };
  return (
    <Modal transparent visible={visible}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <ScrollView>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Update Payment Method</Text>
            <TouchableOpacity onPress={close}>
              <Text style={styles.close}>X</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title_2}>Update your card detalis</Text>

          <View>
            <Text style={{...styles.TitleField, marginLeft: '5%'}}>
              Card Number:
            </Text>
            <View
              style={{
                width: '90%',
                height: 35,
                borderRadius: 10,
                backgroundColor: COLOR.whites,
                ...commonStyles.verticleView,
                alignSelf: 'center',
                paddingLeft: '3%',
                paddingRight:"2%"
              }}>
              <TextInput
                maxLength={16}
                style={{padding: 0, flex: 1, color: COLOR.black}}
              />
              <View style={{...commonStyles.horizontalView}}>
                <Image source={Icon.Credit_card1} style={styles.cardStyle} />
                <Image source={Icon.Credit_card2} style={styles.cardStyle} />
                <Image source={Icon.Credit_card3} style={styles.cardStyle} />
                <Image source={Icon.Credit_card4} style={styles.cardStyle} />
              </View>
            </View>
          </View>

          <View
            style={{
              ...commonStyles.verticleView,
              paddingHorizontal: '5%',
              marginTop: '3%',
            }}>
            <InvoiceTitle
              title="Expiration Date"
              container={{...styles.TextFild}}
              onChange={(e: any) => handalData('RoutingNumber', e)}
              
              placeholder={'MM/YY'}
              maxLength={5}
            />
            <InvoiceTitle
              maxLength={3}
              placeholder={'CVC'}
              title="Security Code"
              container={{...styles.TextFild}}
              onChange={(e: any) => handalData('AccountNumber', e)}
            />
          </View>

          <DropDown
            isOpen={preference}
            toggleDropdown={() => setPreference(preference ? false : true)}
            options={Dropdata}
            onSelect={(item: any) => handalData('Country', item)}
            selectedOption={selectData?.Country}
            title={'Country'}
          />

          <Text style={styles.textDiscription}>
            By providing your card information, you allow HubSpark to charge
            your card for future payments in accordance with heir terms.
          </Text>

          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={save}
              style={{
                ...styles.btnStyle,
                backgroundColor: COLOR.primary,
                marginRight: '5%',
              }}>
              <Text style={{...styles.btnText, color: COLOR.black}}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={close}
              style={{...styles.btnStyle, backgroundColor: COLOR.red}}>
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
export default UpdatePaymentMethod;
