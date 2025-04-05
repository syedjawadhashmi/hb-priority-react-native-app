import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
import SCREEN from '../../../data/ScrName';
import {useState} from 'react';
import {ActionDropdown, Dropdata} from '../../../data/DummayData';

const InvoiceIDNumber = (props: any) => {
  const {navigation} = props;
  const [actionDrop, setActionDrop] = useState(false);
  const [action, setAction] = useState('');
  const handal = (data: any) => {
    setAction(data);
    setActionDrop(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainHeader}>
        <Header
          title="#Invoice ID Number"
          firstIcon={Icon.bars}
          onpesDrawer={() => navigation.openDrawer()}
          // onpesDrawer={() => navigation.navigate(SCREEN.CCRefundTerminal)}
        />

        <View style={styles.containerHeader}>
          <Image source={Icon.tickcheck} style={styles.tick} />
          <View style={styles.secondContainer}>
            <View>
              <Text style={styles.Paid}>Paid</Text>
              <Text style={styles.date}>04/02/24</Text>
            </View>
            <Text style={{...styles.date, marginRight: '4%'}}>Posted</Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <TouchableOpacity
          style={styles.DropDownBtn}
          onPress={() => setActionDrop(actionDrop ? false : true)}>
          <Text style={styles.DropDowntext}>{action ? action : 'Actions'}</Text>
          <Image source={Icon.DropDown} style={styles.DropIcon} />
        </TouchableOpacity>
        {actionDrop && (
          <View style={styles.actionDrop}>
            {ActionDropdown.map(item => (
              <TouchableOpacity onPress={() => handal(item.title)}>
                <Text style={styles.dropText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <Text style={styles.SummaryText}>Summary</Text>
        <View style={styles.CardContainer}>
          <View
            style={{
              ...styles.CardTextView,
              borderBottomColor: COLOR.gray_4,
              borderBottomWidth: 1,
            }}>
            <Text style={styles.title}>Monthly Reccuring Services</Text>
            <Text style={styles.price}>$1,690.00</Text>
          </View>
          <View style={styles.CardTextView}>
            <Text style={styles.title}>Subtotal</Text>
            <Text style={styles.price}>$1,690.00</Text>
          </View>
          <View style={styles.CardTextView}>
            <Text style={styles.title}>Total</Text>
            <Text style={styles.price}>$1,690.00</Text>
          </View>
          <View style={styles.CardTextView}>
            <Text style={styles.title}>Amount Paid</Text>
            <Text
              style={{
                ...styles.price,
                color: COLOR.primary,
                fontWeight: '700',
              }}>
              $1,690.00
            </Text>
          </View>
        </View>
        <Text style={styles.SummaryText}>Customer</Text>
        <View style={{...styles.CardContainer, paddingHorizontal: '5%'}}>
          <Text style={styles.title}>Alexis Mcconnell</Text>
          <Text style={styles.price}>04/01/24</Text>
        </View>
        <Text style={styles.SummaryText}>History</Text>
        <TouchableOpacity
          style={{...styles.CardContainer, marginBottom: '20%'}}
          onPress={() =>
            navigation.navigate(SCREEN.DrawerNavigations, {
              screen: SCREEN.DrawerStack,
              params: {
                screen: SCREEN.PaymentsMethods,
              },
            })
          }>
          <View style={{...commonStyles.verticleView, paddingHorizontal: '1%'}}>
            <View style={{width: '95%'}}>
              <View style={{...styles.CardTextView, height: 20}}>
                <Text style={styles.title}>#Invoice ID Number</Text>
                <Text style={styles.price}>$1,690.00</Text>
              </View>
              <View style={{...styles.CardTextView, height: 20}}>
                <Text style={styles.price}>04/01/24</Text>
                <Text style={styles.price}>Posted</Text>
              </View>
            </View>
            <Image
              tintColor={COLOR.gray_5}
              source={Icon.ArrowNext}
              style={{...styles.DropIcon, right: '4%'}}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.bottomBar}></View>
    </View>
  );
};
export default InvoiceIDNumber;
