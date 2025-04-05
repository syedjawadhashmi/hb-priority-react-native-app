import React from "react";
import { StyleSheet } from "react-native";
import { Calendar, DateData } from "react-native-calendars";
import { COLOR } from "../../../../themes/StyleGuides";

interface CalendarViewProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
}

const CalendarView: React.FC<CalendarViewProps> = ({
  selectedDate,
  onDateChange,
}) => {
  return (
    <Calendar
      current={selectedDate}
      onDayPress={(day: DateData) => onDateChange(day.dateString)}
      markedDates={{
        [selectedDate]: {
          selected: true,
          selectedColor: COLOR.perpal,
          selectedTextColor: "white",
        },
      }}
      theme={{
        arrowColor: COLOR.perpal,
        todayTextColor: COLOR.perpal,
        textDayFontSize: 14,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 14,
        textSectionTitleColor: COLOR.perpal,
      }}
      style={styles.calendar}
    />
  );
};

const styles = StyleSheet.create({
  calendar: {
    borderRadius: 8,
  },
});

export default CalendarView;
