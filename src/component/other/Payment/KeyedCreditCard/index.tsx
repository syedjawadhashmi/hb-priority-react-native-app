import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import InvoiceTitle from '../../../core/InvoiceTitle';
import {Icon} from '../../../../assest';
import {COLOR} from '../../../../themes/StyleGuides';
import DropDown from '../../../core/DropDown';
import {Dropdata} from '../../../../data/DummayData';
import {useState} from 'react';

const KeyedCreditCard = () => {
  const [openAccount, setOpenAccount] = useState(false);
  const [Account, setAccount] = useState(null);
  const [openExpMonth, setOpenExpMonth] = useState(false);
  const [ExpMonth, setExpMonth] = useState(null);
  const [openExpYear, setOpenExpYear] = useState(false);
  const [ExpYear, setExpYear] = useState(null);
  const [openBilling, setOpenBilling] = useState(false);
  const [billing, setBilling] = useState(null);
  const [openAVS, setOpenAVS] = useState(false);
  const [AVS, setAVS] = useState(null);
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
          <Text style={styles.title}>Information</Text>
        </View>
        <InvoiceTitle title="Contact" onChange={(e:any)=>handalData("Contact",e)}  />
        <DropDown
          isOpen={openAccount}
          toggleDropdown={() => setOpenAccount(openAccount ? false : true)}
          options={Dropdata}
          onSelect={(e: any) => setAccount(e)}
          selectedOption={Account}
          title={'Account Type*'}
        />
        <InvoiceTitle title="Title" onChange={(e:any)=>handalData("Title",e)} />
        <InvoiceTitle title="Account Holder Name" onChange={(e:any)=>handalData("AccountHolder",e)}  />
        <InvoiceTitle Icon={Icon.Card} title="Card Number*" keyBoardtype="number-pad"  onChange={(e:any)=>handalData("CardNumber",e)} />
        <DropDown
          isOpen={openExpMonth}
          toggleDropdown={() => setOpenExpMonth(openExpMonth ? false : true)}
          options={Dropdata}
          onSelect={(e: any) => setExpMonth(e)}
          selectedOption={ExpMonth}
          title={'Exp Month*'}
        />
        <DropDown
          isOpen={openExpYear}
          toggleDropdown={() => setOpenExpYear(openExpYear ? false : true)}
          options={Dropdata}
          onSelect={(e: any) => setExpYear(e)}
          selectedOption={ExpYear}
          title={'Exp Year*'}
        />
        <InvoiceTitle title="Billing Street" onChange={(e:any)=>handalData("Street",e)}  />
        <InvoiceTitle title="Billing City"  onChange={(e:any)=>handalData("City",e)}  />
        <InvoiceTitle title="Billing State"   onChange={(e:any)=>handalData("State",e)} />
        <InvoiceTitle title="Billing Zip" keyBoardtype="number-pad" onChange={(e:any)=>handalData("Zip",e)} />
        <DropDown
          isOpen={openBilling}
          toggleDropdown={() => setOpenBilling(billing ? false : true)}
          options={Dropdata}
          onSelect={(e: any) => setBilling(e)}
          selectedOption={billing}
          title={'Billing Country'}
        />
        <InvoiceTitle title="Billing Phone" keyBoardtype="number-pad"  onChange={(e:any)=>handalData("Phone",e)} />
        <InvoiceTitle title="Account API Id"  onChange={(e:any)=>handalData("AccountAPIId",e)}  />
        <DropDown
          isOpen={openAVS}
          toggleDropdown={() => setOpenAVS(openAVS ? false : true)}
          options={Dropdata}
          onSelect={(e: any) => setAVS(e)}
          selectedOption={AVS}
          title={'Run AVS Transaction?'}
        />
        <View
          style={{
            ...styles.btnContainer,
            marginBottom: '10%',
            marginTop: '7%',
          }}>
          <TouchableOpacity
            style={{
              ...styles.DropDownBtn,
              backgroundColor: COLOR.primary,
              paddingHorizontal: '6%',
            }}>
            <Text style={{...styles.DropDowntext, color: COLOR.gray_5}}>
              Save
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              ...styles.DropDownBtn,
              backgroundColor: COLOR.red,
              paddingHorizontal: '5%',
            }}>
            <Text style={styles.DropDowntext}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default KeyedCreditCard;
