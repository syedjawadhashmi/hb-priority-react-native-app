import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {Icon} from '../../../assest';
import {COLOR} from '../../../themes/StyleGuides';
import {useState} from 'react';
import * as component from '../../../component';

const Payments = (prop: any) => {
  const {navigation} = prop;

  const [select, setSelect] = useState(0);

  return (
    <View style={styles.container}>
      <component.Header
        title="Payments"
        firstIcon={Icon.bars}
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView scrollEnabled={true}>
        <View style={styles.selectContainer}>
          <TouchableOpacity
            onPress={() => setSelect(0)}
            style={{
              ...styles.selectBtn,
              backgroundColor: select == 0 ? COLOR.primary : COLOR.whites,
            }}>
            <Text style={styles.selectdText}>Insights</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelect(1)}
            style={{
              ...styles.selectBtn,
              backgroundColor: select == 1 ? COLOR.primary : COLOR.whites,
            }}>
            <Text style={styles.selectdText}>Transactions</Text>
          </TouchableOpacity>
        </View>
        {select == 0 ? (
          <component.Insights />
        ) : (
          <component.Transactions navigation={navigation} />
        )}
      </ScrollView>
      <View style={styles.bottomBar}></View>
    </View>
  );
};
export default Payments;
