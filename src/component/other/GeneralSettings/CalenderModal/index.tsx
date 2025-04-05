import {
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import styles from './style';
import {Calendar} from 'react-native-calendars';
import {useState} from 'react';
import {COLOR, hp} from '../../../../themes/StyleGuides';
import {UpdatePaymentModal} from '../../../../data/Types';

const CalenderModal = (props: UpdatePaymentModal) => {
  const {close, visible, save} = props;
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;
  const [range, setRange] = useState({
    startDate: '',
    endDate: '',
  });
  const onDayPress = (day: any) => {
    const {dateString} = day;

    if (!range.startDate || (range.startDate && range.endDate)) {
      setRange({startDate: dateString, endDate: ''});
    } else if (!range.endDate) {
      if (new Date(dateString) >= new Date(range.startDate)) {
        setRange(prev => ({...prev, endDate: dateString}));
      } else {
        setRange({startDate: dateString, endDate: ''});
      }
    }
  };

  const getMarkedDates = () => {
    const markedDates: {[key: string]: any} = {};
    if (range.startDate) {
      markedDates[range.startDate] = {
        startingDay: true,
        color: COLOR.perpal,
        textColor: 'white',
      };
    }
    if (range.endDate) {
      markedDates[range.endDate] = {
        endingDay: true,
        color: COLOR.perpal,
        textColor: 'white',
      };

      // Mark the dates in between startDate and endDate
      const start = new Date(range.startDate);
      const end = new Date(range.endDate);
      for (
        let d = new Date(start.getTime() + 24 * 60 * 60 * 1000);
        d < end;
        d.setDate(d.getDate() + 1)
      ) {
        markedDates[d.toISOString().split('T')[0]] = {
          color: '#d1c4e9',
          textColor: 'black',
        };
      }
    }
    return markedDates;
  };

  return (
    <Modal transparent visible={visible}>
      <View
        style={[styles.container, isLandscape && styles.landscapeContainer]}>
        <View style={[styles.modal, isLandscape && styles.landscapeModal]}>
          <ScrollView>
            <Calendar
              style={[styles.calendar, isLandscape && styles.landscapeCalendar]}
              onDayPress={onDayPress}
              markedDates={getMarkedDates()}
              markingType={'period'}
              theme={{
                todayTextColor: '#6A0DAD',
                arrowColor: '#6A0DAD',
                textDayFontWeight: '500',
                textMonthFontWeight: '300',
                textDayHeaderFontWeight: '500',
                textDayFontSize: 10,
                textMonthFontSize: 10,
                textDayHeaderFontSize: 10,
                monthTextColor: COLOR.perpal,
                textDayHeaderColor: COLOR.perpal,
                calendarBackground: '#e0e0e0',
              }}
            />
            <TouchableOpacity
              style={styles.btnStyle}
              onPress={() => save(range)}>
              <Text style={styles.TextStyle}>Confirm</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
export default CalenderModal;
