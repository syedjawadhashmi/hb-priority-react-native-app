import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLOR } from "../../../../themes/StyleGuides";

interface ButtonOption {
  label: string;
  value: string;
}

interface GroupButtonsProps {
  options: ButtonOption[]; // Array of button options with label and value
  defaultSelected?: string; // Pre-selected button
  onSelect?: (value: string) => void; // Callback function for button selection
}

const GroupButtons: React.FC<GroupButtonsProps> = ({
  options,
  defaultSelected,
  onSelect,
}) => {
  const [selected, setSelected] = useState(defaultSelected || options[0]?.value);

  const handlePress = (value: string) => {
    setSelected(value);
    onSelect?.(value); // Trigger the callback if provided
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonWraper}>
      {options.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={[
              styles.button,
              selected === option.value && styles.activeButton,
            ]}
            onPress={() => handlePress(option.value)}
          >
            <Text
              style={[
                styles.buttonText,
                selected === option.value && styles.activeButtonText,
              ]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
      ))}
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonWraper:{
    borderRadius:25,
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: COLOR.perpal, 
  },
  button: {
    padding: 7,
    borderWidth: 1,
    borderColor: COLOR.perpal, 
    backgroundColor: COLOR.white,
    alignItems: "center",
    paddingHorizontal:20
  },
  activeButton: {
    backgroundColor: COLOR.perpal, 
  },
  
  buttonText: {
    color: COLOR.perpal, 
    fontWeight: "900",
  },
  activeButtonText: {
    color: COLOR.white, 
    fontWeight: "900",
  },
});

export default GroupButtons;
