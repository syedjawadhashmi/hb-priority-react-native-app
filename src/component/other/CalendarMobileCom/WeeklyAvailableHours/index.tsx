import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import {WeeklyAvailableHoursList} from '../../../../data/DummayData';
import {Icon} from '../../../../assest';
import { commonStyles } from '../../../../themes/StyleGuides';

const WeeklyAvailableHours = () => {
  return (
    <View>
      {WeeklyAvailableHoursList.map(item => (
        <View style={styles.container}>
          <Image source={Icon.check} style={styles.checkBox} />
          <Text style={styles.day}>{item.day}</Text>
          <View style={{...commonStyles.horizontalView}} >

          <View style={styles.field}>
            <Text style={styles.time}>{item.time1}</Text>
          </View>
          <View style={styles.field}>
          <Text style={styles.time}>{item.time2}</Text>
          </View>
          </View>
          <TouchableOpacity>
          <Image source={Icon.plus} style={styles.plus} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image source={Icon.Delete} style={styles.Delete} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image source={Icon.plusFolder} style={styles.checkBox} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};
export default WeeklyAvailableHours;
