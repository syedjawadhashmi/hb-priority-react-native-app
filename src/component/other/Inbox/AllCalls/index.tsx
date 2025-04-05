import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import { AllCallProp } from '../../../../data/Types';
import SCREEN from '../../../../data/ScrName';
import { CallList } from '../../../../data/DummayData';
import { COLOR, commonStyles } from '../../../../themes/StyleGuides';
import { Icon } from '../../../../assest';

const AllCalls = (prop: AllCallProp) => {
  const {navigation} = prop;
  return (
    <View style={styles.container}>
      <ScrollView>
        {CallList.map((item: any,index:any) => (
          <View key={index} >
            <Text style={styles.date}>{item.date}</Text>
            {item.data.map((e: any, index: any) => (
              <TouchableOpacity
                key={index}
                style={styles.ListContainer}
                onPress={() => navigation.navigate(SCREEN.CallScreen)}>
                <View style={styles.iconContainer}>
                  <Image style={styles.userLogo} source={Icon.user} />
                </View>
                <View style={{flex: 1}}>
                  <View style={styles.nameContainer}>
                    <Text style={styles.nameStyle}>{e.name}</Text>
                    <Text style={styles.time}>{e.time}</Text>
                  </View>
                  <Text style={styles.numberStyle}>{e.number}</Text>
                  <View style={{...commonStyles.horizontalView}}>
                    <Image
                      tintColor={
                        e.status == 'Missed Call'
                          ? COLOR.red
                          : e.status == 'Outgoing Call'
                          ? COLOR.primary
                          : COLOR.SkyBlue
                      }
                      style={styles.MissedCall}
                      source={Icon.MissedCall}
                    />
                    <Text
                      style={{
                        ...styles.status,
                        color:
                          e.status == 'Missed Call'
                            ? COLOR.red
                            : e.status == 'Outgoing Call'
                            ? COLOR.primary
                            : COLOR.SkyBlue,
                      }}>
                      {e.status}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default AllCalls;
