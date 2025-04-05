import {ScrollView, Text, View} from 'react-native';
import styles from './style';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';
import ReportConnections from '../../../component/other/ReputationModule/ReportConnections';
import ReviewSources from '../../../component/other/ReputationModule/ReviewSources';
import ReputationModal from '../../../component/core/ReputationModal';
import {useState} from 'react';
import SCREEN from '../../../data/ScrName';
import ModalLoader from '../../../component/core/ModalLoader';
import GeneralSettings from '../../../component/other/ReputationModule/GeneralSettings';
import BusinessDetails from '../../../component/other/ReputationModule/BusinessDetails';

const Reputation = (props: any) => {
  const {navigation} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [sourceText, setSourceText] = useState('');
  const [LoadigModal, setloadingModal] = useState(false);

  const handalNav = () => {
    setloadingModal(true)
    setTimeout(()=>{
      setloadingModal(false)

      navigation.navigate(SCREEN.ReputationReviews);

    },3000)
  };

  const handalModal = (e: any) => {
    setModalVisible(true);
    setSourceText(e);
  };
  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="Reputation"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView>
        <GeneralSettings />
        <BusinessDetails />
        <ReportConnections />
        <ReviewSources
          onpress={handalNav}
          onpressSource={(e: any) => handalModal(e)}
        />
        <ReputationModal
          title={sourceText}
          visible={modalVisible}
          onpressOfModal={() => setModalVisible(false)}
        />
      </ScrollView>
      <ModalLoader visible={LoadigModal} />

      <View style={styles.bottomBar}></View>
    </View>
  );
};
export default Reputation;
