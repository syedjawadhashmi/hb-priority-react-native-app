import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import styles from './style';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
import Header from '../../../component/common/Header';
import {Icon, Images} from '../../../assest';
import {ListLocalArray} from '../../../data/DummayData';
import LinearGradient from 'react-native-linear-gradient';

const LocalList = (props: any) => {
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

        <View style={{...commonStyles.verticleView, paddingHorizontal: '4%'}}>
          <ImageBackground source={Icon.Card1} style={{width: 100, height: 60}}>
            <Text
              style={{
                fontSize: 18,
                color: COLOR.whites,
                fontWeight: '700',
                alignSelf: 'center',
                marginTop: '2%',
              }}>
              131
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: COLOR.whites,
                fontWeight: '700',
                alignSelf: 'center',
                marginTop: '10%',
              }}>
              Good
            </Text>
          </ImageBackground>
          <ImageBackground source={Icon.Card2} style={{width: 100, height: 60}}>
            <Text
              style={{
                fontSize: 18,
                color: COLOR.whites,
                fontWeight: '700',
                alignSelf: 'center',
                marginTop: '2%',
              }}>
              180
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: COLOR.whites,
                fontWeight: '700',
                alignSelf: 'center',
                marginTop: '10%',
              }}>
              Incorrect
            </Text>
          </ImageBackground>
          <ImageBackground source={Icon.Card3} style={{width: 100, height: 60}}>
            <Text
              style={{
                fontSize: 18,
                color: COLOR.whites,
                fontWeight: '700',
                alignSelf: 'center',
                marginTop: '2%',
              }}>
              97
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: COLOR.whites,
                fontWeight: '700',
                alignSelf: 'center',
                marginTop: '10%',
              }}>
              Doesn’t exist
            </Text>
          </ImageBackground>
        </View>

        <View>
          <View style={styles.TabalStatus}>
            <View style={styles.tabalStatusBox}>
              <Text
                style={{
                  ...styles.TabalText,
                  color: COLOR.perpal,
                  fontWeight: '700',
                }}>
                Site/Directory
              </Text>
            </View>
            <View style={styles.tabalStatusBox}>
              <Text
                style={{
                  ...styles.TabalText,
                  color: COLOR.perpal,
                  fontWeight: '700',
                }}>
                Name
              </Text>
            </View>
            <View style={styles.tabalStatusBox}>
              <Text
                style={{
                  ...styles.TabalText,
                  color: COLOR.perpal,
                  fontWeight: '700',
                }}>
                Address
              </Text>
            </View>
            <View style={styles.tabalStatusBox}>
              <Text
                style={{
                  ...styles.TabalText,
                  color: COLOR.perpal,
                  fontWeight: '700',
                }}>
                Zip/Postcode
              </Text>
            </View>
            <View style={styles.tabalStatusBox}>
              <Text
                style={{
                  ...styles.TabalText,
                  color: COLOR.perpal,
                  fontWeight: '700',
                }}>
                Phone
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginBottom:"20%"}} >
          {ListLocalArray.map((item, index) => (
            <View style={{...commonStyles.verticleView}}>
              <View
                style={{
                  ...styles.TabalListContainer,
                  ...commonStyles.verticleView,
                  paddingHorizontal: '2%',
                }}>
                <LinearGradient
                  colors={
                    index % 2
                      ? ['#FFE7A3', '#FFCA05', '#FAAC18']
                      : index % 3
                      ? ['#64C08A', '#00A550', '#00914C']
                      : ['#F37E5F', '#EC1C24', '#CF232A']
                  }
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={{...styles.RateDot, backgroundColor: '#00914C'}}
                />
                <Image
                  source={item.icon}
                  style={{width: 15, height: 15, resizeMode: 'center'}}
                />
                <Text
                  style={{
                    ...styles.ListText,
                    color: COLOR.gray_5,
                    marginLeft: '15%',
                  }}>
                  {item.Directory}
                </Text>
              </View>
              <View
                style={{
                  ...styles.TabalListContainer,
                }}>
                <Text
                  style={{
                    ...styles.ListText,
                    color: COLOR.gray_5,
                    alignSelf: 'center',
                  }}>
                  {item.Name}
                </Text>
              </View>
              <View
                style={{
                  ...styles.TabalListContainer,
                }}>
                <Text
                  style={{
                    ...styles.ListText,
                    color: COLOR.gray_5,
                    alignSelf: 'center',
                  }}>
                  {item.Address}
                </Text>
              </View>
              <View
                style={{
                  ...styles.TabalListContainer,
                }}>
                <Text
                  style={{
                    ...styles.ListText,
                    color: COLOR.gray_5,
                    alignSelf: 'center',
                  }}>
                  {item.ZipCode}
                </Text>
              </View>
              <View
                style={{
                  ...styles.TabalListContainer,
                }}>
                <Text
                  style={{
                    ...styles.ListText,
                    color: COLOR.gray_5,
                    alignSelf: 'center',
                  }}>
                  {item.Phone}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.bottomBar}></View>

    </View>
  );
};
export default LocalList;
