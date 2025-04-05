import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import DropDown from '../../../core/DropDown';
import {useState} from 'react';
import {Dropdata} from '../../../../data/DummayData';
import {UpdatePaymentModal} from '../../../../data/Types';

const FilterModalGeneralSetting = (props: UpdatePaymentModal) => {
  const {close, visible, save} = props;

  const [Transaction, setTransaction] = useState(false);
  const [Charge, setCharge] = useState(false);

  const [selectData, setSelectData] = useState({});
  const handalData = (key: any, value: any) => {
    const trimmedKey = key.replace(/\s+/g, '');

    const updatedData = {...selectData, [trimmedKey]: value};
    setSelectData(updatedData);
  };
  return (
    <Modal transparent visible={visible} >
      <View style={styles.container}>
        <View style={styles.modal}>
          <DropDown
            isOpen={Transaction}
            toggleDropdown={() => setTransaction(Transaction ? false : true)}
            options={Dropdata}
            onSelect={(item: any) => handalData('Transaction', item)}
            selectedOption={
              selectData?.Transaction ? selectData?.Transaction : 'All'
            }
            title={'Transaction Type'}
          />
          <DropDown
            isOpen={Charge}
            toggleDropdown={() => setCharge(Charge ? false : true)}
            options={Dropdata}
            onSelect={(item: any) => handalData('Charge', item)}
            selectedOption={selectData?.Charge ? selectData?.Charge : 'All'}
            title={'Charge Type'}
          />

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
        </View>
      </View>
    </Modal>
  );
};
export default FilterModalGeneralSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  modal: {
    width: '60%',
    backgroundColor: COLOR.white1,
    position: 'absolute',
    bottom: '15%',
    paddingVertical: '5%',
    borderRadius: 10,
  },
  btnContainer: {
    ...commonStyles.verticleView,
    alignSelf: 'flex-end',
    marginRight: '5%',
    marginTop: '7%',
  },
  btnStyle: {paddingHorizontal: '4%', paddingVertical: '1.5%', borderRadius: 8},
  btnText: {fontSize: 12, fontWeight: '800', color: COLOR.whites},
});
