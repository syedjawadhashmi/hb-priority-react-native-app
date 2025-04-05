import {StyleSheet, Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import DropDown from '../DropDown';
import InvoiceTitle from '../InvoiceTitle';
import ImagesPickerField from '../ImagesPickerField';
import {COLOR, commonStyles, width} from '../../../themes/StyleGuides';
import {useState} from 'react';
import {Dropdata} from '../../../data/DummayData';
import {inboxProp} from '../../../data/Types';

const CompanyProfile = (props: inboxProp) => {
  const {onpress} = props;
  const [opensector, setOpenSector] = useState(false);
  const [sector, setSector] = useState(null);
  const [openSize, setOpenSize] = useState(false);
  const [size, setSize] = useState(null);
  const [openManager, setOpenManager] = useState(false);
  const [manager, setManager] = useState(null);
  const [selectData, setSelectData] = useState({});
  const { width, height } = useWindowDimensions();
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
          <Text style={styles.title}>Company Profile</Text>
        </View>
        <InvoiceTitle
          title="Name"
          onChange={(e: any) => handalData('Name', e)}
        />
        <View
          style={{
            ...commonStyles.verticleView,
            alignSelf: 'center',
            paddingHorizontal: '25.5%',
          }}>
          <DropDown
            DropDownContaianer={{left: 8}}
            isOpen={opensector}
            toggleDropdown={() => setOpenSector(opensector ? false : true)}
            options={Dropdata}
            onSelect={(e: any) => setSector(e)}
            selectedOption={sector}
            title={'Sector'}
            container={{width: '92%'}}
          />
          <DropDown
            DropDownContaianer={{left: 6}}
            isOpen={openSize}
            toggleDropdown={() => setOpenSize(openSize ? false : true)}
            options={Dropdata}
            onSelect={(e: any) => setSize(e)}
            selectedOption={size}
            title={'Size'}
            container={{width: '95%'}}
          />
        </View>
        <InvoiceTitle
          title="Address"
          onChange={(e: any) => handalData('Address', e)}
        />
        <View
          style={{
            ...commonStyles.verticleView,
            paddingHorizontal: '5%',
            marginTop: '3%',
          }}>
          <InvoiceTitle
            title="City"
            container={{...styles.containerText,width: isLandscape?width*0.2:width*0.26}}
            onChange={(e: any) => handalData('City', e)}
          />
          <InvoiceTitle
            title="Zip Code"
            keyBoardtype="number-pad"
            container={{...styles.containerText,width: isLandscape?width*0.2:width*0.26}}
            onChange={(e: any) => handalData('ZipCode', e)}
          />
          <InvoiceTitle
            title="State"
            container={{...styles.containerText,width: isLandscape?width*0.2:width*0.26}}
            onChange={(e: any) => handalData('State', e)}
          />
        </View>
        <InvoiceTitle
          title="Website"
          onChange={(e: any) => handalData('Website', e)}
        />
        <InvoiceTitle
          title="LinkedIn"
          onChange={(e: any) => handalData('LinkedIn', e)}
        />
        <ImagesPickerField title="Logo" />
        <View
          style={{
            ...commonStyles.verticleView,
            alignSelf: 'center',
            paddingHorizontal: '25.5%',
          }}>
          <InvoiceTitle
            title="Website"
            container={{width: '95%'}}
            onChange={(e: any) => handalData('Website', e)}
          />

          <DropDown
            isOpen={openManager}
            toggleDropdown={() => setOpenManager(openManager ? false : true)}
            options={Dropdata}
            onSelect={(e: any) => setManager(e)}
            selectedOption={manager}
            title={'Account Manager'}
            container={{width: '95%'}}
            DropDownContaianer={{left: 8,}}

          />
        </View>
        <TouchableOpacity style={styles.Save} onPress={onpress}>
          <Text style={styles.saveText}>Save Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CompanyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  AmmountContainer: {
    width: '90%',
    backgroundColor: COLOR.gray_7,
    alignSelf: 'center',
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: '30%',
    marginTop: '3%',
    
  },
  titleContainer: {
    height: 40,
    marginBottom: '6%',
    backgroundColor: COLOR.perpal,
    justifyContent: 'center',
    borderRadius: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: COLOR.whites,
    marginLeft: '3.6%',
  },
  containerText: {width: width*0.26},
  Save: {
    ...commonStyles.verticleView,
    height: 25,
    backgroundColor: COLOR.primary,
    borderRadius: 7,
    alignSelf: 'flex-end',
    paddingHorizontal: '3%',
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '20%',
    marginRight:"5%"
  },
  saveText: {fontSize: 11, fontWeight: '700', color: COLOR.black},
  sattingContainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
  },
  NewStageBtn: {
    height: 32,
    backgroundColor: COLOR.perpal,
    borderRadius: 7,
    ...commonStyles.center,
    paddingHorizontal: 10,
  },
  btnText: {fontSize: 10, fontWeight: '700', color: COLOR.whites},
  dropDown: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    tintColor: COLOR.black,
    marginHorizontal: '1.5%',
  },
  TypeText: {fontSize: 10, fontWeight: '700', color: COLOR.perpal},
  filter: {width: 25, height: 25, resizeMode: 'contain', marginLeft: '10%'},
});
