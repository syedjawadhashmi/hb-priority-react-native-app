import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icon} from '../../../assest';
import { COLOR } from '../../../themes/StyleGuides';
// import FontAwesome from "react-native-vector-icons/FontAwesome";

const SelectTeams = ({onClose}) => {
  const [searchText, setSearchText] = useState('');
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
  const teams = ['Inbox Teams', 'Hubsparkm', 'New Sales', 'Hubspark'];

  const isSelected = (team: string) => selectedTeams.includes(team);

  const toggleSelect = (team: string) => {
    if (team === 'Select All') {
      if (selectedTeams.length === teams.length + 1) {
        setSelectedTeams([]);
      } else {
        setSelectedTeams(['Select All', ...teams]);
      }
    } else {
      const updatedSelection = isSelected(team)
        ? selectedTeams.filter(item => item !== team)
        : [...selectedTeams, team];

      if (updatedSelection.length === teams.length + 1) {
        setSelectedTeams(['Select All', ...teams]);
      } else {
        setSelectedTeams(
          updatedSelection.filter(item => item !== 'Select All'),
        );
      }
    }
  };

  const filteredTeams = teams.filter(team =>
    team.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onClose}
        style={{position: 'absolute', left: '100%', top: 10, zIndex: 1}}>
        <Text style={{color:COLOR.gray_5,fontSize:20}}>x</Text>
      </TouchableOpacity>
      <Text style={styles.headerText}>Select Teams</Text>
      {/* Search Input */}
      <View style={styles.searchContainer}>
        <Image
          source={Icon.search}
          style={{width: 20, height: 20, resizeMode: 'contain'}}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Teams List */}
      <ScrollView style={styles.listContainer}>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => toggleSelect('Select All')}>
          <View style={styles.checkbox}>
            {selectedTeams.length === teams.length + 1 && (
              <View style={{backgroundColor: '#40f440'}}>
                <Image
                  source={Icon.check}
                  style={{width: 20, height: 20, resizeMode: 'contain'}}
                />
              </View>
            )}
          </View>
          <Text style={styles.listText}>Select All</Text>
        </TouchableOpacity>

        {filteredTeams.map((team, index) => (
          <TouchableOpacity
            key={index}
            style={styles.listItem}
            onPress={() => toggleSelect(team)}>
            <View style={styles.checkbox}>
              {isSelected(team) && (
                <View style={{backgroundColor: '#40f440'}}>
                  <Image  source={Icon.check} style={{width:20,height:20,resizeMode:"contain"}}/>

                </View>
              )}
            </View>
            <Text style={styles.listText}>{team}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 16,
    width: '100%',
    alignSelf: 'center',
    position: 'relative',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    paddingHorizontal: 8,
    height: 35,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
  },
  icon: {
    marginLeft: 4,
  },
  listContainer: {
    maxHeight: 200,
    marginTop: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 15,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  listText: {
    fontSize: 14,
    color: '#333',
  },
});

export default SelectTeams;
