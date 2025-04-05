import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import { Icon } from '../../../assest';
import Input from '../../../component/common/Input';
import { COLOR } from '../../../themes/StyleGuides';
import SCREEN from '../../../data/ScrName';


const SaveNumber = (props: any) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.userIconContainer}>
          <Image source={Icon.user} style={styles.userIcon} />
        </View>

        <View style={styles.TextInputContainer}>
          <Input
            title="Name"
            Icons={Icon.inputUserIcon}
            style={styles.inputStyle}
            IconStyle={styles.IconStyle}
          />
          <Input
            title="Mobile"
            Icons={Icon.InputPhone}
            style={styles.inputStyle}
            IconStyle={styles.IconStyle}
          />
          <Input
            title="Email"
            Icons={Icon.inputEmail}
            style={styles.inputStyle}
            IconStyle={styles.IconStyle}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.stylebtnSave}
            onPress={() => navigation.navigate(SCREEN.Incomingcall)}>
            <Text style={styles.btnText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{...styles.stylebtnSave, backgroundColor: COLOR.red}}>
            <Text style={{...styles.btnText, color: COLOR.whites}}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default SaveNumber;
