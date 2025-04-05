import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import CustomCalendar from './standardCalendar';
import SlotDropdown from './SlotDropdown';
import StartTimePicker from './StartTimePicker2';
import {COLOR} from '../../../../themes/StyleGuides';
import {Icon} from '../../../../assest';

const InputField = ({
  label,
  placeholder,
  icon,
  selectedOption,
  selectedDropDown,
  setSelectedDropDown,
}: {
  label: string;
  placeholder: string;
  icon?: string;
  selectedOption: string;
  selectedDropDown: string;
  setSelectedDropDown: any;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownPress = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <View style={[styles.container, isDropdownOpen && styles.whenOpen]}>
      {label === '' ? null : <Text style={styles.label}>{label}</Text>}
      <TouchableOpacity
        onPress={handleDropdownPress}
        style={[
          isDropdownOpen &&
            selectedOption === 'standard' &&
            label === label &&
            styles.selectedDrop,
        ]}>
        {icon == '' ? null : <Image source={icon} tintColor={COLOR.perpal_3} style={styles.icon} />}
        <Text
          style={[
            styles.input,
            icon == '' ? null : {paddingLeft: 40},
            isDropdownOpen &&
              selectedOption === 'standard' &&
              label === label &&
              styles.selectedDrop,
          ]}>
          {placeholder}
        </Text>
        <Text style={styles.dropdownIcon}>▼</Text>
      </TouchableOpacity>
      {isDropdownOpen && selectedOption === 'standard' && label === 'Date' && (
        <View style={styles.StandardCalendarWraper}>
          <CustomCalendar />
        </View>
      )}

      {isDropdownOpen && selectedOption === 'standard' && label === 'Slot' && (
        <View style={styles.StandardCalendarWraper}>
          <SlotDropdown />
        </View>
      )}

      {isDropdownOpen &&
        selectedOption === 'custom' &&
        label === 'Start Time' && (
          <View style={styles.StandardCalendarWraper}>
            <StartTimePicker />
          </View>
        )}

      {isDropdownOpen &&
        selectedOption === 'custom' &&
        label === 'End Time' && (
          <View style={styles.StandardCalendarWraper}>
            {/* in custom mode the ui for end time will be here */}
          </View>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    paddingHorizontal: 10,
    position: 'absolute',
    width: '100%',
  },
  label: {
    color: COLOR.lightBlack,
    marginBottom: 5,
    fontWeight: '900',
  },
  selectedDrop: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  icon: {
    width: 22,
    height: 23,
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
    resizeMode:"contain"
  },
  input: {
    borderRadius: 15,
    padding: 10,
    backgroundColor: COLOR.white,
    color: COLOR.black,
  },
  whenOpen: {
    zIndex: 20,
  },
  dropdownIcon: {
    color: COLOR.lightBlack,
    fontSize: 12,
    marginRight: 5,
    position: 'absolute',
    right: 10,
    top: 10,
  },
  customCalendarPlaceholder: {
    backgroundColor: COLOR.gray_4,
    borderRadius: 15,
    marginTop: 10,
    padding: 10,
    textAlign: 'center',
    color: COLOR.black,
  },
  StandardCalendarWraper: {
    position: 'relative',
    width: '100%',
  },
});

export default InputField;
