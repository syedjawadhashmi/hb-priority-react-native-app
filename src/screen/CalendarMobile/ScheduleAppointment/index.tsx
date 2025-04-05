import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AppointmentInfo from '../../../component/other/CalendarMobileCom/ScheduleAppointmentCom/AppointmentInfo';
import DropdownField from '../../../component/other/CalendarMobileCom/ScheduleAppointmentCom/DropdownField';
import DropdownTimezone from '../../../component/other/CalendarMobileCom/ScheduleAppointmentCom/dropDownTimezone';
import GroupButtons from '../../../component/other/CalendarMobileCom/ScheduleAppointmentCom/ButtonGroup';
import InputField from '../../../component/other/CalendarMobileCom/ScheduleAppointmentCom/InputField';
import ReusableDropdown from '../../../component/other/CalendarMobileCom/ScheduleAppointmentCom/ReusableDropdown';
import CustomMeeting from '../../../component/other/CalendarMobileCom/ScheduleAppointmentCom/CustomMeeting';
import {Icon} from '../../../assest';
import {COLOR} from '../../../themes/StyleGuides';
import {
  ALlScheduleList,
  recommendedScheduleList,
} from '../../../data/DummayData';
import {styles} from './style';
import Header from '../../../component/common/Header';
import SCREEN from '../../../data/ScrName';

const ScheduleAppointment = (props:any) => {
    const{navigation}=props
  const [selectedOption, setSelectedOption] = React.useState<any>('standard');
  const [MeetingType, setMeetingType] = React.useState<any>('Calendar_Default');
  const [selectedDropDown, setSelectedDropDown] = React.useState<any>(null);

  const handleSelection = (value: string) => {
    console.log('Selected:', value);
  };
  const handleDropDown = (value: string) => {
    setSelectedDropDown(value);

    console.log(selectedOption);
  };

  const handleSelectionButton = (value: string) => {
    setSelectedOption(value);
  };

  const handleMeetingType = (value: string) => {
    setMeetingType(value);
  };
  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="Calendar"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <View style={styles.MainContainer}>
        <ScrollView scrollEnabled={true}  >
          <View>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Schedule Appointment</Text>
            </View>
            <AppointmentInfo />

            <View style={{position: 'relative', height: 70}}>
              <DropdownField
                label="Calendar"
                options={[
                  'Calendar 1',
                  'Calendar 2',
                  'Calendar 3',
                  'Calendar 4',
                  'Calendar 5',
                ]}
                onSelect={handleSelection}
              />
            </View>

            <View
              style={{position: 'relative', height: 70, marginVertical: 10}}>
              <DropdownTimezone
                label="Timezone (Account)"
                recommended={recommendedScheduleList}
                all={ALlScheduleList}
              />
            </View>

            <GroupButtons
              options={[
                {label: 'Standard', value: 'standard'},
                {label: 'Custom', value: 'custom'},
              ]}
              defaultSelected="standard"
              onSelect={handleSelectionButton}
            />

            <View style={styles.note}>
              <Image style={styles.noteIcon} source={Icon.Error} />
              <Text style={styles.noteText}>
                Allows you to create an appointment in the available slots
              </Text>
            </View>

            {selectedOption === 'standard' ? (
              <View>
                <View
                  style={{
                    position: 'relative',
                    height: 70,
                    marginVertical: 10,
                  }}>
                  <InputField
                    label="Date"
                    placeholder="Thu, Sep 05, 2024"
                    icon={Icon.calender_4}
                    selectedDropDown={selectedDropDown}
                    setSelectedDropDown={() =>
                      setSelectedDropDown('Date' || null)
                    }
                    selectedOption={selectedOption}
                    handleDropDown={handleDropDown}
                  />
                </View>

                <View
                  style={{
                    position: 'relative',
                    height: 70,
                    marginVertical: 10,
                  }}>
                  <InputField
                    label="Slot"
                    placeholder="3:00 PM - 3:30 PM"
                    icon={Icon.clock_2}
                    selectedOption={selectedOption}
                    setSelectedDropDown={() =>
                      setSelectedDropDown('Slot' || null)
                    }
                    handleDropDown={handleDropDown}
                  />
                </View>
              </View>
            ) : (
              <View>
                <View
                  style={{
                    position: 'relative',
                    height: 70,
                    marginVertical: 10,
                  }}>
                  <InputField
                    label="Start Time"
                    placeholder="Thu, Sep 05, 5:25 PM"
                    icon={Icon.calender_4}
                    selectedDropDown={selectedDropDown}
                    setSelectedDropDown={() =>
                      setSelectedDropDown('Date' || null)
                    }
                    selectedOption={selectedOption}
                    handleDropDown={handleDropDown}
                  />
                </View>

                <View
                  style={{
                    position: 'relative',
                    height: 70,
                    marginVertical: 10,
                  }}>
                  <InputField
                    label="End Time"
                    placeholder="Thu, Sep 05, 6:35 PM"
                    icon={Icon.calender_4}
                    selectedOption={selectedOption}
                    setSelectedDropDown={() =>
                      setSelectedDropDown('Slot' || null)
                    }
                    handleDropDown={handleDropDown}
                  />
                </View>
              </View>
            )}

            <View style={styles.note}>
              <Image style={styles.noteIcon} source={Icon.Error} />
              <Text style={styles.noteText}>
                Thu, Sep 05, 12:00 PM - 12:30 PM in contact's timezone
                (America/Los_Angeles)
              </Text>
            </View>

            <View style={{paddingHorizontal: 10}}>
              <TextInput
                placeholder="Appointment Title"
                style={styles.input}
                placeholderTextColor={COLOR.lightBlack}
              />
              <TextInput
                placeholder="Description"
                style={styles.input}
                placeholderTextColor={COLOR.lightBlack}
              />
            </View>

            <GroupButtons
              options={[
                {label: 'Calendar Default', value: 'Calendar_Default'},
                {label: 'Custom', value: 'custom'},
              ]}
              defaultSelected="Calendar_Default"
              onSelect={handleMeetingType}
            />

            <View style={styles.note}>
              <Image style={styles.noteIcon} source={Icon.Error} />
              <Text style={styles.noteText}>
                The meeting location will be set as configured in the calendar
              </Text>
            </View>

            {MeetingType === 'Calendar_Default' ? (
              <View>
                <ReusableDropdown
                  label="Meeting Location"
                  placeholder="Calendar Default"
                  options={['Calendar Default', 'Room 1', 'Room 2']}
                />
                <ReusableDropdown
                  label="Appointment Status"
                  placeholder="Confirmed"
                  options={['Confirmed', 'Pending', 'Cancelled']}
                />
              </View>
            ) : (
              <CustomMeeting />
            )}

            <View style={styles.saveButtonContainer}>
              <TouchableOpacity style={styles.saveButton} onPress={()=>navigation.navigate(SCREEN.AvailabilityCalendar)} >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ScheduleAppointment;
