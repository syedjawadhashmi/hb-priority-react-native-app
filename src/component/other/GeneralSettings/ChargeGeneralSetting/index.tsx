import {Image, Text, View} from 'react-native';

import styles from './style';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import { Icon } from '../../../../assest';

const ChargeGeneralSetting = () => {
  return (
    <View style={styles.container}>
      <View style={styles.TabalStatus}>
        <View style={{width: '30%'}}>
          <View
            style={{
              ...styles.ListContainer,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}>
            <Text style={styles.TabalText}>ID</Text>
          </View>
          <View style={styles.ListContainer}>
            <Text style={styles.TabalText}>Date</Text>
          </View>
          <View style={{...styles.ListContainer, height: 100}}>
            <Text style={styles.TabalText}>Description</Text>
          </View>
          <View style={styles.ListContainer}>
            <Text style={styles.TabalText}>Card Details</Text>
          </View>
          <View style={styles.ListContainer}>
            <Text style={styles.TabalText}>Amount</Text>
          </View>
          <View style={styles.ListContainer}>
            <Text style={styles.TabalText}>Status</Text>
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
        <View style={{width: '70%'}}>
          <View
            style={{
              ...styles.ListContainerSecond,
              backgroundColor: COLOR.whites,
            }}>
            <Text style={styles.TabalListText}>ch_5**fwe3</Text>
          </View>
          <View
            style={{
              ...styles.ListContainerSecond,
              backgroundColor: COLOR.white1,
            }}>
            <Text style={styles.TabalListText}>Sep 11, 2024 2:44:23 PM</Text>
          </View>
          <View
            style={{
              ...styles.ListContainerSecond,
              backgroundColor: COLOR.whites,
              height: 100,
            }}>
            <Text style={styles.TabalListText}>
              Automated Recharge : Messaging credits worth 100 USD added for
              HubSpark CRM.These credits will be used for SMS, Calls, Emails,
              phone numbers, etc. Please refer to Agency Billing Page
              (https://app.hubspark.co/settings/billing/) for more details.
            </Text>
          </View>
          <View
            style={{
              ...styles.ListContainerSecond,
              backgroundColor: COLOR.white1,
            }}>
            <Text style={{...styles.TabalListText,fontWeight:"700"}}>Visa ending 1234</Text>
          </View>
          <View
            style={{
              ...styles.ListContainerSecond,
              backgroundColor: COLOR.whites,
            }}>
            <Text style={styles.TabalListText}>$100</Text>
          </View>
          <View
            style={{
              ...styles.ListContainerSecond,
              backgroundColor: COLOR.white1,
            }}>
            <Text style={{...styles.TabalListText,color:COLOR.perpal_3}}>Successful</Text>
          </View>
          <View
            style={{
              ...styles.ListContainerSecond,
              backgroundColor: COLOR.whites
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
export default ChargeGeneralSetting;
