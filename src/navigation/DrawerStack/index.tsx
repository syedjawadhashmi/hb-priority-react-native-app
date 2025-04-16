import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SCREEN from '../../data/ScrName';
const Stack = createNativeStackNavigator();
import * as screens from '../../screen'

const DrawerStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN.GeneralSettingsAccount} component={screens.GeneralSettingsAccount} />
      <Stack.Screen name={SCREEN.GeneralSettingsForms} component={screens.GeneralSettingsForms} />
      <Stack.Screen name={SCREEN.GeneralSettingUsers} component={screens.GeneralSettingUsers} />
      <Stack.Screen name={SCREEN.BillingDashboard} component={screens.BillingDashboard} />
      <Stack.Screen name={SCREEN.TeamGeneralSetting} component={screens.TeamGeneralSetting} />
      <Stack.Screen name={SCREEN.EmailReplyForward} component={screens.EmailReplyForward} />
      <Stack.Screen name={SCREEN.Dashboard} component={screens.Dashboard} />
      <Stack.Screen name={SCREEN.Payments} component={screens.Payments} />
      <Stack.Screen name={SCREEN.InvoiceIDNumber} component={screens.InvoiceIDNumber} />
      <Stack.Screen name={SCREEN.PaymentsMethods} component={screens.PaymentsMethods} />
      <Stack.Screen name={SCREEN.MarketingModule} component={screens.MarketingModule} />
      <Stack.Screen name={SCREEN.SearchWebchatSettings} component={screens.SearchWebchatSettings} />
      <Stack.Screen name={SCREEN.WebchatFAQ} component={screens.WebchatFAQ} />
      <Stack.Screen name={SCREEN.DarwinWidget} component={screens.DarwinWidget} />


    </Stack.Navigator>
  );
};

export default DrawerStack;
