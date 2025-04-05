import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./styles";


const TimeSlot = ({ slot, onUpdate }) => {
  return (
    <View style={styles.timeSlotContainer}>
      <TextInput
        style={[styles.slotInput, styles.inputLeft]}
        value={slot.start}
        placeholder="Start"
        onChangeText={(text) => onUpdate("start", text)}
      />
      <TextInput
        style={[styles.slotInput, styles.inputRight]}
        value={slot.end}
        placeholder="End"
        onChangeText={(text) => onUpdate("end", text)}
      />
 
    </View>
  );
};

export default TimeSlot;
