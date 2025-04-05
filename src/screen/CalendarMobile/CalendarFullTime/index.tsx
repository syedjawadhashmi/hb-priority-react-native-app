import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';
import {Calendar} from 'react-native-calendars';
import {COLOR, commonStyles, normalize, TEXT_STYLE} from '../../../themes/StyleGuides';

const CalendarFullTime = (props: any) => {
  const {navigation} = props;
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Days of the week
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Dates for the current month
  const generateDatesForMonth = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from({length: daysInMonth}, (_, i) => ({
      date: `${year}-${month + 1 < 10 ? `0${month + 1}` : month + 1}-${
        i + 1 < 10 ? `0${i + 1}` : i + 1
      }`,
      day: i + 1,
    }));
  };

  const [dates, setDates] = useState(generateDatesForMonth());
  const generateHours = () => {
    const hours = [];
    for (let period of ['AM', 'PM']) {
      for (let hour = 1; hour <= 12; hour++) {
        hours.push(`${hour}:00 ${period}`);
      }
    }
    return hours;
  };

  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="Calendar"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView>
        {/* Days of the Week */}
        <View style={styles.daysRow}>
          {daysOfWeek.map((day, index) => (
            <Text key={index} style={styles.dayText}>
              {day}
            </Text>
          ))}
        </View>

        {/* Dates Row */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.datesRow}>
            {dates.map(({date, day}) => (
              <TouchableOpacity
                key={date}
                style={[
                  styles.dateBox,
                  selectedDate === date && styles.selectedDateBox,
                ]}
                onPress={() => setSelectedDate(date)}>
                <Text
                  style={[
                    styles.dateText,
                    selectedDate === date && styles.selectedDateText,
                  ]}>
                  {day}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {selectedDate && (
          <View style={styles.hoursContainer}>
            <FlatList
              data={generateHours()}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View style={styles.hourseContainer}>
                  <Text style={styles.hourText}>{item}</Text>
                  <View
                    style={{
                      ...styles.listContainer,
                      backgroundColor:
                        item == '4:00 AM' ? COLOR.perpal_3 : COLOR.whites,
                      justifyContent: 'center',
                      paddingHorizontal:"4%"
                    }}>
                    <View>
                      <Text style={styles.dis}>4:00-4:30</Text>
                      <Text style={styles.Meeting}>Meeting Title</Text>
                      <Text style={styles.dis}>Meeting Description</Text>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        )}

        {/* Full Calendar */}
        <View style={{marginBottom: '20%'}}>
          <Calendar
            current={'2024-06-17'}
            markedDates={{
              [selectedDate || '']: {
                selected: true,
                selectedColor: COLOR.perpal,
                textColor: COLOR.whites,
              },
            }}
            theme={{
              backgroundColor: COLOR.whites,
              calendarBackground: COLOR.whites,
              textSectionTitleColor: COLOR.black,
              selectedDayTextColor: COLOR.whites,
              todayTextColor: COLOR.Primary_2,
              dayTextColor: COLOR.black,
              textDisabledColor: COLOR.whites,
              arrowColor: COLOR.perpal,
              monthTextColor: COLOR.black,
              textDayFontFamily: TEXT_STYLE.text_regular.fontFamily,
              textMonthFontFamily: TEXT_STYLE.subTitle.fontFamily,
              textDayHeaderFontFamily: TEXT_STYLE.text_medium.fontFamily,
            }}
          />
        </View>
      </ScrollView>

      <View style={styles.bottomBar}></View>
    </View>
  );
};

export default CalendarFullTime;

// Add the following styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.whites,
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: COLOR.whites,
    paddingVertical: 10,
  },
  dayText: {
    fontSize: normalize(16),
    color: COLOR.gray_5,
    fontWeight: '800',
  },
  datesRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: COLOR.whites,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.gray_4,
  },
  dateBox: {
    // backgroundColor: COLOR.gray_4,
    borderRadius: 15,
    width: 30,
    height: 30,
    ...commonStyles.center,
    marginLeft: 5,
  },
  selectedDateBox: {
    backgroundColor: COLOR.perpal_3,
  },
  dateText: {
    fontSize: normalize(16),
    color: COLOR.black,
  },
  selectedDateText: {
    color: COLOR.whites,
  },
  hoursContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: COLOR.whites,
    borderRadius: 10,
  },
  selectedDateLabel: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLOR.black,
  },
  hourText: {
    fontSize: normalize(15),
    color: COLOR.black,
    padding: 5,
  },
  listContainer: {
    width: '75%',
    borderWidth: 0.7,
    borderColor: COLOR.gray_7,
    height: 70,
  },
  hourseContainer: {...commonStyles.verticleView},
  bottomBar: {
    width: '100%',
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLOR.primary,
    position: 'absolute',
    bottom: 0,
  },
  Meeting: {fontSize: 14, fontWeight: '800', color: COLOR.whites},
  dis: {fontSize: 12, fontWeight: '400', color: COLOR.whites},
});
