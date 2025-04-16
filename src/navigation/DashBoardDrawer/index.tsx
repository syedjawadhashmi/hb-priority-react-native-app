import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  DashBoardDrawerList,
  DrawerCRMList,
  DrawerDataList,
} from '../../data/DummayData';
import {COLOR, commonStyles} from '../../themes/StyleGuides';
import SCREEN from '../../data/ScrName';
import {styles} from './style';
import * as screens from '../../screen';
import {Icon, Images} from '../../assest';
import DrawerStack from '../DrawerStack';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
  const {navigation} = props;
  const [checkedItems, setCheckedItems] = useState<string[]>([]); // Changed type to string[] for better handling

  const handleCheckToggle = (itemIndex: string) => {
    setCheckedItems(prevState => {
      if (prevState.includes(itemIndex)) {
        return prevState.filter(index => index !== itemIndex);
      } else {
        return [...prevState, itemIndex];
      }
    });
  };

  return (
    <View {...props}>
      <View style={styles.container}>
        <View style={styles.FilterContainer}>
          <View style={{...commonStyles.horizontalView}}></View>
          <TouchableOpacity onPress={() => navigation.closeDrawer()}>
            <Image source={Icon.close} style={styles.FiltersIcon} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            ...commonStyles.verticleView,
            paddingHorizontal: '7%',
            marginBottom: '10%',
          }}>
          <Image source={Images.ProfileDashBoard} style={styles.profileStyle} />
          <View>
            <Text style={styles.Name}>Owner Name</Text>
            <Text style={styles.companyName}>Company Name</Text>
          </View>
        </View>
        <ScrollView>
          {DashBoardDrawerList.map((item, index) => (
            <View key={index}>
              <TouchableOpacity style={styles.titleContainer} onPress={()=>{index==6&&navigation.navigate(SCREEN.Login)}}  >
                <Image tintColor={COLOR.perpal}  source={item.Icon} style={styles.ItemICon} />

                <Text style={styles.titleStyle}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          ))}
          <View style={{height: 140}} />
        </ScrollView>
      </View>
    </View>
  );
};

const DashBoardDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 200,
          height: '86%',
          marginTop: '8%',
          borderTopRightRadius: 30,
          backgroundColor: COLOR.whites,
        },
        overlayColor: 'transparent',
      }}>
              <Drawer.Screen name={SCREEN.DrawerStack} component={DrawerStack} />
      {/* <Drawer.Screen name="Dashboard" component={screens.Dashboard} /> */}
    </Drawer.Navigator>
  );
};

export default DashBoardDrawer;
