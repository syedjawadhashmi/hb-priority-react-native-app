import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import {Icon} from '../../../../assest';

interface HeaderProps {
  isCalendarView: boolean;
  setIsCalendarView: (value: boolean) => void;
}

const HeaderCalnedar: React.FC<HeaderProps> = ({
  isCalendarView,
  setIsCalendarView,
}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Sun, Jun 16</Text>
      <View style={styles.iconRow}>
        <TouchableOpacity
          style={{
            borderBottomWidth: isCalendarView ? 2 : 0,
            borderBottomColor: isCalendarView ? COLOR.whites : COLOR.perpal_3,
          }}
          onPress={() => setIsCalendarView(true)}>
          <Image
          tintColor={COLOR.whites}
            style={{width: 20, height: 20, marginBottom: 10,resizeMode:"contain"}}
            source={Icon.calender_4}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderBottomWidth: isCalendarView ? 0 : 2,
            borderBottomColor: isCalendarView ? COLOR.perpal_3 : COLOR.whites,
          }}
          onPress={() => setIsCalendarView(false)}>
          <Image
            style={{width: 20, height: 20, marginBottom: 10,resizeMode:"contain"}}
            source={Icon.clock_2}
            tintColor={COLOR.whites}

          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLOR.perpal,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  iconRow: {

...commonStyles.verticleView,
    marginTop: 20,
    width:"40%"
  },
});

export default HeaderCalnedar;
