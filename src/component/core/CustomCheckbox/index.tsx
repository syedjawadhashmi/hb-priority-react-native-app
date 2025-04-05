import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import { Icon } from '../../../assest';
import { commonStyles } from '../../../themes/StyleGuides';


interface CheckboxItem {
  id: string | number;
  label: string;
}

interface CustomCheckboxProps {
  data: CheckboxItem[];
  onSelectionChange?: (selectedItems: CheckboxItem[]) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ data, onSelectionChange }) => {
  const [selectedItems, setSelectedItems] = useState<Set<string | number>>(new Set());

  const toggleSelection = (id: string | number) => {
    const updatedSelection = new Set(selectedItems);
    if (updatedSelection.has(id)) {
      updatedSelection.delete(id);
    } else {
      updatedSelection.add(id);
    }
    setSelectedItems(updatedSelection);

    if (onSelectionChange) {
      const selectedData = data.filter(item => updatedSelection.has(item.id));
      onSelectionChange(selectedData);
    }
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => toggleSelection(item.id)}
        >  
          <View
            style={[
              styles.checkbox,
              selectedItems.has(item.id) && styles.checkboxSelected,
            ]}
          >
            {selectedItems.has(item.id) && <Image source={Icon.check} style={{resizeMode:"contain",width:17,height:17}} />}
          </View>
          <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 4,
    position:"relative",
    marginRight: 8,
    borderColor:'#6d6d6d',
    ...commonStyles.center
  },
  checkboxSelected: {
    backgroundColor: '#40f440',
  },
  label: {
    fontSize: 14,
    color: '#333',
  },
  checkboxSelectedicon:{
    position:"absolute",
    zIndex:1
  }
});

export default CustomCheckbox;
