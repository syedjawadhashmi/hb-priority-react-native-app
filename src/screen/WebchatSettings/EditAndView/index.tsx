import {Text, TouchableOpacity, View} from 'react-native';

import styles from './style';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';
import {useState} from 'react';
import {COLOR} from '../../../themes/StyleGuides';

const EditAndView = (props: any) => {
  const {navigation} = props;
  const [select, setSelect] = useState(0);

  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="Webchat Settings"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <View style={styles.selectContainer}>
        <TouchableOpacity
          onPress={() => setSelect(0)}
          style={{
            ...styles.selectBtn,
            backgroundColor: select == 0 ? COLOR.primary : COLOR.whites,
          }}>
          <Text style={styles.selectdText}>Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelect(1)}
          style={{
            ...styles.selectBtn,
            backgroundColor: select == 1 ? COLOR.primary : COLOR.whites,
          }}>
          <Text style={styles.selectdText}>Wallet & Transactions</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomBar}></View>
    </View>
  );
};
export default EditAndView;
