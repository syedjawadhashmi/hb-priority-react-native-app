import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

import styles from './style';
import {COLOR, commonStyles, TEXT_STYLE} from '../../../themes/StyleGuides';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';
import DropDown from '../../../component/core/DropDown';
import {Dropdata} from '../../../data/DummayData';
import ToggleSwitch from 'toggle-switch-react-native';


const NotificationsAdditionalOptions = (props: any) => {
  const {navigation} = props;
  const [opensector, setOpenSector] = useState(false);
  const [sector, setSector] = useState(null);
  const [reciver, setReciver] = useState('');
  const [AllowUpdates, setAllowUpdates] = useState(false);
  const [AssignContats, setAssignContact] = useState(false);
  const [togal, setTogal] = useState(false);
  const [meetingtogal, setMeetingTogal] = useState(false);
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;
  return (
    <View style={{...commonStyles.mainContainer}}>
      <Header
        firstIcon={Icon.bars}
        title="Calendar"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView contentContainerStyle={{padding: 20, overflow: 'scroll'}}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              Notifications & Additional Options
            </Text>
          </View>

          {/* inner container */}
          <View style={{paddingHorizontal: 10}}>
            <Text style={styles.headerDescription}>
              Configure notifications and additional options
            </Text>
            {/* Dropdown */}
            <DropDown
              isOpen={opensector}
              toggleDropdown={() => setOpenSector(opensector ? false : true)}
              options={Dropdata}
              onSelect={(e: any) => setSector(e)}
              selectedOption={sector}
              title={'Select Type Of Notification'}
              container={{width: '92%'}}
              placeHolder={'Acknowledgement Email'}
            />
            {/* Checkbox Section */}
            <Text style={styles.label}>
              Who Should Receive This Notification?
            </Text>
            {['Contact', 'Assigned User', 'Additional Emails'].map(
              (item, index) => (
                <View style={styles.checkboxRow} key={index}>
                  {/* checkbox */}
                  <TouchableOpacity
                    style={[
                      styles.checkbox,
                      reciver === item && styles.checkboxChecked,
                    ]}
                    onPress={() => setReciver(item)}>
                    {reciver === item && (
                      <Text style={styles.checkmark}>✓</Text>
                    )}
                  </TouchableOpacity>
                  <Text style={styles.checkboxText}>{item}</Text>
                </View>
              ),
            )}

            <View style={styles.checkboxRow}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  AllowUpdates && styles.checkboxChecked,
                ]}
                onPress={() => setAllowUpdates(!AllowUpdates)}>
                {AllowUpdates && <Text style={styles.checkmark}>✓</Text>}
              </TouchableOpacity>

              <Text style={styles.checkboxText}>
                Allow Google / Outlook Calendar to send invitations & updates to
                attendees.
              </Text>
            </View>
            <View style={styles.checkboxRow}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  AssignContats && styles.checkboxChecked,
                ]}
                onPress={() => setAssignContact(!AssignContats)}>
                {AssignContats && <Text style={styles.checkmark}>✓</Text>}
              </TouchableOpacity>

              <Text style={styles.checkboxText}>
                Assign contacts in their respective calendar team members each
                time an appointment is booked.
              </Text>
            </View>

            {/* Rescheduling Policy */}
            <Text style={styles.label}>
              Cancellation And Rescheduling Policy
            </Text>
            <View style={{...styles.toggleRow,marginTop:isLandscape?"2%":'5%'}}>
              <ToggleSwitch
                isOn={meetingtogal}
                onColor={COLOR.primary}
                offColor={COLOR.white1}
                labelStyle={{color: 'black', fontWeight: '200'}}
                size="small"
                onToggle={isOn => {
                  setMeetingTogal(isOn);
                }}
              />
              <Text style={styles.toggleText}>
                Allow Rescheduling of Meeting
              </Text>
            </View>
            <Text
              style={{
                marginBottom:isLandscape?"3%": "7%",
                color: COLOR.lightBlack,
                marginTop:isLandscape?"2%":"5%"
              }}>
              Rescheduling link will expire
            </Text>
            <View style={styles.inputRow}>
              <TextInput style={styles.inputSmall} placeholder="10" />
              <View
                style={{
                 ...styles.ments,
                  paddingHorizontal: isLandscape?"3%":'5%',
                }}>
                <Text style={styles.inputUnit}>Minutes</Text>
                <Image
                  source={Icon.DropDown}
                  style={styles.DropIcon}
                />
              </View>
            </View>
            <Text
              style={{
                marginBottom:isLandscape?"3%": "7%",
                color: COLOR.lightBlack,
                marginTop:isLandscape?"2%":"5%"
              }}>
              before the meeting
            </Text>
            {/* Cancellation Policy */}
            <View style={{...styles.toggleRow,marginTop:isLandscape?"1%":"5%"}}>

              <ToggleSwitch
                isOn={togal}
                onColor={COLOR.primary}
                offColor={COLOR.white1}
                labelStyle={{color: 'black', fontWeight: '200'}}
                size="small"
                onToggle={isOn => {
                  setTogal(isOn);
                }}
              />
              <Text style={styles.toggleText}>
                Allow Cancellation of Meeting
              </Text>
            </View>
            <Text
              style={{
                marginBottom: 30,
                color: COLOR.lightBlack,
              }}>
              Cancellation link will expire
            </Text>
            <View style={styles.inputRow}>
              <TextInput style={styles.inputSmall} placeholder="30" />
              <View
                style={{
                  ...styles.ments,
                  paddingHorizontal:isLandscape?"3%": '5%',
                }}>
                <Text style={styles.inputUnit}>Minutes</Text>
                <Image
                  source={Icon.DropDown}
                  style={styles.DropIcon}
                />
              </View>
            </View>

            <Text
              style={{
                marginBottom: 30,
                color: COLOR.lightBlack,
              }}>
              before the meeting
            </Text>
            {/* Additional Notes */}
            <Text style={styles.label}>Additional Notes</Text>
            <TextInput style={styles.textArea} placeholder="" multiline />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBar}></View>
    </View>
  );
};

export default NotificationsAdditionalOptions;
