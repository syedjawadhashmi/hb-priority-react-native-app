import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';
import LinearGradient from 'react-native-linear-gradient';
import GradientProgressBar from '../../../component/core/GradientProgressBar';
import {COLOR} from '../../../themes/StyleGuides';
import {RankingShowList} from '../../../data/DummayData';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import SCREEN from '../../../data/ScrName';

const LocalListings = (props: any) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="SEO"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView>
        <Text style={styles.TitleText}>Local Listings</Text>
        <View style={styles.RatingCard}>
          <View>
            <View style={styles.DotContiner}>
              <LinearGradient
                colors={['#64C08A', '#00A550', '#00914C']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{...styles.RateDot, backgroundColor: '#00914C'}}
              />
              <Text style={styles.DotTitle}>Good</Text>
            </View>

            <View style={styles.DotContiner}>
              <LinearGradient
                colors={['#FFE7A3', '#FFCA05', '#FAAC18']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{...styles.RateDot, backgroundColor: '#00914C'}}
              />
              <Text style={styles.DotTitle}>Incorrect</Text>
            </View>
            <View style={styles.DotContiner}>
              <LinearGradient
                colors={['#F37E5F', '#EC1C24', '#CF232A']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{...styles.RateDot, backgroundColor: '#00914C'}}
              />
              <Text style={styles.DotTitle}>Doesn’t exist</Text>
            </View>
          </View>
          <View style={{borderLeftWidth: 1, width: '75%'}}>
            <GradientProgressBar
              progress={70}
              colors1={'#00914C'}
              colors2={'#00A550'}
              colors3={'#64C08A'}
              backColor={COLOR.gray_7}
            />

            <GradientProgressBar
              progress={90}
              colors1={'#FAAC18'}
              colors2={'#FFCA05'}
              colors3={'#FFE7A3'}
              backColor={COLOR.gray_7}
            />
            <GradientProgressBar
              progress={50}
              colors1={'#CF232A'}
              colors2={'#EC1C24'}
              colors3={'#F37E5F'}
              backColor={COLOR.gray_7}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.moreBtn}>
          <Text style={{...styles.locarionTitle, color: COLOR.perpal}}>
            More...
          </Text>
        </TouchableOpacity>
        <Text style={{...styles.TitleText, marginBottom: '2%'}}>Rankings</Text>

        <View style={styles.RankingCard}>
          <View style={styles.btnContainer}>
            <Text style={styles.locarionTitle}>Selected Keyword</Text>
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate(SCREEN.LocalList)}  >
              <Text style={styles.btnText}>Target Keyword</Text>
            </TouchableOpacity>
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
                data={RankingShowList}
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
        </View>
        <TouchableOpacity style={styles.moreBtn}>
          <Text style={{...styles.locarionTitle, color: COLOR.perpal}}>
            More...
          </Text>
        </TouchableOpacity>
        <Text style={{...styles.TitleText, marginBottom: '2%'}}>Check-ins</Text>
        <View style={styles.RatingCard}>
          <View>
            <View style={styles.DotContiner}>
              <Text style={styles.DotTitle}>Good</Text>
            </View>

            <View style={styles.DotContiner}>
              <Text style={styles.DotTitle}>Incorrect</Text>
            </View>
            <View style={styles.DotContiner}>
              <Text style={styles.DotTitle}>Doesn’t exist</Text>
            </View>
          </View>
          <View style={{width: '75%'}}>
            <GradientProgressBar
              progress={40}
              colors1={COLOR.perpal}
              colors2={COLOR.perpal}
              colors3={COLOR.perpal}
              backColor={COLOR.gray_7}
              containers2={{borderRadius: 20}}
            />

            <GradientProgressBar
              progress={60}
              colors1={COLOR.perpal}
              colors2={COLOR.perpal}
              colors3={COLOR.perpal}
              backColor={COLOR.gray_7}
              containers2={{borderRadius: 20}}
            />
            <GradientProgressBar
              progress={90}
              colors1={COLOR.perpal}
              colors2={COLOR.perpal}
              colors3={COLOR.perpal}
              backColor={COLOR.gray_7}
              containers2={{borderRadius: 20}}
            />
          </View>
        </View>
        <TouchableOpacity style={{...styles.moreBtn, marginBottom: '20%'}}>
          <Text style={{...styles.locarionTitle, color: COLOR.perpal}}>
            More...
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.bottomBar}></View>
    </View>
  );
};
export default LocalListings;
