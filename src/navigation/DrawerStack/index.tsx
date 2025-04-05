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
      <Stack.Screen name={SCREEN.Payments} component={screens.Payments} />
      <Stack.Screen name={SCREEN.InvoiceIDNumber} component={screens.InvoiceIDNumber} />
      <Stack.Screen name={SCREEN.PaymentsMethods} component={screens.PaymentsMethods} />
      <Stack.Screen name={SCREEN.Dashboard} component={screens.Dashboard} />
      <Stack.Screen name={SCREEN.Check_Ins} component={screens.Check_Ins} />
      <Stack.Screen name={SCREEN.Rankings} component={screens.Rankings} />
      <Stack.Screen name={SCREEN.PerformanceOverview} component={screens.PerformanceOverview} />
      <Stack.Screen name={SCREEN.LocalListings} component={screens.LocalListings} />
      <Stack.Screen name={SCREEN.LocalList} component={screens.LocalList} />
      <Stack.Screen name={SCREEN.MarketingModule} component={screens.MarketingModule} />
      <Stack.Screen name={SCREEN.CRM} component={screens.CRM} />
      <Stack.Screen name={SCREEN.CalendarSearch} component={screens.CalendarSearch} />
      <Stack.Screen name={SCREEN.CalendarGoogleSign} component={screens.CalendarGoogleSign} />
      <Stack.Screen name={SCREEN.CalendarConfiguration} component={screens.CalendarConfiguration} />
      <Stack.Screen name={SCREEN.JohnCalendar} component={screens.JohnCalendar} />
      <Stack.Screen name={SCREEN.ContactsCalendar} component={screens.ContactsCalendar} />
      <Stack.Screen name={SCREEN.NewContactCalendar} component={screens.NewContactCalendar} />
      <Stack.Screen name={SCREEN.ContactDetailsCalendar} component={screens.ContactDetailsCalendar} />
      <Stack.Screen name={SCREEN.ScheduleAppointment} component={screens.ScheduleAppointment} />
      <Stack.Screen name={SCREEN.AvailabilityCalendar} component={screens.AvailabilityCalendar} />
      <Stack.Screen name={SCREEN.NotificationsAdditionalOptions} component={screens.NotificationsAdditionalOptions} />
      <Stack.Screen name={SCREEN.CustomizationsCalendar} component={screens.CustomizationsCalendar} />
      <Stack.Screen name={SCREEN.MeetingDetails} component={screens.MeetingDetails} />
      <Stack.Screen name={SCREEN.DocumentsModule} component={screens.DocumentsModule} />
      <Stack.Screen name={SCREEN.Reputation} component={screens.Reputation} />
      <Stack.Screen name={SCREEN.ReputationReviews} component={screens.ReputationReviews} />
      <Stack.Screen name={SCREEN.ShowcaseReviews} component={screens.ShowcaseReviews} />
      <Stack.Screen name={SCREEN.SelectReviewsReputation} component={screens.SelectReviewsReputation} />
      <Stack.Screen name={SCREEN.WidgetDesign} component={screens.WidgetDesign} />
      <Stack.Screen name={SCREEN.CalendarFullTime} component={screens.CalendarFullTime} />

    </Stack.Navigator>
  );
};

export default DrawerStack;
