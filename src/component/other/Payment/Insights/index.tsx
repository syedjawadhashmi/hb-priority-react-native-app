import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {useState} from 'react';
import {COLOR, } from '../../../../themes/StyleGuides';
import Month from '../../../core/AmountProcessed/Month';
import Days7 from '../../../core/AmountProcessed/Days7';
import Today from '../../../core/AmountProcessed/Today';
import AmountCollected from '../../../core/AmountCollected';

const Insights = () => {
  const [select, setSelected] = useState(0);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.AmmountContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}> Amount Processed</Text>
          </View>

          <View>
            <View style={styles.slectedContainer}>
              <TouchableOpacity
                onPress={() => setSelected(0)}
                style={{
                  ...styles.selctedBtn,
                  backgroundColor: select == 0 ? COLOR.whites : COLOR.gray_7,
                }}>
                <Text
                  style={{
                    ...styles.selectText,
                    color: select == 0 ? COLOR.perpal : COLOR.gray_5,
                  }}>
                  Month
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.selctedBtn,
                  backgroundColor: select == 1 ? COLOR.whites : COLOR.gray_7,
                }}
                onPress={() => setSelected(1)}>
                <Text
                  style={{
                    ...styles.selectText,
                    color: select == 1 ? COLOR.perpal : COLOR.gray_5,
                  }}>
                  7 Days
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.selctedBtn,
                  backgroundColor: select == 2 ? COLOR.whites : COLOR.gray_7,
                }}
                onPress={() => setSelected(2)}>
                <Text
                  style={{
                    ...styles.selectText,
                    color: select == 2 ? COLOR.perpal : COLOR.gray_5,
                  }}>
                  Today
                </Text>
              </TouchableOpacity>
            </View>
            {select == 0 ? <Month /> : select == 1 ? <Days7 /> : <Today />}
          </View>
        </View>
        <View style={styles.AmmountContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}> Amount Collected</Text>
            </View>
            <AmountCollected/>
            <View  style={styles.CreditCOntainer}  >
              <View style={styles.CreditDot}/>
              <Text style={styles.CreditColor}>Credit Card</Text>
            </View>
          </View>
          <View style={styles.AmmountContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Estimated Deposits</Text>
            </View>
            <AmountCollected/>
            <View  style={styles.CreditCOntainer} >
              <View style={styles.CreditDot} />
              <Text style={styles.CreditColor}>Credit Card</Text>
            </View>
          </View>  
      </ScrollView>
    </View>
  );
};
export default Insights;
