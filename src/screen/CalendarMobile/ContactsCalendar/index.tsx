import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {ContactsCalendarList} from '../../../data/DummayData';
import {COLOR, commonStyles, hp} from '../../../themes/StyleGuides';
import styles from './style';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';
import SCREEN from '../../../data/ScrName';

const {width} = Dimensions.get('window');

const ContactsCalendar = (prop: any) => {
  const {navigation} = prop;
  const [contacts, setContacts] = useState(false);
  const [searchClose, setSearchClose] = useState('');
  // Render each contact item
  const renderItem = ({item}) => {
    // Get initials from the name
    const initials = item.name
      .split(' ')
      .map(word => word[0])
      .join('');

    return (
      <TouchableOpacity style={styles.contactItem} onPress={()=>navigation.navigate(SCREEN.ContactDetailsCalendar)} >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>
        <View style={styles.contactInfo}>
          <Text style={styles.contactName}>{item.name}</Text>
          <Text style={styles.contactDetails}>{item.phone}</Text>
          <Text style={styles.contactDetails}>{item.email}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="Calendar"
        onpesDrawer={() => navigation.openDrawer()}
      />
   <ScrollView showsVerticalScrollIndicator={false} >
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Contacts</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            value={searchClose}
            onChangeText={(e: any) => setSearchClose(e)}
            style={styles.searchInput}
            placeholder="Type a name, phone number, or email"
            placeholderTextColor={COLOR.gray_6}
          />
          {searchClose == '' || (
            <TouchableOpacity
              onPress={() => setSearchClose('')}
              style={{height: 35, width: 30, ...commonStyles.center}}>
              <Image source={Icon.close} style={styles.closeIcon} />
            </TouchableOpacity>
          )}
        </View>
        {/* Contacts List */}
        {contacts ? (
          <View>
            <FlatList
              data={ContactsCalendarList}
              keyExtractor={item => item.id.toString()}
              renderItem={renderItem}
              contentContainerStyle={styles.listContainer}
            />
          </View>
        ) : (
          <View style={styles.NofoundContainer}>
            <Text style={styles.NoFountText}>No contacts found</Text>
            <TouchableOpacity
              style={styles.NewContactBtn}
              onPress={() => navigation.navigate(SCREEN.NewContactCalendar)}>
              <Text style={styles.BtnText}>No contacts found</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View  style={{height:hp(10)}} />
      </ScrollView>
      <View style={styles.bottomBar}></View>
    </View>
  );
};

export default ContactsCalendar;
