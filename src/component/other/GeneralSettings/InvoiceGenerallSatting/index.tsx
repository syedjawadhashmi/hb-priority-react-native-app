import {Image, Text, useWindowDimensions, View} from 'react-native';

import styles from './style';
import {COLOR, commonStyles, wp} from '../../../../themes/StyleGuides';
import {Icon} from '../../../../assest';

const InvoiceGenerallSatting = () => {
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;
  return (
    <View style={styles.container}>
      <View style={styles.TabalStatus}>
        <View style={{width: '35%'}}>
          <View
            style={{
              ...styles.ListContainer,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}>
            <Text style={styles.TabalText}>Transaction ID</Text>
          </View>
          <View style={styles.ListContainer}>
            <Text style={styles.TabalText}>Sub-Account Name</Text>
          </View>
          <View style={{...styles.ListContainer}}>
            <Text style={styles.TabalText}>Billing Date</Text>
          </View>
          <View style={styles.ListContainer}>
            <Text style={styles.TabalText}>Activity Date</Text>
          </View>
          <View style={styles.ListContainer}>
            <Text style={styles.TabalText}>Description</Text>
          </View>
          <View style={styles.ListContainer}>
            <Text style={styles.TabalText}>Amount</Text>
          </View>
          <View style={styles.ListContainer}>
            <Text style={styles.TabalText}>Total Balance</Text>
          </View>
          <View
            style={{
              ...styles.ListContainer,
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}>
            <Text style={styles.TabalText}></Text>
          </View>
        </View>
        <View style={{width:isLandscape?"65%":wp("59%")}}>
          <View
            style={{
              ...styles.ListContainerSecond,
              backgroundColor: COLOR.whites,
            }}>
            <Text style={styles.TabalListText}>6688557854</Text>
          </View>
          <View
            style={{
              ...styles.ListContainerSecond,
              backgroundColor: COLOR.white1,
            }}>
            <Text style={styles.TabalListText}>SubaccountNAME</Text>
          </View>
          <View
            style={{
              ...styles.ListContainerSecond,
              backgroundColor: COLOR.whites,
            }}>
            <Text style={styles.TabalListText}>Oct 1st 2024 04:04:36</Text>
          </View>
          <View
            style={{
              ...styles.ListContainerSecond,
              backgroundColor: COLOR.white1,
            }}>
            <Text style={styles.TabalListText}>Sep 23rd 2024 05:23:16</Text>
          </View>
          <View
            style={{
              ...styles.ListContainerSecond,
              backgroundColor: COLOR.whites,
            }}>
            <Text style={styles.TabalListText}>
              CALL, ref:kuygfsudygfsuiydghf
            </Text>
          </View>
          <View
            style={{
              ...styles.ListContainerSecond,
              backgroundColor: COLOR.white1,
            }}>
            <Text style={styles.TabalListText}>-$0.0256</Text>
          </View>
          <View
            style={{
              ...styles.ListContainerSecond,
              backgroundColor: COLOR.whites,
            }}>
            <Text style={{...styles.TabalListText, color: COLOR.perpal_3}}>
              $523
            </Text>
          </View>
          <View
            style={{
              ...styles.ListContainerSecond,
              backgroundColor: COLOR.white1,
            }}>
            <View style={{...commonStyles.horizontalView, marginLeft: '5%'}}>
              <Image
                source={Icon.Views}
                style={{width: 15, height: 15, resizeMode: 'contain'}}
              />
              <Text style={styles.TabalListText}>View</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default InvoiceGenerallSatting;
