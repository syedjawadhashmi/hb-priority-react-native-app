import {Text, TouchableOpacity, View} from 'react-native';

import styles from './style';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import ToggleSwitch from 'toggle-switch-react-native';
import {useState} from 'react';
import DropDown from '../../../core/DropDown';
import {WebchatSettingsWindowOpens} from '../../../../data/DummayData';
import Profile_QA from '../Profile_QA';
import FAQs from '../FAQs';
import {AllCallProp} from '../../../../data/Types';
import ImportFAQs from '../ImportFAQs';

const Chatbot = (props: AllCallProp) => {
  const {navigation} = props;
  const [LiveChat, setLiveChat] = useState(false);
  const [company, setcompany] = useState(null);
  const [opencompany, setOpencompany] = useState(false);
  const [selector, setSelector] = useState(false);
  const [importFAQs, setImportFAQs] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{...commonStyles.verticleView, paddingRight: '5%'}}>
        <Text style={{...styles.tittle}}>Robin</Text>
        <ToggleSwitch
          isOn={LiveChat}
          onColor={COLOR.primary}
          offColor={COLOR.gray_5}
          size="small"
          onToggle={isOn => {
            setLiveChat(isOn);
          }}
        />
      </View>
      <Text style={styles.disciption}>
        Have Robin automatically respond to your customers. When Robin cannot
        answer a question, a default message will be sent.
        <Text style={{color: COLOR.perpal_3}}>
          Edit the information in your profile.
        </Text>{' '}
      </Text>
      <Text style={{...styles.tittle, marginTop: '4%', marginBottom: '5%'}}>
        Preview Automated Responses For
      </Text>
      <DropDown
        DropDownContaianer={{top: 28}}
        isOpen={opencompany}
        toggleDropdown={() => setOpencompany(opencompany ? false : true)}
        options={WebchatSettingsWindowOpens}
        onSelect={(e: any) => setcompany(e)}
        selectedOption={company}
        placeHolder={'Bluffton - RB'}
      />
      <View style={styles.selector}>
        <TouchableOpacity
          style={{
            ...styles.selectorBtn,
            backgroundColor: selector ? COLOR.whites : COLOR.primary,
          }}
          onPress={() => setSelector(false)}>
          <Text style={styles.editTitle}>Profile Q&A</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.selectorBtn,
            backgroundColor: selector ? COLOR.primary : COLOR.whites,
          }}
          onPress={() => setSelector(true)}>
          <Text style={styles.editTitle}>FAQ</Text>
        </TouchableOpacity>
      </View>
      <Text style={{...styles.tittle, marginTop: '4%', marginBottom: '5%'}}>
        Edit Profile Q&A In Profile Settings
      </Text>
      {selector ? (
        <FAQs navigation={navigation} onpress={() => setImportFAQs(true)} />
      ) : (
        <Profile_QA />
      )}
      <ImportFAQs visible={importFAQs} close={() => setImportFAQs(false)} />
    </View>
  );
};
export default Chatbot;
