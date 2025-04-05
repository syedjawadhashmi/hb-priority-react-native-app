import {Image, Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';

import styles from './style';
import {Icon} from '../../../assest';
import {COLOR, commonStyles, wp} from '../../../themes/StyleGuides';
import FilterModalGeneralSetting from '../../../component/other/GeneralSettings/FilterModal';
import {useState} from 'react';
import CalenderModal from '../../../component/other/GeneralSettings/CalenderModal';

const DetailedTransactions = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [isCalender, setIsCalender] = useState(false);
  const [date, setDate] = useState("");

  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <View style={styles.container}>
      <Text style={styles.titleSTyele}>Detailed Transactions</Text>
      <Text style={styles.textStyle}>
        Transactions till past 6 months are accessible
      </Text>
      <View
        style={{
          ...commonStyles.verticleView,
          paddingHorizontal: '5%',
          marginTop: '3%',
        }}>
        <TouchableOpacity
          style={styles.dateSelector}
          onPress={() => setIsCalender(true)}>
          <Text style={styles.textStyle}>{date?.startDate?date?.startDate:"2024-03-24"}</Text>
          <Image
            source={Icon.RightlongArrow}
            style={{
              width: 8,
              height: 8,
              resizeMode: 'contain',
              tintColor: COLOR.gray_5,
            }}
          />
          <Text style={styles.textStyle}>{date?.endDate?date?.endDate:"2024-03-24"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsFilter(true)}
          style={{...styles.dateSelector, backgroundColor: COLOR.perpal_3}}>
          <Image source={Icon.filter} style={styles.iconStyle} />
          <Text
            style={{
              ...styles.textStyle,
              fontWeight: '800',
              color: COLOR.whites,
            }}>
            Filter
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.dateSelector, backgroundColor: COLOR.perpal_3}}>
          <Image source={Icon.download_2} style={styles.iconStyle} />
          <Text
            style={{
              ...styles.textStyle,
              fontWeight: '800',
              color: COLOR.whites,
            }}>
            Export
          </Text>
        </TouchableOpacity>
      </View>

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
            <Text style={{...styles.TabalListText,color:COLOR.perpal_3}}>-$0.0256</Text>
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
      <FilterModalGeneralSetting
        close={() => setIsFilter(false)}
        visible={isFilter}
        save={() => setIsFilter(false)}
      />
      <CalenderModal
        close={() => setIsCalender(false)}
        visible={isCalender}
        save={(data:any) => {setIsCalender(false),setDate(data)}}
      />
    </View>
  );
};
export default DetailedTransactions;
