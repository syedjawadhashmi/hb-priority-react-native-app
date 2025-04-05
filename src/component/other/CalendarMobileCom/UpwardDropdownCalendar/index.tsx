import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import {styles} from './style';
import {Icon} from '../../../../assest';
import { COLOR } from '../../../../themes/StyleGuides';

const UpwardDropdownCalendar = () => {
  const [status, setStatus] = useState('Confirmed'); // Current selected status
  const [isDropdownVisible, setDropdownVisible] = useState(false); // Dropdown visibility state

  const options = ['Showed', 'No Show', 'Cancelled', 'Invalid', 'Confirmed']; // Dropdown options

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Status</Text>

      {/* Dropdown Trigger */}
      <TouchableOpacity
        style={styles.statusButton}
        onPress={() => setDropdownVisible(!isDropdownVisible)}>
        <Text
          style={[
            styles.statusText,
            status === 'Confirmed' && styles.selectedText,
          ]}>
          {status}
        </Text>
        <Image source={Icon.DropDown} tintColor={COLOR.gray_5} style={styles.dropdownIcon} />
      </TouchableOpacity>

      {/* Dropdown List */}
      {isDropdownVisible && (
        <View style={styles.dropdownContainer}>
          <FlatList
          nestedScrollEnabled={true}
            data={options}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <TouchableOpacity
                style={[
                  styles.dropdownItem,
                  item === status && styles.selectedOption,
                ]}
                onPress={() => {
                  setStatus(item);
                  setDropdownVisible(false);
                }}>
                <Text
                  style={[
                    styles.dropdownItemText,
                    item === status && styles.selectedOptionText,
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default UpwardDropdownCalendar;
