import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DropDown from '../DropDown';
import InvoiceTitle from '../InvoiceTitle';
import ImagesPickerField from '../ImagesPickerField';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
import {useState} from 'react';
import {Dropdata} from '../../../data/DummayData';
import {inboxProp} from '../../../data/Types';
import ToggleSwitch from 'toggle-switch-react-native';

const ProfileInformation = (props: inboxProp) => {
  const {onpress} = props;
  const [openSize, setOpenSize] = useState(false);
  const [size, setSize] = useState(null);
  const [togal, setTogal] = useState(false);
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
          <Text style={styles.title}>Profile Information</Text>
        </View>
        <View
          style={{
            ...commonStyles.verticleView,
            alignSelf: 'center',
            paddingHorizontal: '25.5%',
          }}>
          <InvoiceTitle
            title="First Name"
            container={{width: '95%'}}
            onChange={(e: any) => handalData(e, 'FirstName')}
          />
          <InvoiceTitle
            title="Last Name"
            container={{width: '95%'}}
            onChange={(e: any) => handalData(e, 'LastName')}
          />
        </View>
        <View
          style={{
            ...commonStyles.verticleView,
            alignSelf: 'center',
            paddingHorizontal: '25.5%',
          }}>
          <InvoiceTitle
            title="Title"
            container={{width: '95%'}}
            onChange={(e: any) => handalData(e, 'Title')}
          />
          <DropDown
            DropDownContaianer={{left: 8}}
            isOpen={openSize}
            toggleDropdown={() => setOpenSize(openSize ? false : true)}
            options={Dropdata}
            onSelect={(e: any) => setSize(e)}
            selectedOption={size}
            title={'Company'}
            container={{width: '95%'}}
          />
        </View>

        <InvoiceTitle
          keyBoardtype="email-address"
          title="Email"
          onChange={(e: any) => handalData(e, 'Email')}
        />
        <View
          style={{
            ...commonStyles.verticleView,
            alignSelf: 'center',
            paddingHorizontal: '25.5%',
          }}>
          <InvoiceTitle
            keyBoardtype="number-pad"
            title="Phone Number 1"
            container={{width: '95%'}}
            onChange={(e: any) => handalData(e, 'PhoneNumber1')}
          />
          <InvoiceTitle
            keyBoardtype="number-pad"
            title="Phone Number 2"
            container={{width: '95%'}}
            onChange={(e: any) => handalData(e, 'PhoneNumber2')}
          />
        </View>
        <InvoiceTitle
          title="Background"
          onChange={(e: any) => handalData(e, 'Background')}
        />

        <ImagesPickerField title="Avatar" />

        <InvoiceTitle
          title="Tag"
          container={styles.Tag}
          onChange={(e: any) => handalData(e, 'Tag')}
        />

        <TouchableOpacity style={styles.Save} onPress={onpress}>
          <Text style={styles.saveText}>Save Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.togalContainer}>
        <ToggleSwitch
          isOn={togal}
          onColor={COLOR.primary}
          offColor={COLOR.whites}
          labelStyle={{color: 'black', fontWeight: '200'}}
          size="small"
          onToggle={isOn => {
            setTogal(isOn);
          }}
        />
        <Text style={styles.titletogal}>Has Newsletter</Text>
      </View>
    </View>
  );
};
export default ProfileInformation;

const styles = StyleSheet.create({
  container: {flex: 1},
  AmmountContainer: {
    width: '90%',
    backgroundColor: COLOR.gray_7,
    alignSelf: 'center',
    borderRadius: 14,
    marginBottom: '5%',
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
  containerText: {width: 90},
  Save: {
    ...commonStyles.verticleView,
    height: 25,
    backgroundColor: COLOR.primary,
    borderRadius: 7,
    alignSelf: 'flex-end',
    paddingHorizontal: '3%',
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '6%',
    marginRight: '5%',
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
  Tag: {width: '60%', alignSelf: 'flex-start', marginLeft: '5%'},
  togalContainer: {
    ...commonStyles.horizontalView,
    marginRight: '5%',
    marginBottom: '30%',
    marginLeft: '6%',
  },
  titletogal: {
    fontSize: 12,
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '5%',
  },
});
