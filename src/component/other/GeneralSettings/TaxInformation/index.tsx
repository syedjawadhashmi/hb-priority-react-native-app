import {Image, Modal, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import styles from './style';
import {COLOR, commonStyles, hp} from '../../../../themes/StyleGuides';
import InvoiceTitle from '../../../core/InvoiceTitle';
import DropDown from '../../../core/DropDown';
import {UpdatePaymentModal} from '../../../../data/Types';
import {useState} from 'react';
import {Dropdata} from '../../../../data/DummayData';
import {Icon} from '../../../../assest';

const TaxInformation = (props: UpdatePaymentModal) => {
  const {close, visible, save} = props;
  const [preference, setPreference] = useState(false);
  const [isCheck, setIscheck] = useState(false);

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
          <View style={{...styles.titleContainer}}>
            <Text style={styles.title}>Tax Information</Text>
            <TouchableOpacity onPress={close}>
              <Text style={styles.close}>X</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title_2}>Update your tax detalis*</Text>

          <DropDown
            isOpen={preference}
            toggleDropdown={() => setPreference(preference ? false : true)}
            options={Dropdata}
            onSelect={(item: any) => handalData('Country', item)}
            selectedOption={selectData?.Country}
            placeHolder={"Select ID type"}
            title={'Select Tax ID Type*'}
          />
          <InvoiceTitle
            title="Tax ID*"
            onChange={(e: any) => handalData('RoutingNumber', e)}
            keyBoardtype="number-pad"
            placeholder={'Ex:12-3456789'}
          />
          <View  style={styles.checkContainer} >
            <TouchableOpacity onPress={() => setIscheck(true)}>
              <Image
                source={isCheck ? Icon.check : Icon.uncheck}
                style={styles.checkStyle}
              />
            </TouchableOpacity>
            <Text style={{...styles.textDiscription,marginLeft:'3%'}}>I do not have Tax ID</Text>
          </View>

          <Text style={styles.textDiscription}>
            We won’t prompt you to update it.
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
          <View style={{height:hp(5)}} />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
export default TaxInformation;
