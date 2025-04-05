import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { COLOR } from "../../../../themes/StyleGuides";


const CustomMeeting = () => {
  const [meetingLocation, setMeetingLocation] = useState("Calendar Default");
  const [appointmentStatus, setAppointmentStatus] = useState("Confirmed");
  const [showLocationInput, setShowLocationInput] = useState(false);
  const [meetingLocationCustom, setMeetingLocationCustom] = useState("");
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);

  const locationOptions = ["Calendar Default", "Custom"];
  const statusOptions = ["Confirmed", "Pending", "Cancelled"];

  const handleLocationSelect = (option: string) => {
    setMeetingLocation(option);
    setShowLocationInput(option === "Custom");
    setIsLocationDropdownOpen(false);
  };

  const handleStatusSelect = (option: string) => {
    setAppointmentStatus(option);
    setIsStatusDropdownOpen(false);
  };

  return (
    <View style={styles.container}>
      {/* Meeting Location Dropdown */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Meeting Location</Text>
        <TouchableOpacity
          style={[styles.dropdownButton , isLocationDropdownOpen && styles.whenOpen]}
          onPress={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
        >
          <Text style={styles.selectedText}>{meetingLocation}</Text>
          <Text style={styles.arrow}>▼</Text>
        </TouchableOpacity>
        {isLocationDropdownOpen && (
          <ScrollView style={styles.dropdown}>
            {locationOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => handleLocationSelect(option)}
              >
                <Text style={styles.dropdownText}>{option}</Text>
              </TouchableOpacity>
            ))} 
          </ScrollView>
        )}
          <TextInput
            style={styles.textInput}
            placeholder="Enter Meeting Location"
            placeholderTextColor={COLOR.lightBlack}
            value={meetingLocationCustom}
            onChangeText={setMeetingLocationCustom}
          />
      </View>
      {/* Appointment Status Dropdown */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Appointment Status</Text>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
        >
          <Text style={styles.selectedText}>{appointmentStatus}</Text>
          <Text style={styles.arrow}>▼</Text>
        </TouchableOpacity>
        {isStatusDropdownOpen && (
          <ScrollView style={styles.dropdown}>
            {statusOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => handleStatusSelect(option)}
              >
                <Text style={styles.dropdownText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLOR.gray_4,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    color: COLOR.darkGray,
    marginBottom: 8,
  },
  dropdownButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLOR.white,
    borderRadius: 15,
    padding: 10,
    justifyContent: "space-between",
  },
  whenOpen:{
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0
  },
  selectedText: {
    color: COLOR.black,
    flex: 1,
  },
  arrow: {
    color: COLOR.darkGray,
    fontSize: 12,
  },
  dropdown: {
    backgroundColor: COLOR.white,
    maxHeight: 120,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.gray_4,
  },
  dropdownText: {
    color: COLOR.black,
  },
  textInput: {
    backgroundColor: COLOR.white,
    borderRadius: 15,
    padding: 10,
    marginTop: 10,
    color: COLOR.lightBlack,
  },
});

export default CustomMeeting;
