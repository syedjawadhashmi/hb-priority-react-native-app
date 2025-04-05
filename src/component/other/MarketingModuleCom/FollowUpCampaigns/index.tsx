import {FlatList, Image, Text, View} from 'react-native';

import styles from './style';
import {
  FollowUpCampaignsList,
} from '../../../../data/DummayData';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';

const FollowUpCampaigns = () => {
  return (
    <View style={styles.container}>
      <View style={{marginTop: '5%'}}>
        <FlatList
        scrollEnabled={false}
          nestedScrollEnabled={true}
          data={FollowUpCampaignsList}
          renderItem={({item}) => (
            <View style={styles.ListContaner}>
              <View style={styles.Header}>
                <Text style={{...styles.title, width: '25%'}}>Name</Text>
                <Text style={{...styles.title}}>Total{'\n'}Enrolled</Text>
                <Text style={{...styles.title}}>Active</Text>
                <Text style={{...styles.title}}>Completed</Text>
                <Text style={{...styles.title}}>Replied</Text>
                <Text style={{...styles.title}}>Reply %</Text>
                <Text style={{...styles.title}}>Status</Text>
              </View>
              <View
                style={{
                  ...styles.Header,
                  backgroundColor: COLOR.gray_7,
                  marginVertical: '3%',
                }}>
                <View style={{width: '22%'}}>
                  <Text
                    style={styles.name}>
                    {item.name}
                  </Text>
                </View>
                <Text
                  style={{
                    ...styles.title,
                    color: COLOR.gray_5,
                    textAlign: 'center',
                  }}>
                  {item.Impressions}
                </Text>
                <Text
                  style={{
                    ...styles.title,
                    color: COLOR.gray_5,
                    textAlign: 'center',
                  }}>
                  {item.Clicks}
                </Text>
                <Text
                  style={{
                    ...styles.title,
                    color: COLOR.gray_5,
                    textAlign: 'center',
                  }}>
                  {item.Conversions}
                </Text>
                <Text
                  style={{
                    ...styles.title,
                    color: COLOR.gray_5,
                    textAlign: 'center',
                  }}>
                  {item.Conversions}
                </Text>
                <Text
                  style={{
                    ...styles.title,
                    color: COLOR.gray_5,
                    textAlign: 'center',
                  }}>
                  {item.Conversions}
                </Text>
                <Text
                  style={{
                    ...styles.title,
                    color: COLOR.perpal_3,
                    textAlign: 'center',
                    fontWeight: '900',
                  }}>
                  {item.status}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};
export default FollowUpCampaigns;
