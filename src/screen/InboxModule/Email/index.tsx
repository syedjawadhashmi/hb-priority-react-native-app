import { ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import { useState } from 'react';
import { Icon } from '../../../assest';
import { COLOR } from '../../../themes/StyleGuides';
import SCREEN from '../../../data/ScrName';
import * as component from '../../../component';



const Email = (prop: any) => {
  const {navigation} = prop;
  const [select, setSelect] = useState(0);
  return (
    <View style={styles.container}>
      <component.Header
        firstIcon={Icon.bars}
        title="Inbox"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView scrollEnabled={true}  >
      <component.Input placeholder={'Search Emails'} IconStyle={{tintColor:COLOR.gray}} />

      <View style={styles.selectContainer}>
        <TouchableOpacity
          onPress={() => setSelect(0)}
          style={{
            ...styles.selectBtn,
            backgroundColor: select == 0 ? COLOR.primary : COLOR.whites,
          }}>
          <Text style={styles.selectdText}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelect(1)}
          style={{
            ...styles.selectBtn,
            backgroundColor: select == 1 ? COLOR.primary : COLOR.whites,
          }}>
          <Text style={styles.selectdText}>Sent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelect(2)}
          style={{
            ...styles.selectBtn,
            backgroundColor: select == 2 ? COLOR.primary : COLOR.whites,
          }}>
          <Text style={styles.selectdText}>Draft</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        {select == 0 ? (
          <component.Inbox onpress={() => navigation.navigate(SCREEN.DrawerStack,{screen:SCREEN.EmailReplyForward})} />
        ) : select == 1 ? (
          <component.Sent onpress={() => navigation.navigate(SCREEN.DrawerStack,{screen:SCREEN.EmailReplyForward})} />
        ) : (
          <component.Draft onpress={() => navigation.navigate(SCREEN.DrawerStack,{screen:SCREEN.EmailReplyForward})} />
        )}
      </View>
      </ScrollView>
    </View>
  );
};
export default Email;
