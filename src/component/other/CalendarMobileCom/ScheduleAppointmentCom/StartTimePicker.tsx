import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Calendar, DateData } from "react-native-calendars";
// import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("window");

const StartTimePicker = () => {
  const [isCalendarView, setIsCalendarView] = useState(true);
  const [selectedDate, setSelectedDate] = useState("2024-06-16");
  const [selectedTime, setSelectedTime] = useState<{ hour: number; minute: number }>({
    hour: 5,
    minute: 25,
  });

  const handleTimeChange = (hour: number, minute: number) => {
    setSelectedTime({ hour, minute });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Start Time</Text>
        <View style={styles.iconRow}>
          <TouchableOpacity onPress={() => setIsCalendarView(true)}>
            {/* <Icon
              name="calendar-today"
              size={24}
              color={isCalendarView ? "white" : "#BBAECC"}
            /> */}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsCalendarView(false)}>
            {/* <Icon
              name="access-time"
              size={24}
              color={!isCalendarView ? "white" : "#BBAECC"}
            /> */}
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {isCalendarView ? (
          <Calendar
            current={selectedDate}
            onDayPress={(day: DateData) => setSelectedDate(day.dateString)}
            markedDates={{
              [selectedDate]: {
                selected: true,
                selectedColor: "#6B2E98",
                selectedTextColor: "white",
              },
            }}
            theme={{
              arrowColor: "#6B2E98",
              todayTextColor: "#6B2E98",
              textDayFontSize: 14,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 14,
              textSectionTitleColor: "#6B2E98",
            }}
            style={styles.calendar}
          />
        ) : (
          <View style={styles.timePicker}>
            <Text style={styles.timeDisplay}>
              {selectedTime.hour.toString().padStart(2, "0")} :{" "}
              {selectedTime.minute.toString().padStart(2, "0")}
            </Text>
            <View style={styles.clockFace}>
              <TouchableOpacity
                style={styles.clockButton}
                onPress={() =>
                  handleTimeChange((selectedTime.hour + 1) % 12 || 12, selectedTime.minute)
                }
              >
                <Text style={styles.clockButtonText}>{selectedTime.hour}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.clockButton}
                onPress={() =>
                  handleTimeChange(selectedTime.hour, (selectedTime.minute + 5) % 60)
                }
              >
                <Text style={styles.clockButtonText}>{selectedTime.minute}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.amPmSwitch}>
              <TouchableOpacity
                style={[
                  styles.amPmButton,
                  selectedTime.hour < 12 && styles.amPmButtonActive,
                ]}
                onPress={() => handleTimeChange(selectedTime.hour % 12, selectedTime.minute)}
              >
                <Text
                  style={[
                    styles.amPmButtonText,
                    selectedTime.hour < 12 && styles.amPmButtonTextActive,
                  ]}
                >
                  AM
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.amPmButton,
                  selectedTime.hour >= 12 && styles.amPmButtonActive,
                ]}
                onPress={() => handleTimeChange((selectedTime.hour % 12) + 12, selectedTime.minute)}
              >
                <Text
                  style={[
                    styles.amPmButtonText,
                    selectedTime.hour >= 12 && styles.amPmButtonTextActive,
                  ]}
                >
                  PM
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    alignSelf: "center",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    elevation: 3,
  },
  header: {
    backgroundColor: "#6B2E98",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  iconRow: {
    flexDirection: "row",
    gap: 16,
  },
  content: {
    padding: 16,
  },
  calendar: {
    borderRadius: 8,
  },
  timePicker: {
    alignItems: "center",
  },
  timeDisplay: {
    fontSize: 32,
    color: "#6B2E98",
    fontWeight: "bold",
  },
  clockFace: {
    flexDirection: "row",
    gap: 16,
    marginTop: 16,
  },
  clockButton: {
    backgroundColor: "#F3EAF7",
    padding: 16,
    borderRadius: 50,
  },
  clockButtonText: {
    fontSize: 24,
    color: "#6B2E98",
    fontWeight: "bold",
  },
  amPmSwitch: {
    flexDirection: "row",
    gap: 16,
    marginTop: 16,
  },
  amPmButton: {
    borderWidth: 1,
    borderColor: "#6B2E98",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 24,
  },
  amPmButtonActive: {
    backgroundColor: "#6B2E98",
  },
  amPmButtonText: {
    fontSize: 16,
    color: "#6B2E98",
    fontWeight: "bold",
  },
  amPmButtonTextActive: {
    color: "white",
  },
});

export default StartTimePicker;
