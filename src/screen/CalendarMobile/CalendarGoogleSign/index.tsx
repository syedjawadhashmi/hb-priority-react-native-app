import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';
import SCREEN from '../../../data/ScrName';

const CalendarGoogleSign = (prop: any) => {
  const {navigation} = prop;

  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="Calendar"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView>
      <View style={styles.imagesContaoner}>
        <Image source={Icon.google} style={styles.ImagesGoogle} />
      </View>
      <Text style={styles.textStyle}>
        Google Account (johndoe@companyname.com)
      </Text>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.navigate(SCREEN.CalendarConfiguration)}>
        <Text style={styles.btnText}>Sign In With Google</Text>
      </TouchableOpacity>
      
      </ScrollView>

      <View style={styles.bottomBar}></View>
    </View>
  );
};
export default CalendarGoogleSign;
