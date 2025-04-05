import {  Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import styles from './styles';
import Header from '../../../component/common/Header';
import { Icon } from '../../../assest';
import { useState } from 'react';
import { COLOR } from '../../../themes/StyleGuides';
import Deals from '../../../component/other/CRMmodule/Deals';
import CRMDrawer from '../../../navigation/CRMDrawer';
import CRMDrawer2 from '../../../navigation/CRMDrawer2';

const CRM = (prop: any) => {
  const { navigation } = prop;
  const [select, setSelect] = useState(0);
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="CRM"
        onpesDrawer={() => navigation.openDrawer()}
      />
      
      <View style={[styles.selectContainer, { marginTop: isLandscape ? '1%' : '5%' }]}>
        <TouchableOpacity
          onPress={() => setSelect(0)}
          style={{
            ...styles.selectBtn,
            backgroundColor: select === 0 ? COLOR.primary : COLOR.whites,
          }}>
          <Text style={styles.selectdText}>Companies</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelect(1)}
          style={{
            ...styles.selectBtn,
            backgroundColor: select === 1 ? COLOR.primary : COLOR.whites,
          }}>
          <Text style={styles.selectdText}>Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelect(2)}
          style={{
            ...styles.selectBtn,
            backgroundColor: select === 2 ? COLOR.primary : COLOR.whites,
          }}>
          <Text style={styles.selectdText}>Deals</Text>
        </TouchableOpacity>
      </View>
      {select === 0 ? <CRMDrawer /> : select === 1 ? <CRMDrawer2 /> : <Deals />}
      <View style={styles.bottomBar}></View>
    </View>
  );
};
export default CRM;
