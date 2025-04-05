import React from 'react';
import {View, Image, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as screen from '../../screen';
import {COLOR} from '../../themes/StyleGuides';
import SCREEN from '../../data/ScrName';
import {Icon} from '../../assest';
import {styles} from './style';

const Tab = createBottomTabNavigator();

export default function BottomBarNavigation() {
  return (
    <View style={{flex: 1, zIndex: 2, backgroundColor: COLOR.white}}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {display: 'none'},
          tabBarStyle: {
            display: 'flex',
            height: 50,
            backgroundColor: COLOR.primary,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}>
        <Tab.Screen
          name={SCREEN.Home}
          component={screen.Home}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.container}>
                <Image
                  source={Icon.chat}
                  style={[
                    styles.imageStyle,
                    {tintColor: focused ? COLOR.white : COLOR.gray_3},
                  ]}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name={SCREEN.Phone}
          component={screen.Phone}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.container}>
                <Image
                  source={Icon.phone_receive}
                  style={[
                    styles.imageStyle,
                    {tintColor: focused ? COLOR.white : COLOR.gray_3},
                  ]}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name={SCREEN.Email}
          component={screen.Email}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.container}>
                <Image
                  source={Icon.message}
                  style={[
                    styles.imageStyle,
                    {tintColor: focused ? COLOR.white : COLOR.gray_3},
                  ]}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name={SCREEN.Chatnet}
          component={screen.Chatnet}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.container}>
                <Image
                  source={Icon.chatnet}
                  style={[
                    styles.imageStyle,
                    {tintColor: focused ? COLOR.white : COLOR.gray_3},
                  ]}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
