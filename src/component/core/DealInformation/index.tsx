import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import InvoiceTitle from '../InvoiceTitle';
import DropDown from '../DropDown';
import {useState} from 'react';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
import {Dropdata} from '../../../data/DummayData';
import DatePicker from '../DatePicker';
import {inboxProp} from '../../../data/Types';

const DealInformation = (props: inboxProp) => {
  const {onpress} = props;
  const [openType, setOpenType] = useState(false);
  const [type, setType] = useState(null);
  const [openStage, setOpenStage] = useState(false);
  const [stage, setStage] = useState(null);
  const [opencompany, setOpencompany] = useState(false);
  const [company, setcompany] = useState(null);
  const [selectData, setSelectData] = useState({});

  const handalData = (key: any, value: any) => {
    const trimmedKey = key.replace(/\s+/g, '');

    const updatedData = {...selectData, [trimmedKey]: value};
    setSelectData(updatedData);
  };
  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.AmmountContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Deal Information</Text>
          </View>
          <InvoiceTitle
            title="Deal Name*"
            onChange={(e: any) => handalData(e, 'DealName')}
          />
          <View>
            <Text style={styles.Discriptiontitle}>Description</Text>

            <TextInput style={styles.discription} multiline />
          </View>

          <DropDown
            isOpen={opencompany}
            toggleDropdown={() => setOpencompany(opencompany ? false : true)}
            options={Dropdata}
            onSelect={(e: any) => setcompany(e)}
            selectedOption={company}
            title={'Company*'}
          />
          <DatePicker title="Start at" style={{paddingHorizontal: '3%'}} />

          <DropDown
            isOpen={openStage}
            toggleDropdown={() => setOpenStage(openStage ? false : true)}
            options={Dropdata}
            onSelect={(e: any) => setStage(e)}
            selectedOption={stage}
            title={'Stage*'}
          />
          <DropDown
            isOpen={openType}
            toggleDropdown={() => setOpenType(openType ? false : true)}
            options={Dropdata}
            onSelect={(e: any) => setType(e)}
            selectedOption={type}
            title={'Type*'}
          />

          <InvoiceTitle
            title="Amount"
            onChange={(e: any) => handalData(e, 'Amount')}
          />

          <TouchableOpacity style={styles.Save} onPress={onpress}>
            <Text style={styles.saveText}>Save Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default DealInformation;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
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
    marginRight: '3.7%',
    marginBottom: '6%',
  },
  saveText: {fontSize: 11, fontWeight: '700', color: COLOR.black},
  discription: {
    width: '90%',
    height: 70,
    backgroundColor: COLOR.whites,
    borderRadius: 10,
    alignSelf: 'center',
    color: COLOR.black,
    textAlignVertical: 'top',
    padding: 10,
  },
  Discriptiontitle: {
    fontSize: 12,
    color: COLOR.gray_5,
    marginLeft: '6%',
    marginBottom: '1.5%',
    marginTop: '1.5%',
    fontWeight: '700',
  },
});
