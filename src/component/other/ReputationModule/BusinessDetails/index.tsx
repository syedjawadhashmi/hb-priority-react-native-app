import {Text, View} from 'react-native';
import styles from './styles';
import InvoiceTitle from '../../../core/InvoiceTitle';
import {useState} from 'react';
import DropDown from '../../../core/DropDown';
import {Dropdata} from '../../../../data/DummayData';

const BusinessDetails = () => {
  const [openCountry, setOpenCountry] = useState(false);
  const [country, setCountry] = useState(null);
  const [openCityTown, setOpenCityTown] = useState(false);
  const [cityTown, setCityTown] = useState(null);
  const [openBusinessCate, setOpenBusinessCate] = useState(false);
  const [BussinessCate, setBussinessCate] = useState(null);
  const [openStateCountry, setOpenStateCountry] = useState(false);
  const [StateCountry, setStateCountry] = useState(null);
  const [dataForm, setFormData] = useState<any>({});
  const handalData = (key: any, value: any) => {
    setFormData({...dataForm, [key]: value});
  };
  return (

    <View style={styles.container}>
      <View style={styles.AmmountContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Business Details</Text>
        </View>

        <InvoiceTitle
          title="Business Name*"
          onChange={(e: any) => handalData('BusinessName', e)}
        />
        <DropDown
          isOpen={openCountry}
          toggleDropdown={() => setOpenCountry(openCountry ? false : true)}
          options={Dropdata}
          onSelect={(e: any) => setCountry(e)}
          selectedOption={country}
          title={'Country*'}
        />

        <InvoiceTitle
          title="Address Line 1*"
          onChange={(e: any) => handalData('BusinessName', e)}
        />
        <InvoiceTitle
          title="Address Line 2*"
          onChange={(e: any) => handalData('BusinessName', e)}
        />
        <DropDown
          isOpen={openCityTown}
          toggleDropdown={() => setOpenCityTown(openCityTown ? false : true)}
          options={Dropdata}
          onSelect={(e: any) => setCityTown(e)}
          selectedOption={cityTown}
          title={'Town / City*'}
        />

        <InvoiceTitle
          title="Phone Number*"
          keyBoardtype="number-pad"
          onChange={(e: any) => handalData('PhoneNumber', e)}
        />

        <DropDown
          isOpen={openStateCountry}
          toggleDropdown={() =>
            setOpenStateCountry(openStateCountry ? false : true)
          }
          options={Dropdata}
          onSelect={(e: any) => setStateCountry(e)}
          selectedOption={StateCountry}
          title={'State / County / Region*'}
          container={{marginBottom: '5%'}}
        />
        <InvoiceTitle
          keyBoardtype="number-pad"
          title="Zipcode / Postcode*"
          onChange={(e: any) => handalData('Postcode', e)}
        />

        <DropDown
          isOpen={openBusinessCate}
          toggleDropdown={() =>
            setOpenBusinessCate(openBusinessCate ? false : true)
          }
          options={Dropdata}
          onSelect={(e: any) => setBussinessCate(e)}
          selectedOption={BussinessCate}
          title={'Business Category*'}
          container={{marginBottom: '5%'}}
        />
      </View>
    </View>
  );
};
export default BusinessDetails;
