import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as screens from '../../screen';
import SCREEN from '../../data/ScrName';
import DrawerNavigations from '../DrawerNavigation';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* Inbox Module Screen  */}
        <Stack.Screen name={SCREEN.Splash} component={screens.Splash} />
        <Stack.Screen name={SCREEN.Login} component={screens.Login} />
        <Stack.Screen name={SCREEN.SignUp} component={screens.SignUp} />
        <Stack.Screen name={SCREEN.ForgotPassword} component={screens.ForgotPassword} />
        <Stack.Screen name={SCREEN.AccountSetUp} component={screens.AccountSetUp} />

        <Stack.Screen name={SCREEN.NotificationsAdditionalOptions} component={screens.NotificationsAdditionalOptions} />



        <Stack.Screen
          name={SCREEN.DrawerNavigations}
          component={DrawerNavigations}
        />
        <Stack.Screen name={SCREEN.Chat} component={screens.Chat} />
        <Stack.Screen name={SCREEN.SaveNumber} component={screens.SaveNumber} />
        <Stack.Screen name={SCREEN.CallScreen} component={screens.CallScreen} />
        <Stack.Screen
          name={SCREEN.Incomingcall}
          component={screens.Incomingcall}
        />
        <Stack.Screen name={SCREEN.DialNumber} component={screens.DialNumber} />
        <Stack.Screen name={SCREEN.SendEmail} component={screens.SendEmail} />
        <Stack.Screen name={SCREEN.Onbording} component={screens.Onbording} />
        <Stack.Screen name={SCREEN.Payments} component={screens.Payments} />

        <Stack.Screen
          name={SCREEN.CCRefundTerminal}
          component={screens.CCRefundTerminal}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
