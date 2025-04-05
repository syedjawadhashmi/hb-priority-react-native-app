import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import InvoiceTitle from '../../../core/InvoiceTitle';
import {Icon} from '../../../../assest';
import {useState} from 'react';
import TerminalComponent from '../../../core/TerminalComponent';

const VirtualTerminal = () => {
  const [check, setCheck] = useState(false);
  const [selectData, setSelectData] = useState({});
  const handalData = (key: any, value: any) => {
    const trimmedKey = key.replace(/\s+/g, '');

    const updatedData = {...selectData, [trimmedKey]: value};
    setSelectData(updatedData);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <TerminalComponent />
        <View style={{...styles.AmmountContainer, marginBottom: '20%'}}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Billing Information</Text>
          </View>
          <InvoiceTitle title="Address" onChange={(e:any)=>handalData("Address",e)} />
          <InvoiceTitle title="Zip" onChange={(e:any)=>handalData("Zip",e)}  keyBoardtype="number-pad" />
          <InvoiceTitle title="Country" onChange={(e:any)=>handalData("Country",e)} />
          <InvoiceTitle title="Email" onChange={(e:any)=>handalData("Email",e)} keyBoardtype="email-address" />
          <View style={styles.checkBtn}>
            <TouchableOpacity
              onPress={() => {
                setCheck(check ? false : true);
              }}>
              <Image
                style={styles.check}
                source={check ? Icon.check : Icon.uncheck}
              />
            </TouchableOpacity>
            <Text style={styles.checkText}>Save As Account Vault </Text>
          </View>
          <Text
            style={{
              ...styles.checkText,
              marginLeft: '6%',
              marginTop: '2%',
              marginBottom: '5%',
            }}>
            Store Card for future use{' '}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default VirtualTerminal;
