import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';
import {LocationFieldProp} from '../../../data/Types';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useState} from 'react';
import {Icon} from '../../../assest';

const DatePicker = (props: LocationFieldProp) => {
  const {title, onpress, item, style,tintcolor, placeholder,Icons} = props;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    hideDatePicker();
    const formattedDate = date.toLocaleDateString();
    console.log('Get date==', formattedDate);
    setSelectedDate(formattedDate);
  };

  return (
    <View>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity
        style={[styles.container, style]}
        onPress={showDatePicker}>
        <Text
          style={{
            ...styles.dateText,
            color: selectedDate ? COLOR.black : COLOR.gray,
          }}>
          {selectedDate? selectedDate:placeholder&&placeholder}
        </Text>
        <Image source={Icons?Icons:Icon.calendar} style={styles.iconstyle} tintColor={tintcolor&&tintcolor} />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.verticleView,
    width: '90%',
    height: 33,
    alignSelf: 'center',
    paddingHorizontal: '7%',
    backgroundColor: COLOR.whites,
    borderRadius: 12,
    marginBottom: '0.7%',
  },
  title: {
    fontSize: 12,
    color: COLOR.gray_5,
    marginLeft: '6%',
    marginBottom: '1.5%',
    marginTop: '1.5%',
    fontWeight: '700',
  },
  dropDown: {width: 12, height: 12, resizeMode: 'contain'},
  dateText: {fontSize: 12, fontWeight: '400', color: COLOR.gray_5},
  iconstyle: {width: 15, height: 15, resizeMode: 'contain'},
});
