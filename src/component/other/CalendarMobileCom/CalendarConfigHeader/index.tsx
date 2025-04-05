import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLOR, TEXT_STYLE  } from '../../../../themes/StyleGuides';

const CalendarConfigHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={[ { color: COLOR.whites, fontWeight: 'bold' }]}>
        Calendar Configuration
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLOR.perpal, // Matches the purple header
    paddingVertical: '3%',
    paddingHorizontal: '5%',
    borderRadius: 10,
  },
});

export default CalendarConfigHeader;
