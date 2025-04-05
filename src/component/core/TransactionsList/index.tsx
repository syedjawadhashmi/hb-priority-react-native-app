import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TransSactionListProp} from '../../../data/Types';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';

const TransactionsList = (prop: TransSactionListProp) => {
  const {name, price, Id, onpress} = prop;
  return (
    <View style={styles.container}>
      <View style={styles.containerMain}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>

      <View style={styles.containerMain}>
        <Text style={styles.Id}>{Id}</Text>
        <Text style={styles.paid}>Paid</Text>
      </View>

      <View style={styles.IconContainer}>
        <Text style={styles.Views}>View...</Text>

      </View>
    </View>
  );
};
export default TransactionsList;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.gray_4,
    paddingVertical: '3%',
  },
  containerMain: {
    ...commonStyles.verticleView,
    paddingHorizontal: '7%',
    marginTop: '0.4%',
  },
  name: {fontSize: 19, fontWeight: '900', color: COLOR.gray_5},
  price: {fontSize: 15, fontWeight: '800', color: COLOR.perpal},
  Id: {fontSize: 14, fontWeight: '400', color: COLOR.gray_5},
  paid: {fontSize: 14, fontWeight: '700', color: COLOR.primary},
  View: {
    fontSize: 12,
    fontWeight: '700',
    color: COLOR.perpal,
    alignSelf: 'flex-end',
    marginRight: '7%',
  },
  IconContainer: {
    ...commonStyles.verticleView,
    alignSelf: 'flex-end',
    marginRight: '7%',
  },
  iconStyle: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: COLOR.perpal,
  },
  icon1Style: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    tintColor: COLOR.perpal,
  },
  icon2Style: {
    width: 11,
    height: 11,
    resizeMode: 'contain',
    tintColor: COLOR.perpal,
  },
  Views: {fontSize: 12, fontWeight: '800', color: COLOR.perpal_3},
});
