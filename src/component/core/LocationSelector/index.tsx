import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import CustomCheckbox from '../CustomCheckbox';
import {Icon} from '../../../assest';

const LocationSelector = ({onClose}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [locations] = useState([
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'San Diego',
  ]);

  const checkboxData = [{id: 1, label: ''}];
  const [steps, setSteps] = useState(1);
  const handleSelectionChange = (
    selectedItems: {id: string | number; label: string}[],
  ) => {
    console.log('Selected Items:', selectedItems);
  };

  const toggleLocation = (location: string) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter(item => item !== location));
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  const handlePress = () => {
    setSteps(2);
  };

  return (
    <View style={styles.container}>
      {steps === 1 && (
        <View>
          {/* Header */}
          <Text style={styles.header}>Select Locations</Text>

          {/* Dropdown */}
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
            <Text style={styles.dropdownText}>
              {selectedLocations.length > 0
                ? `${selectedLocations.length} Location${
                    selectedLocations.length > 1 ? 's' : ''
                  }`
                : 'Locations'}
            </Text>
            <Image
              source={Icon.DropDown}
              style={{width: 12, height: 12, resizeMode: 'contain'}}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.Locations}>
            <Text style={styles.dropdownText}>2 location</Text>
            <Text style={{fontWeight: 900, fontSize: 10}}>╳</Text>
          </TouchableOpacity>

          {/* Dropdown List */}
          {isDropdownOpen && (
            <FlatList
              data={locations}
              keyExtractor={item => item}
              style={styles.dropdownList}
              renderItem={({item,index}) => (
                <TouchableOpacity
                key={index}
                  style={styles.dropdownItem}
                  onPress={() => toggleLocation(item)}>
                  <Text style={styles.locationText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          )}

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.applyButton} onPress={handlePress}>
              <Text style={styles.applyText}>Apply</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {steps === 2 && (
        <View style={{width: '96%', position: 'relative'}}>
          <TouchableOpacity
            style={{position: 'absolute', right: 0, zIndex: 1}}
            onPress={onClose}>
            <Image
              source={Icon.DropDown}
              style={{width: 12, height: 12, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
          {/* Dropdown */}
          <TouchableOpacity onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
            <Text style={styles.dropdownText}>All Locations</Text>
          </TouchableOpacity>

          {/* Description Box */}
          <View style={styles.descriptionBox}>
            <View style={styles.infoRow}>
              <Image
                source={Icon.Error}
                style={{width: 20, height: 20, marginRight: 10}}
              />
              <View>
                <Text style={styles.descriptionText}>
                  You are adding Alex Mark to all 509 locations. This will make
                  them an Enterprise user and they will be added to all new
                  locations created from now on. Select the option below if you
                  do not want to add Alex Mark to all future locations.
                </Text>
                <View style={styles.checkboxRow}>
                  <SafeAreaView>
                    <CustomCheckbox
                      data={checkboxData}
                      onSelectionChange={handleSelectionChange}
                    />
                  </SafeAreaView>
                  <Text style={{fontSize: 10}}>
                    Do not add to future locations
                  </Text>
                </View>
              </View>
            </View>

            {/* Checkbox */}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 25,
  },
  header: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 15,
    color: '#333',
  },
  Locations: {
    marginTop: 10,
    width: '100%',
    height: 35,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    backgroundColor: '#f4f4f4',
  },
  dropdown: {
    width: '100%',
    height: 35,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    backgroundColor: '#f4f4f4',
  },
  dropdownText: {
    fontSize: 16,
    color: '#666',
  },
  dropdownList: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    backgroundColor: '#fff',
    maxHeight: 120,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  locationText: {
    fontSize: 14,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
    gap: 10,
  },
  applyButton: {
    width: '30%',
    backgroundColor: '#40f440',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
  },
  cancelButton: {
    width: '30%',
    backgroundColor: '#ba0416',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
  },
  applyText: {
    fontSize: 16,
    fontWeight: '900',
  },
  cancelText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  descriptionBox: {
    marginTop: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    width: '93%',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  infoIcon: {
    fontSize: 16,
    color: '#39C44A', // Green icon color
    marginRight: 8,
  },
  descriptionText: {
    fontSize: 11,
    color: '#333',
    lineHeight: 16,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  checkbox: {
    marginRight: 8,
  },
  checkboxText: {
    fontSize: 14,
    color: '#333',
  },
});

export default LocationSelector;
