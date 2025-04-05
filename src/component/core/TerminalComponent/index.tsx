import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import InvoiceTitle from '../InvoiceTitle';
import {useState} from 'react';
import {COLOR} from '../../../themes/StyleGuides';
import {Icon} from '../../../assest';
import DropDown from '../DropDown';

const data = [
  {title: 'This is a Data '},
  {title: 'This is a Data '},
  {title: 'This is a Data '},
  {title: 'This is a Data '},
];
const TerminalComponent = () => {
  const [openExpMonth, setOpenExpMonth] = useState(false);
  const [ExpMonth, setExpMonth] = useState(null);
  const [openExpYear, setOpenExpYear] = useState(false);
  const [ExpYear, setExpYear] = useState(null);
  const [openTransactionType, setOpenTransactionType] = useState(false);
  const [TransactionType, setTransactionType] = useState(null);
  const [selectData, setSelectData] = useState({});
  const handalData = (key: any, value: any) => {
    const trimmedKey = key.replace(/\s+/g, '');

    const updatedData = {...selectData, [trimmedKey]: value};
    setSelectData(updatedData);
  };
  return (
    <View style={styles.container}>
      <View style={styles.AmmountContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Transaction Information </Text>
        </View>
        <DropDown
          isOpen={openTransactionType}
          toggleDropdown={() =>
            setOpenTransactionType(openTransactionType ? false : true)
          }
          options={data}
          onSelect={(e: any) => setTransactionType(e)}
          selectedOption={TransactionType}
          title={'Transaction Type*'}
        />
        <InvoiceTitle
          title="Transaction Amount*"
          onChange={(e: any) => handalData('TransactionAmount', e)}
        />
        <InvoiceTitle
          title="Card Number*"
          Icon={Icon.Card}
          onChange={(e: any) => handalData('CardNumber', e)}
          keyBoardtype="number-pad"
        />
        <DropDown
          isOpen={openExpMonth}
          toggleDropdown={() => setOpenExpMonth(openExpMonth ? false : true)}
          options={data}
          onSelect={(e: any) => setExpMonth(e)}
          selectedOption={ExpMonth}
          title={'Exp Month*'}
        />
        <DropDown
          isOpen={openExpYear}
          toggleDropdown={() => setOpenExpYear(openExpYear ? false : true)}
          options={data}
          onSelect={(e: any) => setExpYear(e)}
          selectedOption={ExpYear}
          title={'Exp Year*'}
        />
        <InvoiceTitle
          title="Cardholder Name"
          onChange={(e: any) => handalData('CardholderName', e)}
        />
        <InvoiceTitle
          title="Description"
          onChange={(e: any) => handalData('Description', e)}
        />

        <TouchableOpacity
          style={{...styles.DropDownBtn, backgroundColor: COLOR.primary}}>
          <Text style={{...styles.DropDowntext, color: COLOR.gray_5}}>
            Process Transaction
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default TerminalComponent;
