import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import SCREEN from '../../data/ScrName';

const Onbording = (props: any) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => navigation.navigate(SCREEN.DrawerNavigations)}>
          <Text style={styles.BtnText}>Inbox Module</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() =>
            navigation.navigate(SCREEN.DrawerNavigations, {
              screen: SCREEN.DrawerStack,
              params: {
                screen: SCREEN.Payments, 
              },
            })
          }>
          <Text style={styles.BtnText}>Payment Module</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Onbording;
