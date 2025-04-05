import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import { Icon } from '../../../assest';
import { COLOR } from '../../../themes/StyleGuides';


const Incomingcall = (props: any) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.runSecond}>Incoming call</Text>
      <Text style={styles.Name}>Lily Brock</Text>
      <Text style={styles.number}>(305) 555-6789</Text>

      <View style={{...styles.Card}}>
        <TouchableOpacity
          style={styles.CallEndBtn}
          onPress={() => navigation.goBack()}>
          <View   style={{...styles.EndIconContainer,backgroundColor:COLOR.primary}}> 
            <Image style={styles.EndIcon} source={Icon.phone2} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.CallEndBtn}
          onPress={() => navigation.goBack()}>
          <View style={styles.EndIconContainer} >
            <Image style={styles.EndIcon} source={Icon.phone2} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Incomingcall;
