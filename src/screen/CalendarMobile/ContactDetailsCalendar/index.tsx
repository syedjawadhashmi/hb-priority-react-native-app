import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';

import styles from './style';
import {COLOR} from '../../../themes/StyleGuides';
import UpwardDropdownCalendar from '../../../component/other/CalendarMobileCom/UpwardDropdownCalendar';
import {Icon} from '../../../assest';
import Header from '../../../component/common/Header';

const {width} = Dimensions.get('window');

const ContactDetailsCalendar = (props: any) => {
  const {navigation} = props;


  return (
    <View style={styles.mainContainer}>
      <Header
        firstIcon={Icon.bars}
        title="Calendar"
        onpesDrawer={() => navigation.openDrawer()}
      />
              <ScrollView showsVerticalScrollIndicator={false} >

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Jane Doe</Text>
        </View>
          {/* Appointment Time */}
          <View style={styles.appointmentContainer}>
            <Text style={styles.timeText}>
              Mon, Jun 17, 2024 2:00 PM - 2:30 PM (EDT)
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Appointment</Text>
            </TouchableOpacity>
          </View>

          {/* Attendees */}
          <View
            style={[
              styles.section,
              {borderBottomWidth: 1, borderBottomColor: COLOR.white},
            ]}>
            <View style={{flexDirection: 'row', gap: 5}}>
              <Image
                source={Icon.users_2}
                style={{width: 18, height: 18, resizeMode: 'center'}}
              />
              <Text style={styles.sectionTitle}>Attendees</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>JD</Text>
              </View>
              <View>
                <Text style={styles.contactName}>Jane Doe</Text>
                <Text style={styles.subText1}>Primary Contact</Text>
              </View>
            </View>
          </View>

          {/* Location */}
          <View style={styles.section}>
            <View style={styles.sectionTitleWraper}>
              <Image
                source={Icon.location_2}
                style={{width: 18, height: 18, resizeMode: 'center'}}
              />
              <Text style={styles.sectionTitle}>Location</Text>
            </View>
            <Text style={styles.subText}>Jane’s Calendar</Text>
          </View>

          {/* Calendar */}
          <View style={styles.section}>
            <View style={styles.sectionTitleWraper}>
              <Image
                source={Icon.calendar_4}
                style={{width: 18, height: 18, resizeMode: 'center'}}
              />
              <Text style={styles.sectionTitle}>Calendar</Text>
            </View>
            <Text style={styles.subText}>Jane’s Calendar</Text>
          </View>

          {/* Meeting Owner */}
          <View style={styles.section}>
            <View style={styles.sectionTitleWraper}>
              <Image
                source={Icon.user_4}
                style={{width: 18, height: 18, resizeMode: 'center'}}
              />
              <Text style={styles.sectionTitle}>Meeting Owner</Text>
            </View>
            <Text style={styles.subText}>John Doe</Text>
          </View>
          <UpwardDropdownCalendar />
      </View>
      </ScrollView>

    </View>
  );
};

export default ContactDetailsCalendar;
