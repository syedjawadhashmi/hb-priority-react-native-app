import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './style';
import {OrganicCampaignsList, } from '../../../../data/DummayData';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';

const OrganicCampaigns = () => {
  return (
    <View style={styles.container}>
      <View style={{marginTop: '5%'}}>
        <FlatList
        scrollEnabled={false}
          nestedScrollEnabled={true}
          data={OrganicCampaignsList}
          renderItem={({item}) => (
            <View
              style={{
                backgroundColor: COLOR.gray_7,
                borderRadius: 10,
                overflow: 'hidden',
                width: '90%',
                alignSelf: 'center',
                marginBottom: '5%',
              }}>
              <View style={styles.Header}>
                <Text style={{...styles.title, width: '25%'}}>Name</Text>
                <Text style={{...styles.title, width: '14%'}}>Posts</Text>
                <Text style={{...styles.title, width: '14%'}}>Likes</Text>
                <Text style={{...styles.title, width: '18%'}}>Comments</Text>
                <Text style={{...styles.title, width: '14%'}}>Shares</Text>
                <Text style={{...styles.title, width: '14%'}}>Messages</Text>
              </View>
              <View
                style={{
                  ...styles.Header,
                  backgroundColor: COLOR.gray_7,
                  marginVertical: '3%',
                }}>
                <View style={{width: '23%', ...commonStyles.horizontalView}}>
                  <Image source={item.images} style={styles.Imges} />
                  <Text
                    style={styles.name}>
                    {item.name}
                  </Text>
                </View>
                <Text
                  style={{
                    ...styles.title,
                    width: '10%',
                    color: COLOR.gray_5,
                    textAlign: 'center',
                  }}>
                  {item.Impressions}
                </Text>
                <Text
                  style={{
                    ...styles.title,
                    width: '18%',
                    color: COLOR.gray_5,
                    textAlign: 'center',
                  }}>
                  {item.Clicks}
                </Text>
                <Text
                  style={{
                    ...styles.title,
                    width: '16%',
                    color: COLOR.gray_5,
                    textAlign: 'center',
                  }}>
                  {item.Conversions}
                </Text>
                <Text
                  style={{
                    ...styles.title,
                    width: '18%',
                    color: COLOR.gray_5,
                    textAlign: 'center',
                  }}>
                  {item.Conversions}
                </Text>
                <Text
                  style={{
                    ...styles.title,
                    width: '18%',
                    color: COLOR.gray_5,
                    textAlign: 'center',
                  }}>
                  {item.Conversions}
                </Text>
                <Text
                  style={{
                    ...styles.title,
                    width: '18%',
                    color: COLOR.gray_5,
                    textAlign: 'center',
                  }}>
                  {item.Messages}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};
export default OrganicCampaigns;
