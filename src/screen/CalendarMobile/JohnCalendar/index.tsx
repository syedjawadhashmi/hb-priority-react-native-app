import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {COLOR, TEXT_STYLE} from '../../../themes/StyleGuides'; // Assuming your theme file is named theme.js
import styles from './styles';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';

const events = [
  {
    id: '1',
    date: '2024-06-17',
    day: 'Mon',
    name: 'Jane Doe',
    time: '2:00 PM - 2:30 PM (EDT)',
    status: 'Confirmed',
  },
  {
    id: '2',
    date: '2024-06-14',
    day: 'Fri',
    name: 'Jane Doe',
    time: '2:00 PM - 2:30 PM (EDT)',
    status: 'Confirmed',
  },
];

const JohnCalendar = (props: any) => {
  const {navigation} = props;
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;
  return (
    <View style={styles.mainComtainer}>
      <Header
        firstIcon={Icon.bars}
        title="Calendar"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView scrollEnabled={true}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={[TEXT_STYLE.subTitle, styles.headerText]}>
              John's Calendar
            </Text>
          </View>

          {/* Calendar */}
          <View style={{marginBottom: '17%'}}>
            <View style={styles.calendarContainer}>
              <Calendar
                current={'2024-06-17'}
                onDayPress={day => {
                  console.log('Selected day:', day);
                }}
                markedDates={{
                  '2024-06-17': {
                    selected: true,
                    selectedColor: COLOR.perpal, // Correct purple background
                    textColor: COLOR.whites,
                  },
                  '2024-06-14': {
                    marked: true,
                    dotColor: COLOR.primary, // Marked dot for June 14
                    selected: false,
                  },
                }}
                theme={{
                  backgroundColor: '#e0e0e0',
                  calendarBackground: COLOR.gray_4,
                  textSectionTitleColor: COLOR.black,
                  selectedDayTextColor: COLOR.whites,
                  todayTextColor: COLOR.Primary_2,
                  dayTextColor: COLOR.black,
                  textDisabledColor: COLOR.gray_6,
                  arrowColor: COLOR.perpal,
                  monthTextColor: COLOR.black,
                  textDayFontFamily: TEXT_STYLE.text_regular.fontFamily,
                  textMonthFontFamily: TEXT_STYLE.subTitle.fontFamily,
                  textDayHeaderFontFamily: TEXT_STYLE.text_medium.fontFamily,
                }}
              />
            </View>

            {/* Event List */}
            <FlatList
              scrollEnabled={false}
              data={events}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View
                  style={{flexDirection: 'row', width: '100%', marginTop: 10}}>
                  <View style={{flexDirection: 'column', width: '20%'}}>
                    <Text
                      style={[
                        styles.eventDay,
                        {fontWeight: 'bold', color: COLOR.perpal},
                      ]}>
                      {item.day}
                    </Text>
                    <Text style={styles.eventDay}>
                      {item.date.substring(8)}
                    </Text>
                  </View>
                  <View style={styles.eventContainer}>
                    <View style={styles.eventDetails}>
                      <Text style={styles.eventName}>{item.name}</Text>
                      <Text style={styles.eventTime}>{item.time}</Text>
                      <View style={styles.statusContainer}>
                        <Text style={styles.statusText}>{item.status}</Text>
                      </View>
                    </View>
                    <View style={styles.avatarContainer}>
                      <Text style={styles.avatarText}>{item.name[0]}</Text>
                    </View>
                  </View>
                </View>
              )}
            />

            {/* Floating Action Button */}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={{...styles.fab,bottom:isLandscape?"20%":"10%"}}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
      <View style={styles.bottomBar}></View>
    </View>
  );
};

export default JohnCalendar;
