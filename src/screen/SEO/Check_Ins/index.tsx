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
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
import Input from '../../../component/common/Input';
import {SEOCheck_Ins} from '../../../data/DummayData';
import SCREEN from '../../../data/ScrName';

const Check_Ins = (props: any) => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="SEO"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView>
        <View style={styles.TitileContainer}>
          <Text style={styles.TitleText}>Check-Ins</Text>
          <TouchableOpacity
            style={{...styles.firstbtn, backgroundColor: COLOR.perpal}}>
            <Text style={{...styles.btnText, color: COLOR.whites}}>
              Create Check-In
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.TitileContainer}>
          <TouchableOpacity style={styles.getPicker}>
            <View style={{...commonStyles.verticleView}}>
              <Image source={Icon.CalenderSecond} style={styles.CalendarIcon} />
              <Text style={styles.DropDate}>
                January 16, 2024 - February 9, 2024
              </Text>
            </View>
            <Image source={Icon.dropDown2} style={styles.DropIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.firstbtn, backgroundColor: COLOR.primary}}>
            <Text style={{...styles.btnText, color: COLOR.gray_5}}>
              Create Check-In
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.TitileContainer}>
          <View style={{...commonStyles.verticleView}}>
            <Text style={styles.Lable}>Show</Text>
            <TouchableOpacity style={styles.ShowDrop}>
              <Text
                style={{
                  ...styles.btnText,
                  color: COLOR.gray_5,
                  fontWeight: '400',
                }}>
                10
              </Text>
              <Image source={Icon.dropDown2} style={styles.ShowDropIcon} />
            </TouchableOpacity>
            <Text style={styles.Lable}>Entries</Text>
          </View>
          <Input placeholder={'Search '} style={styles.TextInput} IconStyle={{tintColor:COLOR.gray}} />
        </View>
        <View>
          <View style={styles.TabalStatus}>
            <View style={styles.tabalStatusBox}>
              <Text style={{...styles.TabalText, color: COLOR.whites}}>
                Employee
              </Text>
            </View>
            <View style={styles.tabalStatusBox}>
              <Text style={{...styles.TabalText, color: COLOR.whites}}>
                Total Rating
              </Text>
            </View>
            <View style={styles.tabalStatusBox}>
              <Text style={{...styles.TabalText, color: COLOR.whites}}>
                Average
              </Text>
            </View>
            <View style={styles.tabalStatusBox}>
              <Text style={{...styles.TabalText, color: COLOR.whites}}>
                Requested
              </Text>
            </View>
            <View style={styles.tabalStatusBox}>
              <Text style={{...styles.TabalText, color: COLOR.whites}}>
                Completed
              </Text>
            </View>
          </View>
          <View>
            {SEOCheck_Ins.map((item, index) => (
              <View style={{...commonStyles.verticleView}} key={index}  >
                <View
                  style={{
                    ...styles.TabalListContainer,
                    backgroundColor: index % 2 ? COLOR.whites : COLOR.white1,
                  }}>
                  <Text
                    style={{
                      ...styles.TabalText,
                      color: COLOR.gray_5,
                      marginLeft: '15%',
                    }}>
                    {item.Employee}
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.TabalListContainer,
                    backgroundColor: index % 2 ? COLOR.whites : COLOR.white1,
                  }}>
                  <Text
                    style={{
                      ...styles.TabalText,
                      color: COLOR.gray_5,
                      marginLeft: '15%',
                    }}>
                    {item.TotalRating}
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.TabalListContainer,
                    backgroundColor: index % 2 ? COLOR.whites : COLOR.white1,
                  }}>
                  <Text
                    style={{
                      ...styles.TabalText,
                      color: COLOR.gray_5,
                      marginLeft: '15%',
                    }}>
                    {item.Average}
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.TabalListContainer,
                    backgroundColor: index % 2 ? COLOR.whites : COLOR.white1,
                  }}>
                  <Text
                    style={{
                      ...styles.TabalText,
                      color: COLOR.gray_5,
                      marginLeft: '15%',
                    }}>
                    {item.Requested}
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.TabalListContainer,
                    backgroundColor: index % 2 ? COLOR.whites : COLOR.white1,
                  }}>
                  <Text
                    style={{
                      ...styles.TabalText,
                      color: COLOR.gray_5,
                      marginLeft: '15%',
                    }}>
                    {item.Completed}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          <View
            style={styles.btnContainer}>
            <TouchableOpacity
              style={{
                ...styles.firstbtn,
                backgroundColor: COLOR.perpal_3,
                ...commonStyles.verticleView,
                marginRight: '2%',
              }}>
              <Image
                tintColor={COLOR.whites}
                source={Icon.Share}
                style={{...styles.DropIcon, marginRight: 5}}
              />
              <Text style={{...styles.btnText, color: COLOR.whites}}>
                Share
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.firstbtn,
                backgroundColor: COLOR.perpal_3,
                ...commonStyles.verticleView,
                marginRight: '2%',
              }}>
              <Image
                tintColor={COLOR.whites}
                source={Icon.Save}
                style={{...styles.DropIcon, marginRight: 5}}
              />

              <Text style={{...styles.btnText, color: COLOR.whites}}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.firstbtn,
                backgroundColor: COLOR.perpal_3,
                ...commonStyles.verticleView,
                marginRight: '2%',
              }}>
              <Image
                tintColor={COLOR.whites}
                source={Icon.Schedule}
                style={{...styles.DropIcon, marginRight: 5}}
              />

              <Text style={{...styles.btnText, color: COLOR.whites}}>
                Schedule
              </Text>
            </TouchableOpacity>
            <TouchableOpacity

            onPress={()=>navigation.navigate(SCREEN.Rankings)}
              style={{
                ...styles.firstbtn,
                backgroundColor: COLOR.perpal_3,
                ...commonStyles.verticleView,
              }}>
              <Image
                tintColor={COLOR.whites}
                source={Icon.Download2}
                style={{...styles.DropIcon, marginRight: 5}}
              />

              <Text style={{...styles.btnText, color: COLOR.whites}}>
                Download
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}></View>
    </View>
  );
};
export default Check_Ins;
