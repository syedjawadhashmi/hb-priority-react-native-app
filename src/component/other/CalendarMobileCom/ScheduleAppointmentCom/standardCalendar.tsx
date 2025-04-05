import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { COLOR } from '../../../../themes/StyleGuides';

const CustomCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');

  const onDayPress = (day: DateData) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <Calendar
        current={'2024-06-01'}
        onDayPress={onDayPress}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: COLOR.perpal },
        }}
        theme={{
          calendarBackground: 'transparent',
          textSectionTitleColor: COLOR.perpal,
          textSectionTitleDisabledColor: '#D3D3D3',
          selectedDayBackgroundColor: COLOR.perpal,
          selectedDayTextColor: COLOR.white,
          todayTextColor: COLOR.perpal,
          dayTextColor: COLOR.lightBlack,
          textDisabledColor: COLOR.gray_3,
          arrowColor: COLOR.perpal,
          monthTextColor: COLOR.perpal,
          textDayFontSize: 14,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 14,
        }}
        hideExtraDays={true}
        firstDay={0} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: COLOR.white,
    borderBottomEndRadius: 15,
    borderBottomLeftRadius: 15,
    overflow: 'hidden',
    width:'100%',
    position:'absolute',
  },
});

export default CustomCalendar;
