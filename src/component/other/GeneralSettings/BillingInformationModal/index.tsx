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
import {COLOR, commonStyles, wp} from '../../../../themes/StyleGuides';
import InvoiceTitle from '../../../core/InvoiceTitle';
import {useState} from 'react';
import DropDown from '../../../core/DropDown';
import {Dropdata} from '../../../../data/DummayData';
import {UpdatePaymentModal} from '../../../../data/Types';

const BillingInformationModal = (props: UpdatePaymentModal) => {
  const {close, visible, save} = props;
  const [preference, setPreference] = useState(false);
  const [state, setState] = useState(false);
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
            <Text style={styles.title}>Billing Information</Text>
            <TouchableOpacity onPress={close}>
              <Text style={styles.close}>X</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title_2}>Update your billing Information</Text>

          <InvoiceTitle
            title="Full Name"
            onChange={(e: any) => handalData('FullName', e)}
            keyBoardtype="number-pad"
          />

          <DropDown
            isOpen={preference}
            toggleDropdown={() => setPreference(preference ? false : true)}
            options={Dropdata}
            onSelect={(item: any) => handalData('Country', item)}
            selectedOption={
              selectData?.Country ? selectData?.Country : 'United States'
            }
            title={'Country Or Region'}
          />
          <InvoiceTitle
            title="Address Line 1"
            onChange={(e: any) => handalData('AddressLine1', e)}
          />

          <InvoiceTitle
            title="Address Line 2"
            onChange={(e: any) => handalData('AddressLine2', e)}
          />

          <InvoiceTitle
            title="City"
            onChange={(e: any) => handalData('City', e)}
          />

          <View
            style={{
              ...commonStyles.verticleView,
              paddingHorizontal: '5%',
              marginTop: '3%',
            }}>
            <DropDown
              container={{width: wp("40%")}}
              isOpen={state}
              toggleDropdown={() => setState(state ? false : true)}
              options={Dropdata}
              onSelect={(item: any) => handalData('State', item)}
              selectedOption={
                selectData?.State ? selectData?.State : 'Florida'
              }
              title={'State'}
            />
            <InvoiceTitle
              title="Zip Code"
              container={{...styles.TextFild}}
              onChange={(e: any) => handalData('AccountNumber', e)}
            />
          </View>

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
export default BillingInformationModal;
