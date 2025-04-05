import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';
import Buttons from '../../../component/common/Buttons';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
import ProgressBars from '../../../component/core/ProgressBars';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import SEoTopRanking from '../../../component/core/SEoTopRanking';
import SCREEN from '../../../data/ScrName';

const date = [
  {
    date: '10th Nov 2023',
  },
  {
    date: '10th Dec 2023',
  },
  {
    date: '10th Jan 2024',
  },
  {
    date: '10th Feb 2024',
  },
  {
    date: '10th Mar 2024',
  },
  {
    date: '10th Apr 2024',
  },
];

const RankingShow = [
  11, 13, 13, 1, 3, 9, 7, 7, 6, 1, 1, 10, 1, 1, 2, 2, 8, 2, 1, 1, 3, 6, 10, 11,
  4,
];
const PerformanceOverview = (props: any) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="SEO"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView>
        <View style={{backgroundColor: COLOR.whites}}>
          <Buttons
            title={'Performance Overview'}
            container={styles.btnStyle}
            onpress={() => navigation.navigate(SCREEN.LocalListings)}
          />

          <View>
            <View style={styles.keywordContainer}>
              <Text style={styles.keyBoardTitle}>All Keywords Avg.</Text>
              <View style={{...commonStyles.verticleView, width: '44%'}}>
                <TouchableOpacity
                  style={{
                    ...styles.keywordNumBtn,
                    backgroundColor: COLOR.perpal,
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}>
                  <Text style={styles.keywordNum}>11.6</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...styles.keywordNumBtn,
                    backgroundColor: COLOR.gray_7,
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                    ...commonStyles.verticleView,
                    paddingHorizontal: '7%',
                  }}>
                  <Text style={{...styles.keywordNum, color: COLOR.gray_5}}>
                    11.5
                  </Text>
                  <Image source={Icon.ArrowTop2} style={styles.ArrowIcon} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.keywordContainer}>
              <Text style={styles.keyBoardTitle}>Total Keywords</Text>
              <TouchableOpacity
                style={{
                  ...styles.keywordNumBtn,
                  backgroundColor: COLOR.perpal,
                  borderRadius: 10,
                }}>
                <Text style={{...styles.keywordNum, color: COLOR.whites}}>
                  5
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.keywordContainer}>
              <View style={{...commonStyles.verticleView}}>
                <Image source={Icon.ArrowTop2} style={styles.ArrowIcon} />
                <Text style={{...styles.keyBoardTitle, marginLeft: '4%'}}>
                  Keywords Up
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  ...styles.keywordNumBtn,
                  backgroundColor: COLOR.perpal,
                  borderRadius: 10,
                }}>
                <Text style={{...styles.keywordNum, color: COLOR.whites}}>
                  4
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.keywordContainer}>
              <View style={{...commonStyles.verticleView}}>
                <Image source={Icon.ArrowBottom3} style={styles.ArrowIcon} />
                <Text style={{...styles.keyBoardTitle, marginLeft: '4%'}}>
                  Keywords Up
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  ...styles.keywordNumBtn,
                  backgroundColor: COLOR.perpal,
                  borderRadius: 10,
                }}>
                <Text style={{...styles.keywordNum, color: COLOR.whites}}>
                  1
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.ResultTitle}>
            Results for <Text style={{color: COLOR.perpal}}>‘roof repair’</Text>
          </Text>

          <Image source={Icon.StepsLine} style={styles.StepsLine} />
          <View style={styles.DateListContainer}>
            {date.map(item => (
              <View>
                <Text style={styles.dateList}>{item.date}</Text>
              </View>
            ))}
          </View>

          <View style={styles.RangCard}>
            <View>
              <Text style={styles.RangText}>11.6</Text>
              <Text style={{...styles.RangText, fontSize: 12}}>
                Average Map Rank
              </Text>
            </View>
          </View>
          <View
            style={{
              ...styles.RangCard,
              borderColor: COLOR.gray_5,
              backgroundColor: COLOR.whites,
              borderWidth: 1,
            }}>
            <View>
              <View
                style={{...commonStyles.horizontalView, alignSelf: 'center'}}>
                <Text style={{...styles.RangText, color: COLOR.gray_5}}>2</Text>
                <Image source={Icon.ArrowBottom3} style={styles.ArrowIcon} />
              </View>
              <Text
                style={{...styles.RangText, fontSize: 12, color: COLOR.gray_5}}>
                Change
              </Text>
            </View>
          </View>
          <View>
            <ProgressBars
              title={'High-ranking Grid Points'}
              rating={0.2}
              colors={'#00914C'}
              container={{marginTop: '5%', marginBottom: '5%'}}
            />
          </View>
        </View>
        <View>
          <ProgressBars
            title={'Medium-ranking Grid Points'}
            rating={0.7}
            colors={'#FAAC18'}
            container={{marginTop: '2%'}}
          />
        </View>
        <View>
          <ProgressBars
            title={'Low-ranking Grid Points'}
            rating={0.9}
            colors={'#CF232A'}
            container={{marginTop: '2%', marginBottom: '5%'}}
          />
        </View>
        <View>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}></MapView>
          <View
            style={{
              position: 'absolute',
              alignSelf: 'center',
              marginTop: '5%',
            }}>
            <FlatList
              numColumns={5}
              data={RankingShow}
              renderItem={item => (
                <TouchableOpacity
                  style={{
                    ...styles.RangingShow,
                    backgroundColor:
                      item.item < 5
                        ? '#00914C'
                        : item.item < 10
                        ? '#FAAC18'
                        : '#CF232A',
                  }}>
                  <Text style={styles.RangingShowText}>{item.item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <Text style={styles.ResultTitle}>
          Overall Top Ranking Competitors{'\n'}for
          <Text style={{color: COLOR.perpal}}>‘roof repair’</Text>
        </Text>
        <Text
          style={{...styles.keyBoardTitle, marginLeft: '5%', marginTop: '2%'}}>
          Top-performing search results competitors, based on the{'\n'} Grid
          Points for this keyword.
        </Text>
        <View>
          <SEoTopRanking />
        </View>
      </ScrollView>
      <View style={styles.bottomBar}></View>

    </View>
  );
};
export default PerformanceOverview;
