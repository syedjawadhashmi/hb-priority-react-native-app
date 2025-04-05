import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './style';
import {Icon} from '../../../../assest';

const ReportConnections = () => {
  return (
    <View style={styles.container}>
      <View style={styles.AmmountContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Report Connections</Text>
        </View>
        <View>
          <View style={styles.Chardcontainer}>
            <Image source={Icon.GoogleBusiness} style={styles.IconStyle} />

            <View>
              <Text style={styles.CardTitle}>Google Business Profile</Text>
              <Text style={styles.discription} >
                Get insights, respond to reviews and fetch new reviews daily
              </Text>
              <TouchableOpacity style={styles.btnContainer} >
                <Image style={styles.plusIcon}  source={Icon.plus} />
                <Text  style={styles.btnText}>Connect</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{...styles.Chardcontainer,marginBottom:"7%"}}>
            <Image source={Icon.facebook} style={styles.IconStyle} />

            <View>
              <Text style={styles.CardTitle}>Facebook</Text>
              <Text style={styles.discription} >
              Get insights, respond to reviews and fetch
              new reviews daily
              </Text>
              <TouchableOpacity style={styles.btnContainer} >
                <Image style={styles.plusIcon}  source={Icon.plus} />
                <Text  style={styles.btnText}>Connect</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ReportConnections;
