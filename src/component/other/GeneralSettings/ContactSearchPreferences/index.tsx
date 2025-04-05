import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import InvoiceTitle from '../../../core/InvoiceTitle';
import {useState} from 'react';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import DropDown from '../../../core/DropDown';
import {Dropdata} from '../../../../data/DummayData';
import ToggleSwitch from 'toggle-switch-react-native';

const ContactSearchPreferences = () => {
  const [existing, setExisting] = useState(false);
  const [preference, setPreference] = useState(false);
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
          <Text style={styles.title}>Contact Search Preferences</Text>
        </View>
        <View style={styles.togalContainer}>
            <ToggleSwitch
              isOn={togal}
              onColor={COLOR.primary}
              offColor={COLOR.gray_5}
              labelStyle={{color: 'black', fontWeight: '200'}}
              size="small"
              onToggle={isOn => {
                setTogal(isOn);
              }}
            />
            <Text style={styles.titletogal}>Allow Duplicate Contact</Text>
          </View>
        <DropDown
          isOpen={existing}
          toggleDropdown={() => setExisting(existing ? false : true)}
          options={Dropdata}
          onSelect={(item: any) => handalData('Existing', item)}
          selectedOption={selectData?.Existing}
          title={'Find Existing Contacts Based On'}
        />

        <DropDown
          isOpen={preference}
          toggleDropdown={() => setPreference(preference ? false : true)}
          options={Dropdata}
          onSelect={(item: any) => handalData('Preference', item)}
          selectedOption={selectData?.Preference}
          title={'Second Preference For Search (Optional)'}
          container={{marginBottom: '10%'}}
          DropDownContaianer={{zindex:10,height:45}}
        />
      </View>
    </View>
  );
};
export default ContactSearchPreferences;
