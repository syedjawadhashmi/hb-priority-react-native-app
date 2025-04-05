import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLOR } from '../../../../themes/StyleGuides';


const Days7 = () => {
 return (
    <View style={styles.container}>
    <Text style={styles.amount}>$76,259.00</Text>
    <Text style={styles.monthTitle}>So far this month</Text>
    <TouchableOpacity style={styles.versiusContainerBtn}>
      <Text style={styles.versusMonth}>
        <Text style={{color: COLOR.primary}}>-13%versus </Text>last month
      </Text>
    </TouchableOpacity>
    <Text style={styles.paymentLatest}>
        <Text style={{color: COLOR.perpal}}>$68,125.00 </Text> this time last month
      </Text>
  </View>
 )
}
export default Days7;



const styles = StyleSheet.create({
    container: {},
    amount: {
      fontSize: 45,
      fontWeight: '800',
      color: COLOR.perpal,
      alignSelf: 'center',
    },
    monthTitle: {
      fontSize: 20,
      fontWeight: '500',
      color: COLOR.gray_5,
      alignSelf: 'center',
    },
    versusMonth: {fontSize: 16, fontWeight: '700', alignSelf: 'center',color:COLOR.whites},
    versiusContainerBtn: {
      backgroundColor: COLOR.gray_5,
      height: 30,
      alignSelf: 'center',
      justifyContent: 'center',
      borderRadius:12,
      marginTop:"6%",
      marginBottom:"3%",
      paddingHorizontal:"4%"
    },
    paymentLatest:{
      fontSize: 16, fontWeight: '700', alignSelf: 'center',color:COLOR.gray_5,marginBottom:"13%"
  
    }
  });
  
