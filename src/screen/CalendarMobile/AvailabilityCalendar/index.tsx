import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import styles from './style';

import {commonStyles, TEXT_STYLE} from '../../../themes/StyleGuides';
import {Calenderdata} from '../../../data/DummayData';
import MeetingSettings from '../../../component/other/CalendarMobileCom/MeetingSettings';
import WeeklyAvailableHours from '../../../component/other/CalendarMobileCom/WeeklyAvailableHours';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';
import SCREEN from '../../../data/ScrName';

const AvailabilityCalendar = (props: any) => {
  const {navigation} = props;
  return (
    <View style={{...commonStyles.mainContainer}}>
      <Header
        firstIcon={Icon.bars}
        title="Calendar"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView contentContainerStyle={{padding: 20, overflow: 'scroll'}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={[TEXT_STYLE.subTitle, styles.headerText]}>
              Availability
            </Text>
          </View>
          <Text style={[TEXT_STYLE.text_medium, styles.subHeaderText]}>
            Set your availability for the calendar here.
          </Text>
          <Text style={[TEXT_STYLE.text_medium, styles.sectionTitle]}>
            Weekly Available Hours
          </Text>

          <WeeklyAvailableHours />

          <TouchableOpacity
            style={styles.addDateButton}
            onPress={() =>
              navigation.navigate(SCREEN.NotificationsAdditionalOptions)
            }>
            <Text style={styles.addDateButtonText}>
              Add Date Specific Hours
            </Text>
          </TouchableOpacity>
          <MeetingSettings data={Calenderdata} />
        </View>
      </ScrollView>
      <View style={styles.bottomBar}></View>
    </View>
  );
};

export default AvailabilityCalendar;
