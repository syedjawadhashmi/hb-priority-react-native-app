import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./HeaderCalnedar";
import CalendarView from "./CalendarView";
import TimePickerView from "./TimePickerView";
import { COLOR } from "../../../../themes/StyleGuides";

const StartTimePicker = () => {
  const [isCalendarView, setIsCalendarView] = useState(true);
  const [selectedDate, setSelectedDate] = useState("2024-06-16");
  const [selectedTime, setSelectedTime] = useState<{ hour: number; minute: number }>({
    hour: 5,
    minute: 25,
  });

  return (
    <View style={styles.container}>
      {/* Header Component */}
      <Header
        isCalendarView={isCalendarView}
        setIsCalendarView={setIsCalendarView}
      />

      {/* Calendar or Time Picker View */}
      <View style={styles.content}>
        {isCalendarView ? (
          <CalendarView
            selectedDate={selectedDate}
            onDateChange={(date) => setSelectedDate(date)}
          />
        ) : (
          <TimePickerView
            selectedTime={selectedTime}
            onTimeChange={(hour:any, minute:any) => setSelectedTime({ hour, minute })}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    borderRadius: 15,
    backgroundColor: COLOR.white,
    overflow: "hidden",
  },
  content: {
    padding: 16,
  },
});

export default StartTimePicker;
