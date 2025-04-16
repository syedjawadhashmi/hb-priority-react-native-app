import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import Input from '../../../common/Input';
import {Transactionslist} from '../../../../data/DummayData';
import SCREEN from '../../../../data/ScrName';
import {AllCallProp} from '../../../../data/Types';
import { COLOR } from '../../../../themes/StyleGuides';
import TransactionsList from '../../../core/TransactionsList';

const Transactions = (props: AllCallProp) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View style={styles.mainBtnContainer}>
        <TouchableOpacity style={styles.btnMain}>
          <Text style={styles.btnText}>Add Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnMain}>
          <Text style={styles.btnText}> Add Account Vault</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnMain}
          onPress={() =>
            navigation.navigate(SCREEN.DashBoardDrawer, {
              screen: SCREEN.DrawerStack, 
              params: {
                screen: SCREEN.InvoiceIDNumber, 
              },
            })
          }>
          <Text style={styles.btnText}>Add Quick Invoice</Text>
        </TouchableOpacity>
      </View>
      <Input placeholder={'Search Transactions'} IconStyle={{tintColor:COLOR.gray}} />
      <View>
        <FlatList
        scrollEnabled={false}
          data={Transactionslist}
          renderItem={({item}) => (
            <TransactionsList
              name={item.name}
              price={item.price}
              Id={item.ID}
            />
          )}
        />
      </View>
    </View>
  );
};
export default Transactions;
