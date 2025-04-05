import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import { Icon } from '../../../assest';

const CallScreen = (prop:any) => {
    const{navigation}=prop
  return (
    <View style={styles.container}>
      <Text style={styles.runSecond}>00:26</Text>
      <Text style={styles.Name}>Lily Brock</Text>
      <Text style={styles.number}>(305) 555-6789</Text>

      <View style={styles.Card}>
        <View style={styles.IconContainer}>
          <TouchableOpacity>
            <Image style={styles.IconsStyle} source={Icon.Speaker} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.IconsStyle} source={Icon.Mute} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.IconsStyle} source={Icon.HoldCall} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.CallEndBtn} onPress={()=>navigation.goBack()} >
          <Image style={styles.EndIcon} source={Icon.phone2} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CallScreen;
