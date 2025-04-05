import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { COLOR } from "../../../../themes/StyleGuides";

const SlotDropdown = () => {
  const slots = [
    "3:00 PM - 3:30 PM",
    "11:00 AM - 11:30 AM",
    "11:30 AM - 12:00 PM",
    "12:00 PM - 12:30 PM",
    "12:30 PM - 1:00 PM",
    "1:00 PM - 1:30 PM", // Added more slots to test scrolling
    "2:00 PM - 2:30 PM",
    "3:00 PM - 3:30 PM",
    "4:00 PM - 4:30 PM",
    "5:00 PM - 5:30 PM",
  ];

  return (
    <View style={styles.container}>
      {/* Dropdown */}
      <ScrollView
        style={styles.dropdown}
        contentContainerStyle={styles.dropdownContentContainer}
        showsVerticalScrollIndicator={true}
      >
        {slots.map((slot, index) => (
          <TouchableOpacity
            key={index}
            style={styles.dropdownItem}
            onPress={() => console.log(`Selected: ${slot}`)}
          >
            <Text style={styles.dropdownText}>{slot}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: COLOR.white,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15
  },
  dropdown: {
    maxHeight: 200, // Set the maximum height for the dropdown
    width: "100%",
    backgroundColor: COLOR.white,
  },
  dropdownContentContainer: {
    paddingHorizontal: 10,
  },
  dropdownItem: {
    paddingVertical: 15,
    borderBottomColor: COLOR.gray_4,
  },
  dropdownText: {
    color: COLOR.black,
    fontSize: 14,
  },
});

export default SlotDropdown;
