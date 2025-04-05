import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import CustomCheckbox from '../CustomCheckbox';
import {Icon} from '../../../assest';
import {COLOR} from '../../../themes/StyleGuides';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const CustomDropdown = () => {
  const [isDayDropdownOpen, setIsDayDropdownOpen] = useState(false);

  const [selectedDay, setSelectedDay] = useState('Friday');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isWeekTime, setIsWeekTime] = useState(false);
  const [selectedWeekTime, setSelectWeekTime] = useState<string | null>(null);
  console.log(selectedDate);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (time: Date) => {
    hideDatePicker();
    const formattedTime = time.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    console.log('Get date==', formattedTime);
    setSelectedDate(formattedTime);
  };
  const hideWeekTimePicker = () => {
    setIsWeekTime(false);
  };
  const handleWeekTimeConfirm = (time: Date) => {
    hideWeekTimePicker();
    const formattedTime = time.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    console.log('Get date==', formattedTime);
    setSelectWeekTime(formattedTime);
  };

  const WeeklyCheckBox = [{id: 1, label: 'Weekly'}];

  const handleSelectionChange = (
    selectedItems: {id: string | number; label: string}[],
  ) => {
    console.log('Selected Items:', selectedItems);
  };

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  return (
    <View>
      {/* Start Hour Dropdown */}
      <View style={{width: '50%'}}>
        <TouchableOpacity
          style={[styles.input, {position: 'relative'}]}
          // onPress={() => setIsHourDropdownOpen(!isHourDropdownOpen)}
          onPress={showDatePicker}>
          <Text style={{fontSize: 12, fontWeight: '400', color: COLOR.gray_5}}>
            {selectedDate && selectedDate} PST
          </Text>
          <View style={{position: 'absolute', right: 10, zIndex: 1, top: 15}}>
            <Image
              source={Icon.DropDown}
              style={{
                width: 10,
                height: 10,
                resizeMode: 'contain',
                tintColor: COLOR.gray_5,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>

      <SafeAreaView>
        <CustomCheckbox
          data={WeeklyCheckBox}
          onSelectionChange={handleSelectionChange}
        />
      </SafeAreaView>

      <View style={{flexDirection: 'row', gap: 2}}>
        {/* Day Dropdown */}
        <View style={{width: '50%'}}>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setIsDayDropdownOpen(!isDayDropdownOpen)}>
            <Text>{selectedDay}</Text>
            <View style={{position: 'absolute', right: 10, zIndex: 1, top: 15}}>
              <Image
                source={Icon.DropDown}
                style={{
                  width: 10,
                  height: 10,
                  resizeMode: 'contain',
                  tintColor: COLOR.gray_5,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* End Hour Dropdown */}
        <View style={{width: '50%'}}>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setIsWeekTime(true)}>
            <Text
              style={{fontSize: 12, fontWeight: '400', color: COLOR.gray_5}}>
              {selectedWeekTime && selectedWeekTime} PST
            </Text>
            <View style={{position: 'absolute', right: 10, zIndex: 1, top: 15}}>
              <Image
                style={{
                  width: 10,
                  height: 10,
                  resizeMode: 'contain',
                  tintColor: COLOR.gray_5,
                }}
                source={Icon.DropDown}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isWeekTime}
        mode="time"
        onConfirm={handleWeekTimeConfirm}
        onCancel={hideWeekTimePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: 'white',
    marginBottom: 5,
  },
  dropdownList: {
    position: 'absolute',
    top: 3,
    left: 0,
    right: '25%',
    zIndex: 1,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    maxHeight: 200,
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default CustomDropdown;
