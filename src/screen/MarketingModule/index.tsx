import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {useState} from 'react';
import Header from '../../component/common/Header';
import {Icon} from '../../assest';
import {COLOR} from '../../themes/StyleGuides';
import NewOpportunities from '../../component/other/MarketingModuleCom/NewOpportunities';
import PaidCampaigns from '../../component/other/MarketingModuleCom/PaidCampaigns';
import OrganicCampaigns from '../../component/other/MarketingModuleCom/OrganicCampaigns';
import FollowUpCampaigns from '../../component/other/MarketingModuleCom/FollowUpCampaigns';

const MarketingModule = (prop: any) => {
  const {navigation} = prop;
  const [NewSelector, setNewSelector] = useState(false);
  const [selector, setSelector] = useState(0);

  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="Marketing"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView scrollEnabled={true}>
        <View style={styles.selecorContainer}>
          <TouchableOpacity
            style={{
              ...styles.header,
              backgroundColor: selector == 0 ? COLOR.primary : COLOR.whites,
            }}
            onPress={() => setSelector(0)}>
            <Text style={styles.textStyle}>New{'\n'}Opportunities</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.header,
              backgroundColor: selector == 1 ? COLOR.primary : COLOR.whites,
            }}
            onPress={() => setSelector(1)}>
            <Text style={styles.textStyle}>Paid{'\n'}Campaigns</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.header,
              backgroundColor: selector == 2 ? COLOR.primary : COLOR.whites,
            }}
            onPress={() => setSelector(2)}>
            <Text style={styles.textStyle}>Organic{'\n'}Campaigns</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.header,
              backgroundColor: selector == 3 ? COLOR.primary : COLOR.whites,
            }}
            onPress={() => setSelector(3)}>
            <Text style={styles.textStyle}>Follow Up{'\n'}Campaigns</Text>
          </TouchableOpacity>
        </View>
        {selector == 0 ? (
          <NewOpportunities />
        ) : selector == 1 ? (
          <PaidCampaigns />
        ) : selector == 2 ? (
          <OrganicCampaigns />
        ) : (
          <FollowUpCampaigns />
        )}
      </ScrollView>
      <View style={styles.bottomBar}></View>
    </View>
  );
};
export default MarketingModule;
