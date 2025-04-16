import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {styles} from './style';
import {DrawerDataList, MainDrawer} from '../../data/DummayData';
import {COLOR, commonStyles} from '../../themes/StyleGuides';
import BottomBarNavigation from '../InboxBottomBar';
import SCREEN from '../../data/ScrName';
import DrawerStack from '../DrawerStack';
import {Icon} from '../../assest';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
  const {navigation} = props;
  const handalNav=(index:any)=>{
index==3&&navigation.navigate(SCREEN.Login)


  }

  return (
    <View {...props}>
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => navigation.closeDrawer()}>
          <Image style={styles.close} source={Icon.crose} />
        </TouchableOpacity>
      <ScrollView>

      <View>
      
        <View style={styles.NamesContainer}>
          <Text style={styles.name}>Owner Name</Text>
          <Text style={styles.CompanyName}>Company Name</Text>
        </View>
      </View>

      <View>
        <TextInput
          placeholder="All"
          style={styles.textinput}
          placeholderTextColor={COLOR.gray}
        />

          {DrawerDataList.map((item, index) => (
            <View key={index}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>{item.title}</Text>
              </View>
              {item.data.map((items: any, index) => (
                <TouchableOpacity style={styles.listContainer} key={index}>
                  <View style={{...commonStyles.horizontalView}}>
                    {item.title == 'DIRECT MESSAGES' && (
                      <Image source={items.images} style={styles.IconStyle} />
                    )}
                    <Text
                      style={{
                        ...styles.nameStyle,
                        fontWeight: items.name == 'GROUPS' ? '700' : '400',
                      }}>
                      {items.name}
                    </Text>
                  </View>
                  <Text style={styles.nameStyle}>{items.notificaion}</Text>
                </TouchableOpacity>
              ))}
              <View style={styles.line} />
            </View>
          ))}

          {MainDrawer.map((items,index) => (
            <TouchableOpacity style={styles.LastButton} onPress={()=>handalNav(index)}  >
              <Image source={items.images} style={styles.IconStyle} />
              <Text style={{...styles.nameStyle, fontWeight: '700'}}>
                {items.name}
              </Text>
            </TouchableOpacity>
          ))}

          <View style={{height: 380}} />
      </View>
      </ScrollView>

    </View>
  );
};

const DrawerNavigations = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props:any) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 240,
          height: '95%',
          marginTop: '14%',
          borderTopRightRadius: 30,
          backgroundColor: COLOR.white1,
        },
        overlayColor: 'transparent',
      }}>
      <Drawer.Screen
        name={SCREEN.BottomBarNavigation}
        component={BottomBarNavigation}
      />
      {/* <Drawer.Screen name={SCREEN.DrawerStack} component={DrawerStack} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigations;
