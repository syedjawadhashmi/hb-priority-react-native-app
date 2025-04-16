import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {COLOR, hp} from '../../../themes/StyleGuides';
import {Icon} from '../../../assest';
import Header from '../../../component/common/Header';
import SCREEN from '../../../data/ScrName';


// Widget Data Type
interface Widget {
  id: string;
  name: string;
  locations: string;
  status: string;
}

// Dummy Data for Widgets
const widgets: Widget[] = [
  {
    id: '1',
    name: 'Default Widget',
    locations: 'All Locations',
    status: 'Not Installed',
  },
  {
    id: '2',
    name: 'Darwin Widget',
    locations: '2 Locations',
    status: 'Not Installed',
  },
  {
    id: '3',
    name: 'Boston Widget',
    locations: 'Boston, MA',
    status: 'Not Installed',
  },
];

const SearchWebchatSettings = (props: any) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="Webchat Settings"
        onpesDrawer={() => navigation.openDrawer()}
      />

      <View style={{width: '90%', alignSelf: 'center'}}>
        <ScrollView>
          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>3 Webchat Widgets</Text>
            <View style={styles.searchCreateContainer}>
              {/* Search Bar */}
              <View style={styles.searchBar}>
                <Image source={Icon.search} style={styles.searchIcon} />
                <TextInput
                  placeholder="Search"
                  placeholderTextColor={COLOR.lightBlack}
                  style={styles.searchInput}
                />
              </View>
              {/* Create Widget Button */}
              <TouchableOpacity style={styles.createButton} onPress={()=>navigation.navigate(SCREEN.DarwinWidget)}  >
                <Text style={styles.createButtonText}>Create Widget</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Table Header */}
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderText, styles.tableHeaderTextLeft]}>
              Name
            </Text>
            <Text style={[styles.tableHeaderText, styles.tableHeaderTextRight]}>
              Status
            </Text>
          </View>

          {/* Table Rows */}
          <FlatList
            data={widgets}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <View
              key={index}
                style={[styles.tableRow, index % 2 === 0 && styles.evenItem]}>
                <View style={[styles.widgetDetails]}>
                  <Text style={styles.widgetName}>{item.name}</Text>
                  <Text style={styles.widgetLocation}>{item.locations}</Text>
                </View>
                <View style={styles.widgetStatusContainer}>
                  <Text style={styles.widgetStatus}>{item.status}</Text>
                  <TouchableOpacity>
                    <Image source={Icon.ThreeDot} style={styles.dotsStyling} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            style={styles.table}
            showsVerticalScrollIndicator={false}
          />
          <View style={{height:hp(20)}} />
        </ScrollView>
      </View>

      <View style={styles.bottomBar}></View>
    </View>
  );
};

export default SearchWebchatSettings;
