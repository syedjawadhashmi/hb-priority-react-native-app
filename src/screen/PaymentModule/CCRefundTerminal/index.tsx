import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useState} from 'react';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
import {Icon} from '../../../assest';
import styles from './style';
import InvoiceTitle from '../../../component/core/InvoiceTitle';
import DropDown from '../../../component/core/DropDown';
import DatePicker from '../../../component/core/DatePicker';
import ImagesPickerField from '../../../component/core/ImagesPickerField';
import * as component from '../../../component';

const data = [
  {title: 'This is a Data '},
  {title: 'This is a Data '},
  {title: 'This is a Data '},
  {title: 'This is a Data '},
];
const CCRefundTerminal = () => {
  const [check, setCheck] = useState(null);
  const [checkInstallment, setCheckInstallment] = useState(false);
  const [field, setFields] = useState(1);
  const [openDrop, setOpenDrop] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.AmmountContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>CC Refund Terminal </Text>
        </View>
        <ScrollView>
          <InvoiceTitle title="Post Code" keyBoardtype="number-pad" />
          <InvoiceTitle title="Street" />
          <InvoiceTitle title="City" />
          <InvoiceTitle title="State" />
          <InvoiceTitle title="Phone" keyBoardtype="number-pad" />
          <InvoiceTitle title="Country" />

          <DropDown
            isOpen={openDrop}
            toggleDropdown={() => setOpenDrop(openDrop ? false : true)}
            options={data}
            onSelect={(e: any) => setValue(e)}
            selectedOption={value}
            title={'Location'}
          />
          <DatePicker title="CheackIn Date" />
          <DatePicker title="Cheackout Date" />
          <InvoiceTitle title="Clerk Number" />
          <InvoiceTitle title="Customer Id" />
          <InvoiceTitle title="Description" />
          <ImagesPickerField title="Images Front" />
          <ImagesPickerField title="Images Back" />
          <View style={{...styles.checkBtn, marginBottom: '2%'}}>
            <TouchableOpacity
              onPress={() => {
                setCheckInstallment(checkInstallment ? false : true);
              }}>
              <Image
                tintColor={COLOR.SkyBlue}
                style={styles.check}
                source={checkInstallment ? Icon.check : Icon.uncheck}
              />
            </TouchableOpacity>
            <Text style={styles.checkText}>Instalment</Text>
          </View>
          <InvoiceTitle title="Installment Number" keyBoardtype="number-pad" />
          <InvoiceTitle title="Installment Count" keyBoardtype="number-pad" />
          <View style={{...styles.checkBtn, marginBottom: '2%'}}>
            <TouchableOpacity
              onPress={() => {
                setCheckInstallment(checkInstallment ? false : true);
              }}>
              <Image
                tintColor={COLOR.SkyBlue}
                style={styles.check}
                source={checkInstallment ? Icon.check : Icon.uncheck}
              />
            </TouchableOpacity>
            <Text style={styles.checkText}>Advanced Deposit</Text>
          </View>
          <View style={{...styles.checkBtn, marginBottom: '2%'}}>
            <TouchableOpacity
              onPress={() => {
                setCheckInstallment(checkInstallment ? false : true);
              }}>
              <Image
                tintColor={COLOR.SkyBlue}
                style={styles.check}
                source={checkInstallment ? Icon.check : Icon.uncheck}
              />
            </TouchableOpacity>
            <Text style={styles.checkText}>No Show</Text>
          </View>
          <InvoiceTitle
            title="Notification Email Address"
            keyBoardtype="email-address"
          />
          <InvoiceTitle title="Order Number" keyBoardtype="name-phone-pad" />
          <InvoiceTitle title="PO Number" keyBoardtype="number-pad" />
          <View style={{...styles.checkBtn, marginBottom: '2%'}}>
            <TouchableOpacity
              onPress={() => {
                setCheckInstallment(checkInstallment ? false : true);
              }}>
              <Image
                tintColor={COLOR.SkyBlue}
                style={styles.check}
                source={checkInstallment ? Icon.check : Icon.uncheck}
              />
            </TouchableOpacity>
            <Text style={styles.checkText}>Numberring</Text>
          </View>
          <InvoiceTitle title="Room Number" />
          <InvoiceTitle title="Room Rate" defaultValue={'$'} />
          <View style={{...styles.checkBtn, marginBottom: '2%'}}>
            <TouchableOpacity
              onPress={() => {
                setCheckInstallment(checkInstallment ? false : true);
              }}>
              <Image
                tintColor={COLOR.SkyBlue}
                style={styles.check}
                source={checkInstallment ? Icon.check : Icon.uncheck}
              />
            </TouchableOpacity>
            <Text style={styles.checkText}>Sure Account</Text>
          </View>
          <InvoiceTitle title="SubTotal Amount" defaultValue={'$'} />
          <InvoiceTitle title="Tex" defaultValue={'$'} />
          <InvoiceTitle title="Tip Amount" defaultValue={'$'} />
          <InvoiceTitle title="Suroh Amount" defaultValue={'$'} />
          <InvoiceTitle title="SubTotal Amount" defaultValue={'$'} />
          <InvoiceTitle title="Transtion 1" />
          <InvoiceTitle title="Transtion 2" />
          <InvoiceTitle title="Transtion 3" />

          {[...Array(field)].map((_, index) => (
            <View
              key={index}
              style={{
                ...commonStyles.verticleView,
                paddingHorizontal: '5%',
                marginTop: '3%',
              }}>
              <component.TypeFiels
                title="Type"
                container={styles.containerText}
              />
              <component.TypeFiels
                title="Amount"
                container={styles.containerText}
              />
              <component.TypeFiels
                title="Account Type"
                container={styles.containerText}
              />
              <component.TypeFiels
                title="Currency"
                container={styles.containerText}
              />
            </View>
          ))}
          <TouchableOpacity
            onPress={() => setFields(field + 1)}
            style={{
              ...styles.DropDownBtn,
              backgroundColor: COLOR.primary,
              marginBottom: '2%',
            }}>
            <Text style={{...styles.DropDowntext, color: COLOR.gray_5}}>
              + Add Items
            </Text>
          </TouchableOpacity>

          <View style={{marginBottom: '8%'}}>
            {data.map((item, index:any) => (
              <View style={styles.checkBtn} key={index}  >
                <TouchableOpacity
                  onPress={() => {
                    setCheck(index);
                  }}>
                  <Image
                    tintColor={COLOR.SkyBlue}
                    style={styles.check}
                    source={check == index ? Icon.check : Icon.uncheck}
                  />
                </TouchableOpacity>
                <Text style={styles.checkText}>{item.title}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity
            style={{...styles.DropDownBtn, backgroundColor: COLOR.primary}}>
            <Text style={{...styles.DropDowntext, color: COLOR.gray_5}}>
              Save
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};
export default CCRefundTerminal;
