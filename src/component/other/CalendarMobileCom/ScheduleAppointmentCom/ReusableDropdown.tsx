import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { COLOR } from "../../../../themes/StyleGuides";

interface ReusableDropdownProps {
  label: string;
  placeholder: string;
  options: string[];
}

const ReusableDropdown: React.FC<ReusableDropdownProps> = ({
  label,
  placeholder,
  options,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(placeholder);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={[styles.dropdownButton,isDropdownOpen && styles.whenOpen]}
        onPress={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Text style={styles.selectedText}>{selectedOption}</Text>
        <Text style={styles.arrow}>▼</Text>
      </TouchableOpacity>
      {isDropdownOpen && (
        <ScrollView style={styles.dropdown}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dropdownItem}
              onPress={() => handleSelect(option)}
            >
              <Text style={styles.dropdownText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal:10,
    position:'relative'
  },
  label: {
    color: COLOR.darkGray,
    marginBottom: 8,
    fontWeight:'bold',
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
    borderBottomRightRadius:0,
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
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderColor: COLOR.gray_4,
    maxHeight: 120,
    position: "absolute",
    top: "100%",
    marginLeft:'3%',
    width: "100%",
    zIndex: 1,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.gray_4,
  },
  dropdownText: {
    color: COLOR.lightBlack,
  },
});

export default ReusableDropdown;
