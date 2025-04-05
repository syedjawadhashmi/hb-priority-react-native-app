import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { COLOR } from '../../../themes/StyleGuides';

const KeywordPicker = ({ combinedKeywords, handleKeywordChange }) => {
  const [selectedKeywordIndex, setSelectedKeywordIndex] = useState(0);

  const onKeywordChange = (item:any,) => {
    setSelectedKeywordIndex(item);
    handleKeywordChange(item); // Trigger the callback to update in the main component
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Keyword:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedKeywordIndex}
          onValueChange={(itemValue, itemIndex) => onKeywordChange(itemIndex)}
          style={styles.picker}
        >
          {combinedKeywords.map((keyword:any, index:any) => (
            <Picker.Item key={index} label={keyword} value={index} style={{color:COLOR.black}} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    width:"90%",
    alignSelf:"center"
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  picker: {
    height: 50,
    width: '100%',

  },
});

export default KeywordPicker;
