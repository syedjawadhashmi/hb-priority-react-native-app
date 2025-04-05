import {Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import styles from './styles';
import InvoiceTitle from '../../../core/InvoiceTitle';
import {useState} from 'react';
import DropDown from '../../../core/DropDown';
import {Dropdata} from '../../../../data/DummayData';
import {COLOR, commonStyles, wp} from '../../../../themes/StyleGuides';
import {Icon} from '../../../../assest';

const BusinessPhysicalA = () => {
  const [openCountry, setOpenCountry] = useState(false);
  const [State, setState] = useState(false);
  const [timeZone, SetTimeZone] = useState(false);
  const [language, SetLanguage] = useState(false);
  const [Outbound, SetOutbound] = useState(false);
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
          <Text style={styles.title}>Business Physical Address</Text>
        </View>
        <InvoiceTitle
          title="Street Address"
          onChange={(item: any) => handalData('BusinessName', item)}
          showErrorIcon={Icon.Error}
          IconStyle={{marginLeft: '1%'}}
        />
        <View style={{...commonStyles.verticleView, paddingHorizontal: '5%'}}>
          <InvoiceTitle
            title="City"
            container={{width: isLandscape?wp("80%"):wp("40%")}}
            onChange={(item: any) => handalData('Friendly', item)}
          />
          <InvoiceTitle
            title="Postal / Zip Code"
            container={{width: isLandscape?wp("80%"):wp("40%")}}
            keyBoardtype="number-pad"
            onChange={(item: any) => handalData('Postal Code', item)}
          />
        </View>
        <DropDown
          isOpen={State}
          toggleDropdown={() => setState(State ? false : true)}
          options={Dropdata}
          onSelect={(item: any) => handalData('State', item)}
          selectedOption={selectData?.State}
          title={'State / Prov / Region'}
        />
        <DropDown
          isOpen={openCountry}
          toggleDropdown={() => setOpenCountry(openCountry ? false : true)}
          options={Dropdata}
          onSelect={(item: any) => handalData('Country', item)}
          selectedOption={selectData?.Country}
          title={'Country'}
        />
        <DropDown
          isOpen={timeZone}
          toggleDropdown={() => SetTimeZone(timeZone ? false : true)}
          options={Dropdata}
          onSelect={(item: any) => handalData('TimeZone', item)}
          selectedOption={selectData?.TimeZone}
          title={'Time Zone*'}
        />
        <DropDown
          isOpen={language}
          toggleDropdown={() => SetLanguage(language ? false : true)}
          options={Dropdata}
          onSelect={(item: any) => handalData('Language', item)}
          selectedOption={selectData?.Language}
          title={'Platform Language'}
        />
        <DropDown
          isOpen={Outbound}
          toggleDropdown={() => SetOutbound(Outbound ? false : true)}
          options={Dropdata}
          onSelect={(item: any) => handalData('Outbound', item)}
          selectedOption={selectData?.Outbound}
          title={'Outbound Communication Language For Custom Values'}
        />

        <TouchableOpacity
          style={{
            ...styles.GenerateKeyBtn,
            backgroundColor: COLOR.primary,
            alignSelf: 'flex-end',
            marginBottom: '7%',
            marginRight: '5%',
            marginTop: '7%',
          }}>
          <Text style={{...styles.GenerateKeyText, color: COLOR.gray_5}}>
          Update
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default BusinessPhysicalA;
