import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getDaysInMonth = (month:any, year:any) => {
  return new Date(year, month + 1, 0).getDate();
};

const generateCalendar = (month:any, year:any) => {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = getDaysInMonth(month, year);

  const calendar = [];
  let week = Array(firstDay).fill(null); // Fill initial empty days

  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day);

    if (week.length === 7 || day === daysInMonth) {
      calendar.push(week);
      week = [];
    }
  }

  return calendar;
};

const CustomCalendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selector, setselector] = useState(1);

  const calendar = generateCalendar(currentMonth, currentYear);

  const handleDayPress = day => {
    if (day) {
      setSelectedDate(`${currentYear}-${currentMonth + 1}-${day}`);
    }
  };

  const changeMonth = direction => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(prevYear => prevYear - 1);
      } else {
        setCurrentMonth(prevMonth => prevMonth - 1);
      }
    } else if (direction === 'next') {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(prevYear => prevYear + 1);
      } else {
        setCurrentMonth(prevMonth => prevMonth + 1);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={{marginTop: '7%'}}>
        <TouchableOpacity
          style={{
            ...styles.selctorBtn,
            backgroundColor: selector === 1 ? COLOR.perpal_3 : COLOR.whites,
          }}
          onPress={() => setselector(1)}>
          <Text style={{...styles.selctorText,color:selector==1?COLOR.whites:COLOR.perpal_3}}>Year To Date</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.selctorBtn,
            backgroundColor: selector === 2 ? COLOR.perpal_3 : COLOR.whites,
          }}
          onPress={() => setselector(2)}>
          <Text style={{...styles.selctorText,color:selector==2?COLOR.whites:COLOR.perpal_3}}>This Month</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.selctorBtn,
            backgroundColor: selector === 3 ? COLOR.perpal_3 : COLOR.whites,
          }}
          onPress={() => setselector(3)}>
          <Text style={{...styles.selctorText,color:selector==3?COLOR.whites:COLOR.perpal_3}}>This Week</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => changeMonth('prev')}>
            <Text style={styles.navButton}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.monthText}>
            {monthNames[currentMonth]} {currentYear}
          </Text>
          <TouchableOpacity onPress={() => changeMonth('next')}>
            <Text style={styles.navButton}>{'>'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.weekRow}>
          {daysOfWeek.map((day, index) => (
            <Text key={index} style={styles.weekDay}>
              {day}
            </Text>
          ))}
        </View>
        {calendar.map((week, weekIndex) => (
          <View key={weekIndex} style={styles.weekRow}>
            {week.map((day, dayIndex) => {
              const isSelected =
                day &&
                selectedDate === `${currentYear}-${currentMonth + 1}-${day}`;
              return (
                <TouchableOpacity
                  key={dayIndex}
                  style={[
                    styles.dayButton,
                    isSelected && styles.selectedDay, // Highlight the selected day
                  ]}
                  onPress={() => handleDayPress(day)}>
                  <Text
                    style={[
                      day ? styles.dayText : styles.emptyDay,
                      isSelected && styles.selectedDayText, // Change text color for selected day
                    ]}>
                    {day || ''}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
};

export default CustomCalendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // ...commonStyles.verticleView,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'center',
    marginRight: '7%',
    marginTop: '2%',
  },
  navButton: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLOR.gray_5,
  },
  monthText: {
    fontSize: 9,
    fontWeight: 'bold',
    color: COLOR.perpal_3,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
    width: '90%',
  },
  weekDay: {
    fontSize: 7,
    fontWeight: 'bold',
    color: COLOR.gray_5,
  },
  dayButton: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  dayText: {
    fontSize: 7,
    color: COLOR.gray_5,
  },
  emptyDay: {
    color: 'transparent',
  },
  selectedDay: {
    backgroundColor: COLOR.perpal_3,
    borderRadius: 20,
  },
  selectedDateText: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
  selectedDayText: {
    color: COLOR.perpal_3, // White text for selected date
    fontWeight: 'bold',
  },
  selctorBtn: {
    backgroundColor: COLOR.perpal_3,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: 10,
    ...commonStyles.center,
    marginTop: '2%',
    borderWidth:1
  },
  selctorText: {fontSize: 5, fontWeight: '400', color: COLOR.whites},
});
