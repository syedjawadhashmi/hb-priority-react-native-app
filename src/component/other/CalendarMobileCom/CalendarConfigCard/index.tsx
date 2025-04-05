import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLOR, TEXT_STYLE  } from '../../../../themes/StyleGuides';
import { Icon } from '../../../../assest';

interface CalendarConfigCardProps {
  title: string;
  subtitle: string;
  email: string;
  iconSource: any; // Use the correct type for your icons
  onEditPress: () => void;
}

const CalendarConfigCard: React.FC<CalendarConfigCardProps> = ({
  title,
  subtitle,
  email,
  iconSource,
  onEditPress,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconAndText}>
        <Image source={iconSource} style={styles.icon} />
        <View style={styles.textWrapper}>
          <Text style={[TEXT_STYLE.text_medium, styles.cardTitle]}>{title}</Text>
          <Text style={[TEXT_STYLE.text_small, styles.cardSubtitle]}>
            {subtitle}
          </Text>
        </View>
      </View>
      <View style={styles.emailAndEdit}>
      <Image source={Icon.GoogleCalender} style={styles.iconGcalendar} />
        <Text style={[styles.email]}>{email}</Text>
        <TouchableOpacity style={styles.editButton} onPress={onEditPress}>
          <Text style={[TEXT_STYLE.text_small, { color: COLOR.perpal,fontWeight:'900' }]}>
            Edit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: '5%',
    marginTop: '5%',
  },
  iconAndText: {
    flexDirection: 'row',
    marginBottom: '5%',
  },
  icon: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    marginRight: '5%',
  },
  iconGcalendar:{
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginRight: '5%',
  },
  textWrapper: {
    flex: 1,
  },
  cardTitle: {
    color: COLOR.perpal,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: COLOR.lightBlack,
  },
  emailAndEdit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLOR.white,
    paddingHorizontal:'2%',
    marginTop: '3%',
    paddingVertical: '2%',
    borderRadius: 10,
  },
  email: {
    color: COLOR.black,
    fontSize: 12,
    flex: 1,
  },
  editButton: {
    paddingVertical: '2%',
    paddingHorizontal: '5%',
    borderRadius: 5,
  },
});

export default CalendarConfigCard;
