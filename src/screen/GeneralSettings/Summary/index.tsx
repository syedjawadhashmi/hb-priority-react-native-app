import {FlatList, Text, View} from 'react-native';

import styles from './style';
import {SummaryGeneral} from '../../../data/DummayData';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';

const Summary = () => {
  return (
    <View style={{marginBottom: '20%'}}>
      <FlatList
      scrollEnabled={false}
        data={SummaryGeneral}
        renderItem={({item}) => (
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={{...styles.title, fontWeight: '400'}}>
                  {item.date}
                </Text>
              </View>
              <Text style={styles.balance}>{item.balance}</Text>
            </View>
            <View style={{...styles.CallsContainer,backgroundColor:COLOR.whites}}>
              <Text style={styles.callsStyle}>Calls (255)</Text>
              <Text style={{...styles.callsStyle, fontWeight: '800'}}>
                $432
              </Text>
            </View>
            <View style={{...styles.CallsContainer,backgroundColor:COLOR.white1}}>
              <Text style={styles.callsStyle}>SMS (36)</Text>
              <Text style={{...styles.callsStyle, fontWeight: '800'}}>
              $100.26
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default Summary;
