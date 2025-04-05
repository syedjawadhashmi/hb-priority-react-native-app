import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {styles} from './style';
import {commonStyles} from '../../../themes/StyleGuides';
import CalendarConfigCard from '../../../component/other/CalendarMobileCom/CalendarConfigCard';
import CalendarConfigHeader from '../../../component/other/CalendarMobileCom/CalendarConfigHeader';
import LinkedCalendarModal from '../../../component/other/CalendarMobileCom/LinkedCalendarModal';
import ConflictCalendarModal from '../../../component/other/CalendarMobileCom/ConflictCalendarModal';
import {Icon} from '../../../assest';
import SCREEN from '../../../data/ScrName';
import Header from '../../../component/common/Header';

const CalendarConfiguration = (props: any) => {
  const {navigation} = props;
  const [showLinkedModal, setShowLinkedModal] = useState(false);
  const [showConflictModal, setShowConflictModal] = useState(false);
  const handalNev = () => {
    navigation.navigate(SCREEN.CustomizationsCalendar);
    setShowConflictModal(false);
  };
  return (
    <View style={{...commonStyles.mainContainer}}>
      <Header
        firstIcon={Icon.bars}
        title="Calendar"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView>
        <View style={[commonStyles.mainContainer, styles.container]}>
          <CalendarConfigHeader />

          <View style={{margin: '1%'}}>
            <CalendarConfigCard
              title="Linked Calendar"
              subtitle="Sync bookings with your linked calendar"
              email="johndoe@companyname.com"
              iconSource={Icon.calendar_2} // Replace with your actual calendar icon path
              onEditPress={() => setShowLinkedModal(true)}
            />

            <CalendarConfigCard
              title="Conflict Calendars"
              subtitle="Add additional calendars to be checked to prevent double bookings"
              email="johndoe@companyname.com"
              iconSource={Icon.ConflictCalendar} // Replace with your actual conflict icon path
              onEditPress={() => setShowConflictModal(true)}
            />
          </View>
        </View>
          <LinkedCalendarModal
            onClose={() => setShowLinkedModal(false)}
            onSave={() => {
              setShowLinkedModal(false);
              navigation.navigate(SCREEN.JohnCalendar);
            }}
            visible={showLinkedModal}
          />
        <ConflictCalendarModal
          visible={showConflictModal}
          onClose={() => {
            setShowConflictModal(false);
          }}
          onSave={() => {
            handalNev();
          }}
        />
      </ScrollView>
      <View style={styles.bottomBar}></View>
    </View>
  );
};

export default CalendarConfiguration;
