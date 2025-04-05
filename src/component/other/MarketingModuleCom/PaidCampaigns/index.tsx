import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './style';
import {
  DBReactivationLsit,
  PaidCampaignsLsit,
} from '../../../../data/DummayData';
import PaidCampaignsList from '../../../core/PaidCampaignsList';
import { hp } from '../../../../themes/StyleGuides';

const PaidCampaigns = () => {
  return (
    <View style={styles.container}>
      <PaidCampaignsList
        data={PaidCampaignsLsit}
        title_1="Name"
        title_2="Impressions"
        title_3="Clicks"  
        title_4="Conversions"
      />
      <Text style={styles.TitleStyle}>DB Reactivation</Text>
      <PaidCampaignsList
        data={DBReactivationLsit}
        title_1="Name"
        title_2="Texts Sent"
        title_4="Leads"
      />
      <View style={{height:hp(10)}} />
    </View>
  );
};
export default PaidCampaigns;
