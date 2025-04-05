import {Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import styles from './style';
import InvoiceTitle from '../../../core/InvoiceTitle';
import {useState} from 'react';
import {COLOR, commonStyles, wp} from '../../../../themes/StyleGuides';

const AuthorizedRepresentative = () => {
  const [selectData, setSelectData] = useState({});
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;
  const handalData = (key: any, value: any) => {
    const trimmedKey = key.replace(/\s+/g, '');

    const updatedData = {...selectData, [trimmedKey]: value};
    setSelectData(updatedData);
  };
  return (
    <View style={styles.container}>
      <View style={styles.AmmountContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Authorized Representative</Text>
        </View>

        <View style={{...commonStyles.verticleView, paddingHorizontal: '5%'}}>
          <InvoiceTitle
            title="First Name"
            container={{width:isLandscape?wp("80%"): wp("40%")}}
            onChange={(item: any) => handalData('FirstName', item)}
          />
          <InvoiceTitle
            title="Last Name"
            container={{width:isLandscape?wp("80%"): wp("40%")}}
            onChange={(item: any) => handalData('LastName', item)}
          />
        </View>

        <InvoiceTitle
          title="Representative Email"
          onChange={(item: any) => handalData('Representative', item)}
        />
        <InvoiceTitle
          title="Job Position"
          onChange={(item: any) => handalData('JobPosition', item)}
        />
        <InvoiceTitle
        keyBoardtype="number-pad"
          title="Phone Number (With Country Code)"
          onChange={(item: any) => handalData('PhoneNumber', item)}
        />
        <View style={{...commonStyles.verticleView}}>
          <TouchableOpacity
            style={{
              ...styles.GenerateKeyBtn,
              backgroundColor: COLOR.primary,
              alignSelf: 'flex-end',
              marginBottom: '5%',
              marginRight: '5%',
              marginTop: '7%',
            }}>
            <Text style={{...styles.GenerateKeyText, color: COLOR.gray_5}}>
              +Add
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.GenerateKeyBtn,
              backgroundColor: COLOR.primary,
              alignSelf: 'flex-end',
              marginBottom: '5%',
              marginRight: '5%',
              marginTop: '7%',
            }}>
            <Text style={{...styles.GenerateKeyText, color: COLOR.gray_5}}>
              Update Information
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default AuthorizedRepresentative;
