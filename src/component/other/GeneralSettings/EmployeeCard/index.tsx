import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
// import styles from '../../screens/TeamUi/TeamsScreenStyles';
import {COLOR} from '../../../../themes/StyleGuides';
import styles from './style';
import {Icon} from '../../../../assest';

interface EmployeeCardProps {
  item: {
    name: string;
    email: string;
    phone: string;
    userType: string;
  };
  isOdd: boolean;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({item, isOdd}) => {
  return (
    <View style={[styles.card, isOdd ? styles.oddChild : styles.evenChild]}>
      {/* Employee Info */}
      <View style={styles.row}>
        <Text style={[styles.label, styles.labelBg]}>Name</Text>
        <Text style={styles.value}>{item.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.label, styles.labelBg]}>Email</Text>
        <Text style={[styles.value, {backgroundColor: COLOR.white_3}]}>
          {item.email}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.label, styles.labelBg]}>Phone</Text>
        <Text style={styles.value}>{item.phone}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.label, styles.labelBg]}>User Type</Text>
        <Text style={[styles.value, {backgroundColor: COLOR.white_3}]}>
          {item.userType}
        </Text>
      </View>

      {/* Actions */}
      <View style={styles.row}>
        <Text style={[styles.label, styles.labelBg]}>Action</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={Icon.pan_1} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={Icon.Delete} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={Icon.backspace} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EmployeeCard;
