import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import { COLOR } from "../../../../themes/StyleGuides";
import { Icon } from "../../../../assest";

interface DropdownFieldProps {
  label: string;
  options: string[];
  onSelect?: (value: string) => void;
}

const DropdownField: React.FC<DropdownFieldProps> = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>("Chosen Calendar");
  const [search, setSearch] = useState<string>("");

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
    if (onSelect) onSelect(value);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Label */}
      <Text style={styles.label}>{label}</Text>

      {/* Dropdown */}
      <TouchableOpacity style={[styles.dropdown,isOpen && styles.whenDropedDown]} onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.selectedText}>{selected}</Text>
        <Text style={styles.dropdownIcon}>▼</Text>
      </TouchableOpacity>

      {/* Dropdown Options */}
      {isOpen && (
        <View style={styles.dropdownContainer}>
          
          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <Image
              source={Icon.search}
              style={{ width: 20, height: 20 }}
            />
            <TextInput
              placeholder="Search Calendar"
              placeholderTextColor="#999"
              style={styles.searchInput}
              value={search}
              onChangeText={setSearch}
            />
          </View>

          {/* Options List */}
          <FlatList
          nestedScrollEnabled={true}
            data={filteredOptions}
            keyExtractor={(item, index) => `${item}-${index}`}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleSelect(item)}
              >
                <Text
                  style={[
                    styles.optionText,
                    item === selected && styles.selectedOptionText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.flatListContent}
            style={styles.flatList}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    marginHorizontal: 10,
    zIndex: 10,
    position: 'absolute',
    width:"95%"
  },
  label: {
    marginBottom: 10,
    color: COLOR.lightBlack,
    fontWeight: "900",
  },
  dropdown: {
    borderRadius: 15,
    backgroundColor: COLOR.white,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  whenDropedDown: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  selectedText: {
    color: COLOR.lightBlack,
    width:'97%'
  },
  dropdownIcon: {
    color: COLOR.lightBlack,
    fontSize: 12,
    marginRight:10
  },
  dropdownContainer: {
    backgroundColor: COLOR.white,
   borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    maxHeight: 200,
    overflow: "hidden",
  },
  chosenCalendar: {
    color: COLOR.lightBlack,
    padding: 10,
    fontWeight: "600",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLOR.gray_4,
    borderRadius: 15,
    paddingHorizontal: 10,
    margin: 10,
  },
  searchInput: {
    marginLeft: 8,
   color: COLOR.lightBlack,
    flex: 1,
  },
  flatList: {
    maxHeight: 150,
  },
  flatListContent: {
    paddingBottom: 10,
  },
  option: {
    padding: 10,
  
  },
  optionText: {
   color: COLOR.lightBlack,
  },
  selectedOptionText: {
    color: COLOR.perpal,
    fontWeight: "bold",
  },
});

export default DropdownField;
