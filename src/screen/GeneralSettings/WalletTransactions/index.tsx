import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './style';
import {Icon} from '../../../assest';
import {COLOR, commonStyles, normalize} from '../../../themes/StyleGuides';
import {useState} from 'react';
import Summary from '../Summary';
import DetailedTransactions from '../DetailedTransactions';

const WalletTransactions = () => {
  const [selector, setSelector] = useState(1);

  return (
    <View style={styles.container}>
      <Text style={styles.titleSTyele}>Wallet Balance</Text>
      <View style={styles.BalanceCard}>
        <View style={{...commonStyles.horizontalView}}>
          <Text style={styles.balanceText}>$452.26</Text>
          <Image
            source={Icon.DropDown}
            style={styles.iconStyle}
            tintColor={COLOR.gray_5}
          />
        </View>
        <TouchableOpacity style={styles.btnStyle}>
          <Text style={styles.btnText}>+ Add Balance</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardType}>
        <View style={{...commonStyles.verticleView}}>
          <Image source={Icon.Carditem} style={styles.Cart} />
          <Text style={{...styles.textStyle, fontSize: normalize(10), marginLeft: '2%'}}>
            Auto recharge with
          </Text>
          <TouchableOpacity style={styles.DropDown}>
            <Text style={styles.textStyle}>$100</Text>
            <Image
              source={Icon.DropDown}
              style={styles.iconStyle}
              tintColor={COLOR.gray_5}
            />
          </TouchableOpacity>
          <Text style={{...styles.textStyle, fontSize: normalize(10)}}>
            when balance is
          </Text>
        </View>
        <View style={{...commonStyles.horizontalView, marginTop: '2%'}}>
          <Text style={{...styles.textStyle, fontSize: normalize(10), marginLeft: '2%'}}>
            Auto recharge with
          </Text>
          <TouchableOpacity style={styles.DropDown}>
            <Text style={styles.textStyle}>$10</Text>
            <Image
              source={Icon.DropDown}
              style={styles.iconStyle}
              tintColor={COLOR.gray_5}
            />
          </TouchableOpacity>
        </View>
        <View style={{...commonStyles.verticleView, marginBottom: '2%',width:"89%"}}>
          <Image
            source={Icon.Error}
            style={{width: 18, height: 18, resizeMode: 'contain'}}
            tintColor={COLOR.primary}
          />
          <Text style={styles.discription}>
            Recharge amount will be auto-updated based on your recharge history
          </Text>
          <Image
            source={Icon.ThreeDot}
            style={{width: 20, height: 18, resizeMode: 'contain'}}
          />
        </View>
      </View>
      <Text style={styles.titleSTyele}>Wallet Transactions</Text>
      <Text style={{...styles.discription, marginLeft: '5%'}}>
        Updated every 24 hours{' '}
      </Text>

      <View style={styles.SelectorBtn}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: selector == 1 ? COLOR.perpal_3 : COLOR.gray_7,
            ...commonStyles.center,
            height: 30,
          }}
          onPress={() => setSelector(1)}>
          <Text
            style={{
              ...styles.DropDate,
              color: selector == 1 ? COLOR.gray_7 : COLOR.perpal_3,
            }}>
            Summary
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 2,
            backgroundColor: selector == 2 ? COLOR.perpal_3 : COLOR.gray_7,
            ...commonStyles.center,
            height: 30,
          }}
          onPress={() => setSelector(2)}>
          <Text
            style={{
              ...styles.DropDate,
              color: selector == 1 ? COLOR.perpal_3 : COLOR.gray_7,
            }}>
            Detailed Transactions
          </Text>
        </TouchableOpacity>
      </View>
      {selector == 1 ? <Summary /> : <DetailedTransactions />} 
    </View>
  );
};
export default WalletTransactions;
