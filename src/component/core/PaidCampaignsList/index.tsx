import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLOR, commonStyles, normalize} from '../../../themes/StyleGuides';
import {PaidCampaignsListProps} from '../../../data/Types';
import {useState} from 'react';
import LineChartGraph from '../LineChartGraph';

const PaidCampaignsList = (props: PaidCampaignsListProps) => {
  const {data, title_1, title_2, title_3, title_4} = props;
  const [graph, setGraph] = useState(null);

  return (
    <View style={{marginTop: '5%'}}>
      <FlatList
      scrollEnabled={false}
        nestedScrollEnabled={true}
        data={data}
        renderItem={({item, index}) => (
          <View
            style={styles.container}>
            <View
              style={{
                ...styles.Header,
                backgroundColor:
                  graph == index ? COLOR.primary : COLOR.perpal_3,
              }}>
              <Text style={{...styles.title, width: '32%'}}>{title_1}</Text>
              <Text style={{...styles.title, width: '22%'}}>{title_2}</Text>
              <Text style={{...styles.title, width: '18%'}}>
                {title_3 ? title_3 : 'Texts \nReplied'}
              </Text>
              <Text style={{...styles.title, width: '30%'}}>{title_4}</Text>
            </View>
            <View
              style={{
                ...styles.Header,
                backgroundColor: COLOR.gray_7,
                marginVertical: '3%',
              }}>
              <View style={{width: '32%', ...commonStyles.horizontalView}}>
                <Image source={item.images} style={styles.Imges} />
                <Text
                  style={styles.name}>
                  {item.name}
                </Text>
              </View>
              <Text
                style={{
                  ...styles.title,
                  width: '18%',
                  color: COLOR.gray_5,
                  textAlign: 'center',
                }}>
                {item.Impressions}
              </Text>
              <Text
                style={{
                  ...styles.title,
                  width: '16%',
                  color: COLOR.gray_5,
                  textAlign: 'center',
                }}>
                {item.Clicks}
              </Text>
              <Text
                style={{
                  ...styles.title,
                  width: '25%',
                  color: COLOR.gray_5,
                  textAlign: 'center',
                }}>
                {item.Conversions}
              </Text>
              <TouchableOpacity
                onPress={() => setGraph(graph?null:index)}
                style={{
                  paddingHorizontal: '2%',
                  backgroundColor: COLOR.perpal_3,
                  borderRadius: 10,
                  right: 5,
                }}>
                <Text
                  style={{...styles.title, color: COLOR.whites, fontSize: normalize(7)}}>
                  Details
                </Text>
              </TouchableOpacity>
            </View>

            {graph == index && (
              <View>
                <View style={styles.GraphContainer}>
                  <Text style={{...styles.GraphTitle, marginTop: '3%'}}>
                    Texts Sent
                  </Text>
                  <Text style={{...styles.GraphTitle, color: COLOR.perpal_3}}>
                    5,000
                  </Text>
                  <View style={{marginBottom: '5%'}}>
                    <LineChartGraph />
                  </View>
                </View>
                <View
                  style={styles.costPerContainer}>
                  <Text style={styles.titleSpents}>Client Spends</Text>
                  <Text style={styles.titleSpents}>$250.00</Text>
                </View>
                <View style={styles.GraphContainer}>
                  <Text style={{...styles.GraphTitle, marginTop: '3%'}}>
                  Texts Replied
                  </Text>
                  <Text style={{...styles.GraphTitle, color: COLOR.perpal_3}}>
                  536
                  </Text>
                  <View style={{marginBottom: '5%'}}>
                    <LineChartGraph />
                  </View>
                </View>
                <View
                  style={styles.costPerContainer}>
                  <Text style={styles.titleSpents}>Average Cost Per Reply</Text>
                  <Text style={styles.titleSpents}>$$0.47.00</Text>
                </View>
                <View style={styles.GraphContainer}>
                  <Text style={{...styles.GraphTitle, marginTop: '3%'}}>
                  Leads
                  </Text>
                  <Text style={{...styles.GraphTitle, color: COLOR.perpal_3}}>
                  317
                  </Text>
                  <View style={{marginBottom: '5%'}}>
                    <LineChartGraph />
                  </View>
                </View>
                <View
                  style={styles.costPerContainer}>
                  <Text style={styles.titleSpents}>Cost Per Booked Appointment</Text>
                  <Text style={styles.titleSpents}>$0.79</Text>
                </View>
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
};
export default PaidCampaignsList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.gray_7,
    borderRadius: 10,
    overflow: 'hidden',
    width: '90%',
    alignSelf: 'center',
    marginBottom: '5%',
  },
  Header: {
    width: '100%',
    height: 30,
    backgroundColor: COLOR.perpal_3,
    ...commonStyles.horizontalView,
    paddingHorizontal: '2%',
  },
  costPerContainer:{
    ...commonStyles.verticleView,
    width: '90%',
    height: 30,
    borderRadius: 10,
    backgroundColor: COLOR.whites,
    alignSelf: 'center',
    paddingHorizontal: '4%',
    marginVertical: '4%',
  },
  name:{
    fontSize: normalize(12),
    fontWeight: '800',
    color: COLOR.gray_5,
    marginLeft:"5%"
  },
  title: {fontSize: normalize(9), fontWeight: '700', color: COLOR.whites},
  Imges: {width: 18, height: 18, resizeMode: 'contain'},
  GraphTitle: {
    fontWeight: '800',
    color: COLOR.gray_5,
    fontSize: normalize(14),
    alignSelf: 'flex-end',
    marginRight: '5%',
  },
  GraphContainer: {
    width: '91%',
    backgroundColor: COLOR.whites,
    borderRadius: 10,
    alignSelf: 'center',
  },
  titleSpents: {fontWeight: '800', color: COLOR.gray_5, fontSize: normalize(14)},
});
