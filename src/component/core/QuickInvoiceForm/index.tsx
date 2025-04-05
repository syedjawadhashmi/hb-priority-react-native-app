import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import InvoiceTitle from '../InvoiceTitle';
import DatePicker from '../DatePicker';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
import {useState} from 'react';
import {Icon} from '../../../assest';
import DropDown from '../DropDown';
import {Dropdata} from '../../../data/DummayData';

const data = [
  {title: 'This is a Data '},
  {title: 'This is a Data '},
  {title: 'This is a Data '},
  {title: 'This is a Data '},
];

const QuickInvoiceForm = () => {
  const [openLocation, setOpenLocation] = useState(false);
  const [Location, setLocation] = useState(null);
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
          <Text style={styles.title}>Details</Text>
        </View>
        <DropDown
          isOpen={openLocation}
          toggleDropdown={() => setOpenLocation(openLocation ? false : true)}
          options={Dropdata}
          onSelect={(e: any) => setLocation(e)}
          selectedOption={Location}
          title={'Location*'}
          container={{width: '90%'}}
        />
        <InvoiceTitle
          title="Invoice Title*"
          onChange={(e: any) => handalData('InvoiceTitle', e)}
        />
        <DatePicker title="Due Date*" tintcolor={COLOR.whites} />
        <DatePicker title="Expire Date" tintcolor={COLOR.whites} />
        <View style={{height: 30}} />
      </View>
    </View>
  );
};
export default QuickInvoiceForm;
