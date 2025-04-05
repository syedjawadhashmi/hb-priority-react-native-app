import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

import {COLOR} from '../../../themes/StyleGuides';
import {Icon} from '../../../assest';
import {useState} from 'react';
import * as component from '../../../component';

const Phone = (prop: any) => {
  const {navigation} = prop;
  const [select, setSelect] = useState(0);

  return (
    <View style={styles.container}>
      <component.Header
        title="Inbox"
        firstIcon={Icon.bars}
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView contentContainerStyle={{flexGrow:1}}  >
      {select == 0 ? (
        <component.Input
          placeholder={'Search Calls'}
          IconStyle={{tintColor: COLOR.gray}}
        />
      ) : (
        <component.Input
          placeholder={'Search Contacts'}
          IconStyle={{tintColor: COLOR.gray}}
        />
      )}

      <View style={styles.selectContainer}>
        <TouchableOpacity
          onPress={() => setSelect(0)}
          style={{
            ...styles.selectBtn,
            backgroundColor: select == 0 ? COLOR.primary : COLOR.whites,
          }}>
          <Text style={styles.selectdText}>All Calls</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelect(1)}
          style={{
            ...styles.selectBtn,
            backgroundColor: select == 1 ? COLOR.primary : COLOR.whites,
          }}>
          <Text style={styles.selectdText}>Contacts</Text>
        </TouchableOpacity>
      </View>
      {select == 0 ? (
        <component.AllCalls navigation={navigation} />
      ) : (
        <component.Contacts navigation={navigation} />
      )}
      </ScrollView>
    </View>
  );
};
export default Phone;
